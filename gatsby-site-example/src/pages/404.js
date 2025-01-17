import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const seo = {
  title: '404 | NEL Pattern',
  description: `There seems to be an error on this page`,
};

const NotFoundPage = () => (
  <PageLayout {...{ seo }}>
    <h1>NOT FOUND</h1>

    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageLayout>
);

export default NotFoundPage;
