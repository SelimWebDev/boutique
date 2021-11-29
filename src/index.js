import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop';
import ShoppingList from './components/ShoppingList';
import MyCart from './components/MyCart';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop/>}>
            <Route path="shopping" element={<ShoppingList/>} />
            <Route path="mycart" element={<MyCart/>} />
          </Route>  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
