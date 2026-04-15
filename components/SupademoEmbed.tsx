type SupademoEmbedProps = {
  demoId: string
  title?: string
  className?: string
}

export default function SupademoEmbed({
  demoId,
  title = 'Supademo Demo',
  className = '',
}: SupademoEmbedProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-[20px] ${className}`}>
      <div className="relative w-full pb-[57.9%]">
        <iframe
          src={`https://app.supademo.com/embed/${demoId}`}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="clipboard-write *; fullscreen *;"
          allowFullScreen
        />
      </div>
    </div>
  )
}