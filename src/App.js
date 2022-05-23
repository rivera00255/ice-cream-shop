import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import Order from './pages/Order';
import Product from './pages/Product';
import Register from './pages/Register';

const GlobalStyle = createGlobalStyle`
html, body, * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif, 'Noto Sans KR', sans-serif;
  color: #444;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #444;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/product' element={<Product />} />
          <Route path='/register' element={<Register />} />
          <Route path='/order' element={<Order />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
