import React from 'react';
import clsx from "clsx";
import Layout from '@theme/Layout';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

function Home() {
  const quotes = usePluginData('database');
  const {zitat, autor, quelle, datum} = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <Layout
      title={autor}
      description="Zitate die du kennen solltest.">
      <main>
        <section className={styles.quote}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4')}>
                <h3>“{zitat}“</h3>
                <span>&mdash; <i><a href={quelle}>{autor}{datum ? `, ${datum}` : ''}</a></i></span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
