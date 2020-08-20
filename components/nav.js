import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from './container';
import { useState } from 'react';

export default function Nav() {
  const router = useRouter();
  const localMode = window.localStorage.getItem('__DARK_MODE__') || 'light';
  localMode === 'dark' && document.body.classList.add('mode-dark');
  const [mode, setMode] = useState(localMode);
  const links = ['posts', 'users', 'photos'];

  function toggle() {
    setMode((md) => {
      if (md === 'light') {
        document.body.classList.add('mode-dark');
      } else {
        document.body.classList.remove('mode-dark');
      }
      window.localStorage.setItem(
        '__DARK_MODE__',
        md === 'light' ? 'dark' : 'light',
      );
      return mode === 'light' ? 'dark' : 'light';
    });
  }

  return (
    <nav className="border-b bg-white dark:bg-transparent dark:border-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <Link href="/">
            <a className="text-3xl text-gray-700 font-bold no-underline dark:text-gray-400">
              Next.js Demo
            </a>
          </Link>
          <div className="flex items-center space-x-8 mt-4 md:mt-0">
            {links.map((link) => (
              <Link href={`/${link}`} key={link}>
                <a
                  className={`hover:text-primary ${
                    router.pathname === `/${link}`
                      ? 'text-primary font-bold'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {link.toUpperCase()}
                </a>
              </Link>
            ))}
            <div className="flex items-center cursor-pointer" onClick={toggle}>
              <div
                className={`w-4 h-4 mr-1 rounded-full ${
                  mode === 'dark' ? 'bg-gray-400' : 'bg-gray-800'
                }`}
              ></div>
              <span
                className={mode === 'dark' ? 'text-gray-400' : 'text-gray-800'}
              >
                {mode === 'dark' ? 'LIGHT' : 'DARK'}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
