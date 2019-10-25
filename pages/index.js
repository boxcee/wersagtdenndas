import React from 'react'
import Head from 'next/head'
import Quote from '../components/quote'
import fetch from "isomorphic-unfetch";
import { getDomain } from "../utils/domain";

const Home = ({ quote }) => (
  <div>
    <Head>
      <title>wersagtdenndas</title>
      <link rel='icon' href='/favicon.ico'/>
    </Head>

    <div className='hero'>
      <h1 className='title'>Wer sagt denn das?</h1>
    </div>

    <p className='quote'>
      <Quote {...quote}/>
    </p>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .quote {
        text-align: center;
      }
      .quote {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async () => {
  const res = await fetch(`${getDomain()}/api/quote/random`);
  const quote = await res.json();
  return {
    quote
  };
};

export default Home
