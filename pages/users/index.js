import fetch from 'node-fetch';
import Link from 'next/link';

import Layout from '../../components/layout';

const Users = ({ users = [] }) => {
  return (
    <Layout>
      <div>
        {users.map((user) => (
          <Link href="/users/[id]" as={`/users/${user.id}`}>
            <div className="py-6 border-b group cursor-pointer" key={user.id}>
              <h1 className="text-4xl font-bold group-hover:text-primary">
                {user.name}
              </h1>
              <p className="text-gray-500">
                <span className="pr-4">Email:{user.email}</span>
                <span>Phone:{user.phone}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default Users;
