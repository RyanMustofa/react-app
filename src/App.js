import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Content from './component/Content';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Content />
        <Sidebar />
        <Footer />
    </div>
  );
}

export default App;
