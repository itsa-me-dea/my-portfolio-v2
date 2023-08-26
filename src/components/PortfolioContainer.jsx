import { useState } from 'react';
import NavTabs from './NavTabs';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Resume from './pages/Resume';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
// CSS Styling
import './pages/style.css';

// CSS Styling
const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const contentStyle = {
  flex: 1,
  padding: '20px',
};

export default function PortfolioContainer() {
  // Set default page
  const [currentPage, setCurrentPage] = useState('About');

  // Change page when nav is slected
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // Nav HTML
  return (
    <div style={pageStyle}>
      <MyHeader></MyHeader>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3" style={contentStyle}>{renderPage()}</main>
      <MyFooter></MyFooter>
    </div>
  );
}
