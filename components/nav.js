import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from './container';

export default function Nav() {
  const router = useRouter();
  console.log(router);
  const links = ['posts', 'users', 'photos'];

  return (
    <nav className="border-b">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <Link href="/">
            <a className="text-3xl text-gray-700 font-bold no-underline">
              Next.js Demo
            </a>
          </Link>
          <div className="flex space-x-8 mt-4 md:mt-0">
            {links.map((link) => (
              <Link href={`/${link}`}>
                <a
                  className={`hover:text-primary ${
                    router.pathname === `/${link}`
                      ? 'text-primary'
                      : 'text-gray-700'
                  }`}
                >
                  {link.toUpperCase()}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}
