import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Home" description="Benvenuto nel sito SelfLearn!">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Benvenuto nel mio sito Docusaurus!</h1>
        <p>Questa è la homepage personalizzata creata con React.</p>
        <p>
          Vai alla sezione <a href="/docs/intro">Tutorial</a> o al <a href="/blog">Blog</a>.
        </p>
      </main>
    </Layout>
  );
}
