import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
