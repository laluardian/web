import type { GetStaticPropsContext } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import type { Url } from 'url'

type BlogPostProps = {
  frontmatter: { [key: string]: any }
  content: string
  slug: string
}

type ContainerProps = {
  children: ReactNode
  additionalMetadata?: { [key: string]: string }
}

type ExtendedAnchorAttrs = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  href: string | Url
}

type IParams = ParsedUrlQuery & { slug: string }

type ExtendedGetStaticPropsContext = Omit<GetStaticPropsContext, 'params'> & { params: IParams }

export type {
  BlogPostProps,
  ContainerProps,
  ExtendedAnchorAttrs,
  ExtendedGetStaticPropsContext as EGSPC,
}
