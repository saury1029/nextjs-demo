import Container from './container';

const Footer = () => (
  <div className="text-xs bg-gray-200 text-gray-500">
    <Container>
      <div className="text-center leading-10 font-bold">
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="text-gray-600 hover:text-primary"
        >
          Next.js
        </a>{' '}
        +{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="text-gray-600 hover:text-primary"
        >
          Tailwind CSS
        </a>{' '}
        +{' '}
        <a
          href="http://jsonplaceholder.typicode.com/"
          target="_blank"
          className="text-gray-600 hover:text-primary"
        >
          JSONPlaceholder
        </a>
      </div>
    </Container>
  </div>
);

export default Footer;
