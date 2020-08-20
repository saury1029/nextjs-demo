import fetch from 'node-fetch';
import Layout from '../../components/layout';

const User = ({ user }) => {
  return (
    <Layout>
      <div className="py-8 md:py-16 overflow-auto dark:text-gray-300">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 border dark:border-gray-700">Name</th>
              <th className="p-4 border dark:border-gray-700">Username</th>
              <th className="p-4 border dark:border-gray-700">Email</th>
              <th className="p-4 border dark:border-gray-700">Phone</th>
              <th className="p-4 border dark:border-gray-700">Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border dark:border-gray-700 p-4 text-center">
                {user.name}
              </td>
              <td className="border dark:border-gray-700 p-4 text-center">
                {user.username}
              </td>
              <td className="border dark:border-gray-700 p-4 text-center">
                {user.email}
              </td>
              <td className="border dark:border-gray-700 p-4 text-center">
                {user.phone}
              </td>
              <td className="border dark:border-gray-700 p-4 text-center">
                {user.website}
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="p-4 border dark:border-gray-700">City</th>
              <th className="p-4 border dark:border-gray-700">Street</th>
              <th className="p-4 border dark:border-gray-700">Suite</th>
              <th className="p-4 border dark:border-gray-700">Zipcode</th>
              <th className="p-4 border dark:border-gray-700">Geo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border dark:border-gray-700 p-4 text-center">
                {user.address.city}
              </td>
              <td className="border dark:border-gray-700 p-4 text-center">
                {user.address.street}
              </td>
              <td className="border dark:border-gray-700 p-4 text-center">
                {user.address.suite}
              </td>
              <td className="border dark:border-gray-700 p-4 text-center">
                {user.address.zipcode}
              </td>
              <td className="border dark:border-gray-700 p-4 text-center">
                {user.address.geo.lat}-{user.address.geo.lng}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
};

export default User;
