import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Users from './components/Users';
import Tools from './components/Tools';
import GetStarted from './components/GetStarted';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Workflow from './components/Workflow';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const fetchTools = async () => {
  const res = await fetch('/data.json');
  return res.json()
}

const toolsPromise = fetchTools()


function App() {
  return (
    <div>

      <Navbar />
      <Banner />
      <Users />
      <Tools toolsPromise={toolsPromise} />
      <GetStarted />
      <Pricing />
      <Workflow />
      <Footer />

      <ToastContainer />


    </div>
  );
};

export default App;