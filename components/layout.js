import Container from './container';
import Nav from './nav';
import Footer from './footer';

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
