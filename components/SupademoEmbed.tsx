type SupademoEmbedProps = {
  demoId: string
  title?: string
  className?: string
  eager?: boolean
}

export default function SupademoEmbed({
  demoId,
  title = 'Supademo Demo',
  className = '',
  eager = false,
}: SupademoEmbedProps) {
  return (
    <div className={`relative w-full overflow-hidden bg-white rounded-[20px] ${className}`}>
      <div className="relative w-full pb-[57.9%]">
        <iframe
          src={`https://app.supademo.com/embed/${demoId}`}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="clipboard-write; fullscreen"
          allowFullScreen
          loading={eager ? 'eager' : 'lazy'}
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  )
}