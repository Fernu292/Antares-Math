import './styles/App.css';
import React from 'react';
import Header from './components/Header';
import { useContext } from 'react';
import { calculatorContext } from './Context/Calculator_context';

const App = () => {

  const func = (x)=> {
    return x*x
  }

  const {round} = useContext(calculatorContext);

  console.log(round(1.5123253251, -4));
  return (
    <div>
      <Header />
    </div>
  );
}

export default App
