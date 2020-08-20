import fetch from 'node-fetch';
import Layout from '../../components/layout';

const Post = ({ post }) => {
  return (
    <Layout>
      <div className="py-8 md:py-16">
        <h1 className="mb-6 text-4xl md:text-6xl leading-tight font-black dark:text-gray-300">
          {post.title}
        </h1>
        <p className="md:text-2xl text-gray-600">{post.body}</p>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default Post;
