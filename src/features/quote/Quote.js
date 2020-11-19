import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  newQuote,
  selectIndex
} from './quoteSlice';
import './Quote.module.css';

export function Quote() {

  const rQuote = useSelector(selectIndex);
  const dispatch = useDispatch();
  const genNewQuote = () => {
    dispatch(newQuote());
  }

  return (
    <div className="Quote" id="quote-box">
      <div className="Text" id="text">{rQuote.quote}</div>
      <div  className="Author" id="author">{rQuote.author}</div>
      <div  className="NewQuote" id="new-quote" onClick={genNewQuote}>New Quote</div>
      <a className="TweetQuote" id="tweet-quote" href={"https://twitter.com/intent/tweet/?text=" + (rQuote.quote) + " " + (rQuote.author)} target="_blank">Tweet</a>
    </div>
  )
}
