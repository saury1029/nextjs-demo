import fetch from 'node-fetch';
import Link from 'next/link';

import Layout from '../../components/layout';

const Posts = ({ posts = [] }) => {
  return (
    <Layout>
      <div>
        {posts.map((post) => (
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <div className="py-8 group cursor-pointer" key={post.id}>
              <h1 className="mb-4 text-5xl font-bold leading-tight break-words whitespace-normal group-hover:text-primary">
                {post.title}
              </h1>
              <p className="text-xl truncate text-gray-600">{post.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts: posts.slice(0, 20),
    },
  };
};

export default Posts;
