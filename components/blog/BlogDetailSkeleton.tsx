export default function BlogDetailSkeleton() {
  return (
    <main className="min-h-screen animate-pulse bg-white px-4 py-16 md:px-10" aria-busy="true" aria-label="Loading article">
      <div className="mx-auto w-full max-w-content">
        <div className="h-4 w-28 rounded bg-gray-200" />
        <div className="mt-5 h-12 w-full max-w-4xl rounded-lg bg-gray-200 md:h-16" />
        <div className="mt-3 h-12 w-3/4 max-w-3xl rounded-lg bg-gray-200 md:h-16" />
        <div className="mt-6 flex gap-4">
          <div className="h-4 w-28 rounded bg-gray-200" />
          <div className="h-4 w-32 rounded bg-gray-200" />
        </div>
        <div className="mt-10 h-[360px] rounded-[28px] bg-gray-200 md:h-[560px]" />
        <div className="mt-10 space-y-4">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
          <div className="h-8 w-2/3 rounded-lg bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-11/12 rounded bg-gray-200" />
          <div className="h-4 w-4/5 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
        </div>
      </div>
    </main>
  )
}
