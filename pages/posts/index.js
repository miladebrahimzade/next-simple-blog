import AllPosts from '../../components/posts/all-posts'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia veniam incidunt?',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia veniam incidunt?',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia veniam incidunt?',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia veniam incidunt?',
    date: '2022-02-10',
  },
]

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage
