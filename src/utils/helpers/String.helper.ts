import CryptoJS from 'crypto-js'

/**
 * Slugify a string
 * @description Converts a string into a URL-friendly slug by removing special characters, replacing spaces with hyphens, and converting to lowercase.
 * @param value
 */
export const slugify = (value: string) => {
  if (!value) {
    return ''
  }

  let slug: string

  slug = value.replace(/^\s+|\s+$/g, '')
  slug = slug.toLowerCase()

  const from = 'ãàáäâèéëêìíïîòóöôõùúüûñç·/_,:;'
  const to = 'aaaaaeeeeiiiiooooouuuunc------'

  for (let i = 0, l = from.length; i < l; i++) {
    slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  slug = slug
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  return slug
}

/**
 * String to MD5
 * @description Converts a string to its MD5 hash representation.
 * @param value
 */
export const stringToMd5 = (value: string): string => {
  return CryptoJS.MD5(value).toString(CryptoJS.enc.Hex)
}

/**
 * First Letter Upper Case
 * @description Converts the first letter of a string to uppercase and returns the modified string.
 * @param value
 * @returns {string}
 */
export const firstLetterUpperCase = (value: string): string => {
  if (!value) {
    return ''
  }

  const firstLetter = value.charAt(0).toUpperCase()
  const restOfString = value.slice(1)

  return firstLetter + restOfString
}
