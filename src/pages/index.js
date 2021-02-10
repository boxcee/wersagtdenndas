import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';

function Home() {
  const context = useDocusaurusContext();
  const {quote, author, source, date} = usePluginData('database');
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <h3>{quote}</h3>
        <span>{author}</span>
      </main>
    </Layout>
  );
}

export default Home;
