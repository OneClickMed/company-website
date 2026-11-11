export function canOptimizeRemoteImage(src: string): boolean {
  if (src.startsWith('/') && !src.startsWith('//')) {
    return true
  }

  try {
    const url = new URL(src)
    if (url.protocol !== 'https:') {
      return false
    }

    if (url.hostname === 'beta.kiuloper.com') {
      return true
    }

    return (
      url.hostname === 'firebasestorage.googleapis.com' &&
      url.pathname.startsWith('/v0/b/oneclick-med-app.appspot.com/o/')
    )
  } catch {
    return false
  }
}
