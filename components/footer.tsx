import type { ExtendedAnchorAttrs } from '../lib/types'
import Anchor from './anchor'

const FooterExternalLinksMeta: { [key: string]: ExtendedAnchorAttrs } = {
  nextjs: { href: 'https://nextjs.org', children: 'Next.js' },
  vercel: { href: 'https://vercel.com', children: 'Vercel' },
  github: { href: 'https://github.com/laluardian/web', children: 'GitHub' },
}

const Footer = () => {
  const { nextjs, vercel, github } = FooterExternalLinksMeta

  return (
    <footer className="mt-auto flex items-center">
      <p className="py-2 text-xs">
        This website is built with <Anchor {...nextjs} /> and hosted on <Anchor {...vercel} />. The
        source code is hosted on <Anchor {...github} />.
      </p>
    </footer>
  )
}

export default Footer
