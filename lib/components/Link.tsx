import Link from 'next/link'

const CustomLink = ({
  href,
  ref,
  children,
  ...rest
}) => {
  if(!href) return <span ref={ref} {...rest}>{children}</span>

  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link ref={ref} href={href} {...rest}>
        {children}
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a ref={ref} href={href} {...rest} />
  }

  if(!href.startsWith('/') && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) href = `https://${href}`

  return <a target="_blank" rel="noopener noreferrer" ref={ref} href={href} {...rest} />
}

export default CustomLink