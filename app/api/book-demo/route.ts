import { NextRequest, NextResponse } from 'next/server'

type BookDemoPayload = {
  position?: string
  positionOther?: string
  name?: string
  email?: string
  hospitalName?: string
  phone?: string
  comments?: string
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as BookDemoPayload

    const required: Array<keyof BookDemoPayload> = [
      'position',
      'name',
      'email',
      'hospitalName',
      'phone',
    ]

    const missing = required.filter((field) => !String(body[field] || '').trim())
    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      )
    }

    if (body.position === 'Other' && !String(body.positionOther || '').trim()) {
      return NextResponse.json(
        { success: false, message: 'Please provide a value for Other position.' },
        { status: 400 }
      )
    }

    console.log('Book Demo submission received:', {
      ...body,
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, message: 'Submission received successfully.' })
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid payload.' }, { status: 400 })
  }
}

