import fetch from 'node-fetch';
import Link from 'next/link';

import Layout from '../../components/layout';

const Photos = ({ photos = [] }) => {
  return (
    <Layout>
      <div className="flex flex-wrap -mx-4 py-4">
        {photos.map((photo) => (
          <div className="w-full md:w-1/4 p-4" key={photo.id}>
            <div className="" key={photo.id}>
              <img src={photo.url} alt="" />
              <h1 className="mt-2">{photo.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos = await res.json();

  return {
    props: {
      photos: photos.slice(0, 24),
    },
  };
};

export default Photos;
