import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navigation />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
