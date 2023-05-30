import ReactMarkdown from 'react-markdown'
import PostHeader from './post-header'
import classes from './post-content.module.css'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const classToLanguage = (className) => {
    switch (className) {
      case 'language-js':
        return 'javascript'
      // we can add more languages
      default:
        return 'javascript'
    }
  }

  const customRenderers = {
    p: (p) => {
      const { node } = p
      if (node.children[0].tagName === 'img') {
        const image = node.children[0]

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }

      return <p>{p.children}</p>
    },

    code: (code) => {
      const { className, children } = code

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={classToLanguage(className)}
        >
          {children}
        </SyntaxHighlighter>
      )
    },
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
