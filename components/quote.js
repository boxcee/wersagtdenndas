import React, { Component } from 'react';

const Quote = ({ content, author, source, id }) => <div key={id}>"{content}" said {author} according to {source}</div>;

export default Quote;
