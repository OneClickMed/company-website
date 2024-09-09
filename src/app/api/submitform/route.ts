import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID || '';
const HUBSPOT_FORM_ID_GENERAL = process.env.HUBSPOT_FORM_ID_GENERAL || '';
const HUBSPOT_FORM_ID_HEALTHCARE = process.env.HUBSPOT_FORM_ID_HEALTHCARE || '';
const HUBSPOT_SUBSCRIPTION_ID = process.env.HUBSPOT_SUBSCRIPTION_ID || '';

if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID_GENERAL || !HUBSPOT_FORM_ID_HEALTHCARE || !HUBSPOT_SUBSCRIPTION_ID) {
  throw new Error('HubSpot environment variables are not defined');
}

async function readStream(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += decoder.decode(value, { stream: true });
  }
  result += decoder.decode(); // flush
  return result;
}

export async function POST(req: NextRequest) {
  if (!req.body) {
    return NextResponse.json({ success: false, message: 'Request body is missing' }, { status: 400 });
  }

  const bodyContent = await readStream(req.body);
  const body = JSON.parse(bodyContent);

  console.log('Request Body:', body);

  const { formType, formData, consent } = body;
  if (formData.url) {
    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  }
  if (!consent) {
    return NextResponse.json({ success: false, message: 'Consent to process data is required' }, { status: 400 });
  }

  let formId: string;
  if (formType === 'general') {
    formId = HUBSPOT_FORM_ID_GENERAL;
  } else if (formType === 'healthcare') {
    formId = HUBSPOT_FORM_ID_HEALTHCARE;
  } else {
    return NextResponse.json({ success: false, message: 'Invalid form type' }, { status: 400 });
  }


  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`;
  console.log('route:', url);
  const fields = [
    { objectTypeId: '0-1', name: 'email', value: formData.email },
    { objectTypeId: '0-1', name: 'firstname', value: formData.firstname },
    { objectTypeId: '0-1', name: 'lastname', value: formData.lastname },
    { objectTypeId: '0-1', name: 'message', value: formData.message },
    ...(formType === 'healthcare' ? [
      { objectTypeId: '0-2', name: 'name', value: formData.name }, // Company name
    ] : [])
  ];

  const data = {
    submittedAt: Date.now(),
    fields: fields,
    context: {
      pageUri: req.headers.get('referer') || '',
      pageName: 'OneClick-Med Contact Page',
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "I consent to the processing of my data to handle my request.",
        communications: [
          {
            value: true,
            subscriptionTypeId: HUBSPOT_SUBSCRIPTION_ID || '',
            text: "I agree to receive marketing communications from Example Company."
          }
        ]
      }
    }
  };

  console.log('Data:', JSON.stringify(data, null, 2));

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return NextResponse.json({ success: true, message: 'Form submitted successfully', data: response.data });
  } catch (error: any) {
    console.error('Error submitting form to HubSpot:', error.response ? error.response.data : error.message);
    return NextResponse.json({ success: false, message: 'Error submitting form', error: error.message }, { status: 500 });
  }
}

// New configuration syntax
export const dynamic = 'force-dynamic';
