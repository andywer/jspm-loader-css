function fixUrl(url) {
  // quick-fix for flawed hrefs ("/http:/localhost:1234/...")
  return url.replace(/^\/(https?):\//, '$1://')
}

export function resolveUrl(url, decl, from, dir) {
  if (url.charAt(0) === '.') {
    // relative path; not using path.join() since it would trim 'http://' to 'http:/'
    return fixUrl(dir) + '/' + url
  }
  else {
    // something absolute (Href or absolute patch)
    return url
  }
}
