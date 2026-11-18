import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="app">
      <Header />
      <div className="page">
        <main className="main">
          <Outlet /> {/* child routes render here */}
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
