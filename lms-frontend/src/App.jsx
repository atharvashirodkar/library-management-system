import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ListBook from "./pages/ListBook";
import AddUpdateBook from './pages/AddUpdateBook';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/books" element={<ListBook />} />
            <Route path="/add-book" element={<AddUpdateBook />} />
            <Route path="/book/:id" element={ <AddUpdateBook/> } />
            <Route path="/about" element={ <About/> } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;