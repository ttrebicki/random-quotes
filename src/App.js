import React, {useEffect} from 'react';
import { Quote } from './features/quote/Quote';
import { useDispatch } from 'react-redux';
import { newQuote } from './features/quote/quoteSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.querySelector('.Quote').style.opacity = "1";
    dispatch(newQuote());
  })

  return (
    <div className="App">

        <Quote />

    </div>
  );
}

export default App;
