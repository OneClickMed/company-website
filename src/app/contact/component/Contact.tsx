'use client';

import React, { useState, useEffect } from 'react';
import GeneralEnquiriesForm from './GeneralEnquiriesForm';
import HealthcareFacilitiesForm from './HealthcareFacilitiesForm';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import FormLabel from './FormLabel';

const ContactForm: React.FC = () => {
  const router = useRouter(); // If using Next.js
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [formType, setFormType] = useState<'general' | 'healthcare'>('general');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [url, setUrl] = useState(''); // url field


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialFormType = params.get('formType') as 'general' | 'healthcare';
    if (initialFormType) {
      setFormType(initialFormType);
    }
  }, []);
  const validateForm = () => {
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
      setError('All fields are required.');
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (url) {
      return false;
    }
    if (!consent) {
      setError('You must consent to data processing to submit the form.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!validateForm()) {
      return;
    }
    setLoading(true);

    try {
      await axios.post('/api/submitform', {
        formType,
        formData,
        consent,
        newsletterConsent,
      });
      setLoading(false);
      setSuccess(true);
      setFormData({});
      setConsent(false);
      setNewsletterConsent(false);
    } catch (error) {
      setLoading(false);
      setError('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className='min-h-screen max-w-4xl mx-auto my-8 px-6'>
      <div className="mb-8 text-center">
        <h1 className="md:text-4xl text-2xl font-bold text-ocmbluedark">Contact Our Team</h1>
        <p className="text-gray-600 mt-2 px-4">We&apos;re here to assist you. Please fill out the form below or reach out to us directly.</p>
      </div>

      <div className="flex mb-8 border rounded-lg">
        <button
          onClick={() => setFormType('general')}
          className={`w-full px-2 py-2 text-sm ${formType === 'general' ? 'bg-ocmblue' : 'bg-gray-200'}`}
        >
          General Enquiries
        </button>
        <button
          onClick={() => setFormType('healthcare')}
          className={`w-full px-2 py-2 text-sm ${formType === 'healthcare' ? 'bg-ocmblue' : 'bg-gray-200'}`}
        >
          Healthcare Facilities
        </button>
      </div>
      <form className="space-y-6 w-full mb-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-ocmblue">
            {formType === 'general' ? 'General Enquiries' : 'Healthcare Facilities'}
          </h2>
          <p className="text-gray-600">
            {formType === 'general'
              ? 'Please fill out the form for general enquiries.'
              : 'Please fill out the form for healthcare facilities enquiries.'}
          </p>
        </div>
        {formType === 'general' ? (
          <GeneralEnquiriesForm formData={formData} setFormData={setFormData} />
        ) : (
          <HealthcareFacilitiesForm formData={formData} setFormData={setFormData} />
        )}
        {/* url field */}
        <div style={{ display: 'none' }}>
          <input
            type="text"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <p className='text-sm text-gray-600'>
          OneClick-Med is committed to protecting and respecting your privacy, and we&rsquo;ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:
          </p>
        </div>
        <div className="space-y-4">

          <div className="flex lg:items-center items-start">
            <input
              type="checkbox"
              id="newsletterConsent"
              checked={newsletterConsent}
              onChange={() => setNewsletterConsent(!newsletterConsent)}
              className="mr-2 accent-ocmblue p-2 text-white"
            />
            <FormLabel htmlFor="newsletterConsent" className='!text-lg -mt-2 lg:mt-0'> 
            I agree to receive other communications from OneClick-Med.
            </FormLabel>
          </div>
        </div>
        <p className='text-sm text-gray-600'>You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.</p>
       <div className="flex lg:items-center items-start">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={() => setConsent(!consent)}
              className="mr-2 accent-ocmblue p-2 text-white"

            />

            <FormLabel htmlFor="consent" required className='!text-lg -mt-2 lg:mt-0'> 
            I agree to allow OneClick-Med to store and process my personal data.
            </FormLabel>

          </div>
          <p className='text-sm text-gray-600 '>
            In order to provide you the content requested, we need to store and process your personal data. If you consent to us storing your personal data for this purpose, please tick the checkbox below.
            </p>
        
        
        {error && <p className="text-red-600 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">Your form has been submitted!</p>}
        <button
          type="submit"
          className="w-full justify-center py-4 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocmblue hover:bg-ocmblue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocmblue"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
