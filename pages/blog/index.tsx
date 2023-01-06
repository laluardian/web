import fs from 'fs'
import matter from 'gray-matter'
import type { GetStaticProps } from 'next'
import Link from 'next/link'
import Container from '../../components/container'
import type { BlogPostProps } from '../../lib/types'

export default function Blog({ blogPosts }: { blogPosts: BlogPostProps[] }) {
  return (
    <Container
      additionalMetadata={{
        title: 'Blog - Lalu Ahmad Ardiansyah',
        description:
          'Random stuff that I managed to write. Mostly about web development and programming in general.',
      }}
    >
      <h1>Blog</h1>
      <p className="mb-6">This is where I share random stuff that I managed to write.</p>
      {!blogPosts && <p className="text-gray-700">There is no blog post found ~</p>}
      {blogPosts && (
        <ul className="ml-[1.3rem] list-[square]">
          {blogPosts.map(({ slug, frontmatter }) => {
            return (
              <li key={slug} className="mb-4 text-xl font-semibold hover:underline sm:text-2xl">
                <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>
      )}
    </Container>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const files = fs.readdirSync('data/blog')
  if (files.length === 0) return { props: {} }

  const blogPosts = files.map(file => {
    const slug = file.replace('.mdx', '')
    const fileContent = fs.readFileSync(`data/blog/${file}`, 'utf-8')
    const { data: frontmatter } = matter(fileContent)
    return {
      slug,
      frontmatter,
    }
  })

  blogPosts.sort((a, b) => {
    return (
      new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime()
    )
  })

  return {
    props: {
      blogPosts,
    },
  }
}
