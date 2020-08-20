import fetch from 'node-fetch';
import Layout from '../../components/layout';

const User = ({ user }) => {
  return (
    <Layout>
      <div className="py-8 md:py-16 overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 border">Name</th>
              <th className="p-4 border">Username</th>
              <th className="p-4 border">Email</th>
              <th className="p-4 border">Phone</th>
              <th className="p-4 border">Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-4 text-center">{user.name}</td>
              <td className="border p-4 text-center">{user.username}</td>
              <td className="border p-4 text-center">{user.email}</td>
              <td className="border p-4 text-center">{user.phone}</td>
              <td className="border p-4 text-center">{user.website}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="p-4 border">City</th>
              <th className="p-4 border">Street</th>
              <th className="p-4 border">Suite</th>
              <th className="p-4 border">Zipcode</th>
              <th className="p-4 border">Geo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-4 text-center">{user.address.city}</td>
              <td className="border p-4 text-center">{user.address.street}</td>
              <td className="border p-4 text-center">{user.address.suite}</td>
              <td className="border p-4 text-center">{user.address.zipcode}</td>
              <td className="border p-4 text-center">
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
