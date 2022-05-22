import type { ExtendedAnchorAttrs } from '../lib/types'

const Anchor = ({ children, href, ...props }: ExtendedAnchorAttrs) => {
  const isExternal = (href: string) => {
    return href.startsWith('http://') || href.startsWith('https://')
  }

  return (
    <>
      {!isExternal(href) && (
        <a href={href} {...props}>
          {children}
        </a>
      )}
      {isExternal(href) && (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      )}
    </>
  )
}

export default Anchor
