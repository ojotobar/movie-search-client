import React from 'react';
import './App.css';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './features/components/NavigationBar';
import Footer from './features/components/Footer';
import Home from './features/components/Home';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
