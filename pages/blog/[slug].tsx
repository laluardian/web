import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import Container from '../../components/container'
import type { BlogPostProps, EGSPC } from '../../lib/types'
import { getLocaleDateString } from '../../lib/utils'

export default function BlogPost({ frontmatter, content }: BlogPostProps) {
  return (
    <Container
      additionalMetadata={{
        title: `${frontmatter.title} - Lalu Ahmad Ardiansyah`,
        localStyles: 'https://unpkg.com/prism-themes@1.6.0/themes/prism-ghcolors.css',
      }}
    >
      <article className="prose">
        <h1 className="mb-1 text-3xl md:text-5xl">{frontmatter.title}</h1>
        <div className="mb-6 flex items-center">
          <div className="flex w-[28px] items-center">
            <Image
              alt="Lalu Ahmad Ardiansyah"
              height={28}
              width={28}
              src="/images/avatar.jpg"
              className="rounded-full"
            />
          </div>
          <p className="ml-2 text-sm leading-5 text-gray-700">
            Lalu Ahmad Ardiansyah — {getLocaleDateString(frontmatter.publishedAt)}
          </p>
        </div>
        <MDXRemote compiledSource={content} />
      </article>
    </Container>
  )
}

export const getStaticProps = async ({ params: { slug } }: EGSPC) => {
  const file = fs.readFileSync(`data/blog/${slug}.mdx`, 'utf8')
  const { data: frontmatter, content: source } = matter(file)
  const { compiledSource } = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrismPlus,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    },
  })

  return {
    props: {
      frontmatter,
      content: compiledSource,
    },
  }
}

export const getStaticPaths = () => {
  const files = fs.readdirSync('data/blog')
  const paths = files.map(file => ({
    params: {
      slug: file.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
