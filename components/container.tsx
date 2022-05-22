import { useRouter } from 'next/router'
import type { ContainerProps } from '../lib/types'
import Footer from './footer'
import HeadMetadata from './head-metadata'
import Navbar from './navbar'

const Container = ({ children, additionalMetadata }: ContainerProps) => {
  const hostname =
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.NEXT_PUBLIC_DOMAIN}`
      : 'http://localhost:3000'

  const meta = {
    title: 'Lalu Ahmad Ardiansyah',
    description:
      'A full-stack developer based in Lombok, Indonesia. Specializing in building ' +
      'web applications using modern tools and technologies such as TypeScript, ' +
      'React, Node.js, Go, MongoDB, PostgreSQL, Docker, etc.',
    type: 'website',
    path: `${hostname}${useRouter().asPath}`,
    ...additionalMetadata,
  }

  return (
    <>
      <HeadMetadata meta={meta} />
      <div className="mx-auto flex min-h-screen max-w-screen-md flex-col py-4 px-6 md:px-12">
        <Navbar />
        <main className="my-12">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Container
