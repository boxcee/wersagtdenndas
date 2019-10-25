import React, { Component } from 'react';

const Quote = ({ content, author, source, id }) => (
  <div>
    <p>"{content}"</p>
    <div className='right'>- <a href={source}>{author}</a></div>
    <style jsx>{`
      .right {
        text-align: right;
      }
    `}</style>
  </div>
);

export default Quote;
