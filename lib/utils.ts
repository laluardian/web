const getLocaleDateString = (value: string | number | Date) => {
  const localeDateString = new Date(value).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return localeDateString
}

export { getLocaleDateString }
