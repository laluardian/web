import Image from 'next/image'
import AnchorLink from '../components/anchor'
import Container from '../components/container'
import type { ExtendedAnchorAttrs } from '../lib/types'
import GIthubIcon from '../public/vectors/github-icon.svg'
import LinkedinIcon from '../public/vectors/linkedin-icon.svg'
import TwitterIcon from '../public/vectors/twitter-icon.svg'

const socialMediaLinksMeta: ExtendedAnchorAttrs[] = [
  {
    href: 'https://www.linkedin.com/in/laluardian',
    children: <LinkedinIcon className="h-8 w-8" />,
  },
  {
    href: 'https://github.com/laluardian',
    children: <GIthubIcon className="h-8 w-8" />,
  },
  {
    href: 'https://twitter.com/laluardian_',
    children: <TwitterIcon className="h-8 w-8" />,
  },
]

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center gap-4">
        <div className="w-[96px] sm:w-[176px]">
          <Image
            alt="Lalu Ahmad Ardiansyah"
            height={176}
            width={176}
            src="/images/avatar.jpg"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1>Lalu Ahmad Ardiansyah</h1>
          <h2 className="mb-2 text-gray-700">Full-stack Developer</h2>
          <p className="mb-4">
            Based in Lombok, Indonesia. Specializes in building web applications using modern tools
            and technologies such as TypeScript, React, Node.js, Go, MongoDB, PostgreSQL, Docker,
            etc.
          </p>
          <ul className="flex gap-4">
            {socialMediaLinksMeta.map(linkMeta => (
              <li key={linkMeta.href}>
                <AnchorLink {...linkMeta} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}
