import Head from 'next/head'

const HeadMetadata = ({ meta }: { meta: { [key: string]: string } }) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={meta.description} />
      <meta property="og:url" content={meta.path} />
      <link rel="canonical" href={meta.path} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Lalu Ahmad Ardiansyah" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@laluardian_" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.localStyles && <link rel="stylesheet" href={meta.localStyles} />}
    </Head>
  )
}

export default HeadMetadata
