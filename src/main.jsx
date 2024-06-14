import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx';
import Calculator from './components/Calculator.jsx';
import './styles/index.css';
import CalculatorContextProvider from './Context/Calculator_context.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/calculator",
    element: <Calculator />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <CalculatorContextProvider>
    <RouterProvider router={router}/>
  </CalculatorContextProvider>
  
);
