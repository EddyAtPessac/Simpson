import React from "react";

const DisplayQuote = ({ quoteObj }) => (
  <figure>
    <img src={quoteObj.image} alt={quoteObj.character} />
    <figcaption>
      <blockquote>{quoteObj.quote}</blockquote>
      <cite>{quoteObj.character}</cite>
    </figcaption>
  </figure>
);

export default DisplayQuote;
