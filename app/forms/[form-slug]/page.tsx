import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import formsData from '@/data/forms.json'

type FormConfig = {
  title: string
  subtitle: string
  formLink: string
}

const forms = formsData as Record<string, FormConfig>

interface FormPageProps {
  params: Promise<{
    'form-slug': string
  }>
}

function getForm(slug: string): FormConfig | null {
  return forms[slug] ?? null
}

// Sender embeds use the form id (the segment after /forms/ in the share link).
function getSenderFormId(formLink: string): string | null {
  const match = formLink.match(/\/forms\/([^/]+)/)
  return match ? match[1] : null
}

export async function generateMetadata({ params }: FormPageProps): Promise<Metadata> {
  const { 'form-slug': slug } = await params
  const form = getForm(slug)
  const canonical = `/forms/${slug}`

  if (!form) {
    return {
      title: 'Form Not Found',
      alternates: { canonical },
      robots: { index: false, follow: false },
    }
  }

  return {
    title: form.title,
    description: form.subtitle,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title: form.title,
      description: form.subtitle,
    },
  }
}

export default async function FormPage({ params }: FormPageProps) {
  const { 'form-slug': slug } = await params
  const form = getForm(slug)

  if (!form) {
    notFound()
  }

  const formId = getSenderFormId(form.formLink)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-content px-6 pb-16 pt-28 md:px-10 md:pt-32 ">
          <div className="mx-auto max-w-[860px]">
            <h1 className="mt-5 font-body text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.02] text-black">
              {form.title}
            </h1>
            <p className="mt-2 font-body text-[clamp(24px,3vw,34px)] font-bold leading-[1.15] text-black">
              {form.subtitle}
            </p>

            <div className="mt-8 rounded-[24px] bg-white">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-navy">Request Access</p>
              {formId ? (
                <div
                  key={formId}
                  style={{ textAlign: 'left' }}
                  className="sender-form-field "
                  data-sender-form-id={formId}
                />
              ) : (
                <iframe
                  src={form.formLink}
                  title={form.title}
                  className="h-[640px] w-full rounded-[16px] border-0"
                />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
