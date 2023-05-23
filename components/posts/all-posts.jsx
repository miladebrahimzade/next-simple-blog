import PostGrid from './post-grid'
import classes from './all-posts.module.css'

const AllPosts = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>AllPosts</h1>
      <PostGrid posts={posts} />
    </section>
  )
}

export default AllPosts
