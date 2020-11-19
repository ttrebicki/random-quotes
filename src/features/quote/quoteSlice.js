import { createSlice } from '@reduxjs/toolkit';
// import {randomImage} from './randomImage';

const getRandomQuoteIndex = (min, max) => {
  return Math.floor(Math.random() * (max-min) + min);
}

export const randomQuote = createSlice({
  name: 'quote',
  initialState: {
    index: 0,
    quotes: [
      {quote: 'This is a useful point to bear in mind because most people who do a great deal of harm in the world are protected against the knowledge that they do so.', author: 'David Graeber'},
      {quote: 'The process by which wealth is accumulated and distributed contains powerful forces pushing toward (...) an extremely high level of inequality.', author: 'Thomas Piketty'},
      {quote: 'We’ve willfully deluded and disempowered ourselves by continuing to appeal to the existing political arrangement of representation. Our blind faith has us waiting endlessly for a savior to drop from the sky.', author: 'Simon Springer'},
      {quote: 'Human beings have a fundamental desire for wholeness satisfied through their attachments to each other, their environment, and with Creation.', author: 'Christina Grof'},
      {quote: 'The pure always act from love. The damned always act from love. The truth is an act of love.', author: 'James Newell Osterberg, Jr.'},
      {quote: 'The very tissue of spatial experience alters, conjoining proximity and distance in ways that have few parallels in prior ages.', author: 'Anthony Giddens'},
      //{quote: randomImage(), author: ''}
    ]
  },
  reducers: {
    newQuote: (state) => {
      let currentIndex = state.index;

      const dontRepeat = (state, current) => {
        let newIndex = getRandomQuoteIndex(0, state.quotes.length);
        if (current !== newIndex) {
          state.index = newIndex;
        }
        else {
          return dontRepeat(state, current)
        }
      }

      dontRepeat(state, currentIndex);
    },
  },
});

export const { newQuote } = randomQuote.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectIndex = state => state.quote.quotes[state.quote.index];

export default randomQuote.reducer;
