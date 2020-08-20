import Link from 'next/link';
import Container from './container';

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

export default function Nav() {
  return (
    <nav className="border-b">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <Link href="/">
            <a className="text-2xl text-gray-700 font-bold no-underline">
              Next.js Demo
            </a>
          </Link>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/posts">
              <a className="text-gray-700 hover:text-primary hover:underline">
                POSTS
              </a>
            </Link>
            <Link href="/users">
              <a className="text-gray-700 hover:text-primary hover:underline">
                USERS
              </a>
            </Link>
            <Link href="/photos">
              <a className="text-gray-700 hover:text-primary hover:underline">
                PHOTOS
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
