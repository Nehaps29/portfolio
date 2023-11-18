// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/BottomNav';
import Layout from './components/Layout';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <Layout>
      <main>
        <Outlet />
      </main>
      </Layout>
      <Footer />
    </>
  );
}

export default App;



