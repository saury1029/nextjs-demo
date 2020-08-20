import Link from 'next/link';

import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <Layout>
      <div className="pt-4 md:py-32">
        <h1 className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-black text-center dark:text-gray-600">
          Next.js +&nbsp;Tailwind&nbsp;CSS + JSONPlaceholder
        </h1>
        <div className="flex flex-wrap -mx-4 md:mt-8">
          <div className="w-full md:w-1/3 p-4">
            <Link href="/posts">
              <a className="block border px-4 py-6 bg-white rounded-md hover:bg-gray-200 dark:bg-gray-800 dark-hover:bg-gray-700 dark:border-gray-800">
                <h1 className="mb-2 text-2xl font-bold text-primary">POSTS</h1>
                <p className="truncate text-gray-500">
                  Posts from JSONPlaceholder
                </p>
              </a>
            </Link>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <Link href="/users">
              <a className="block border px-4 py-6 bg-white rounded-md hover:bg-gray-200 dark:bg-gray-800 dark-hover:bg-gray-700 dark:border-gray-800">
                <h1 className="mb-2 text-2xl font-bold text-primary">USERS</h1>
                <p className="truncate text-gray-500">
                  Users from JSONPlaceholder
                </p>
              </a>
            </Link>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <Link href="/photos">
              <a className="block border px-4 py-6 bg-white rounded-md hover:bg-gray-200 dark:bg-gray-800 dark-hover:bg-gray-700 dark:border-gray-800">
                <h1 className="mb-2 text-2xl font-bold text-primary">PHOTOS</h1>
                <p className="truncate text-gray-500">
                  Photos from JSONPlaceholder
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
