import dynamic from 'next/dynamic';

import Container from './container';
import Footer from './footer';

const Nav = dynamic(() => import('./nav'), { ssr: false });

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Container clsName="flex-1 pb-10">{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
