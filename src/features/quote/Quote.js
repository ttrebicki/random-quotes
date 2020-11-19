import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  newQuote,
  selectIndex
} from './quoteSlice';
import styles from './Quote.module.css';

export function Quote() {

  const rQuote = useSelector(selectIndex);
  const dispatch = useDispatch();
  const genNewQuote = () => {

    dispatch(newQuote());
  }

  return (
    <div className={styles.Quote} id="quote-box">
      <div className={styles.Text} id="text">{rQuote.quote}</div>
      <div  className={styles.Author} id="author">{rQuote.author}</div>
      <div className={styles.NewQuote} id="new-quote" onClick={genNewQuote}>New Quote</div>
      <a className={styles.TweetQuote} id="tweet-quote" href={"https://twitter.com/intent/tweet/?text=" + (rQuote.quote) + " " + (rQuote.author)} target="_blank" rel="noreferrer">Tweet</a>
    </div>
  )
}
