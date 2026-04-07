interface DownloadButtonsProps {
  align?: 'left' | 'center'
}

export default function DownloadButtons({ align = 'left' }: DownloadButtonsProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${
        align === 'center' ? 'justify-center' : 'justify-start'
      }`}
    >
      <a
        href="https://apps.apple.com/us/app/beta-health/id6748623139"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Beta Health on the App Store"
        className="inline-flex transition-transform duration-300 hover:-translate-y-1"
      >
        <img
          src="/assets/img/others/appstore.png"
          alt="Download on the App Store"
          className="h-[42px] w-auto object-contain"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=ng.oneclickmeds.patients_app&pcampaignid=oneclickmedwebsite"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Beta Health on Google Play"
        className="inline-flex transition-transform duration-300 hover:-translate-y-1"
      >
        <img
          src="/assets/img/others/playstore.png"
          alt="Get it on Google Play"
          className="h-[42px] w-auto object-contain"
        />
      </a>
    </div>
  )
}
