import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ExtendedAnchorAttrs } from '../lib/types'

const navbarLinksMeta: ExtendedAnchorAttrs[] = [
  { href: '/', children: 'Home' },
  { href: '/blog', children: 'Blog' },
  { href: '/contact', children: 'Contact' },
]

const Navbar = () => {
  const currentPath = useRouter().asPath

  return (
    <nav>
      <ul className="ml-[-0.7rem] flex">
        {navbarLinksMeta.map(({ href, children }) => {
          return (
            <li key={href}>
              <Link href={href}>
                <a
                  className={clsx('inline-block rounded-md py-2 px-3 hover:bg-gray-200', {
                    'font-semibold': href === currentPath,
                  })}
                >
                  {children}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
