import React from 'react';
import './App.css';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './features/components/public/common/NavigationBar';
import Footer from './features/components/public/common/Footer';
import Home from './features/components/public/common/Home';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
