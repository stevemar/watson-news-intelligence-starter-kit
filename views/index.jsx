import React from 'react';
import { Header, Jumbotron, Footer } from 'watson-react-components';
import Demo from './demo.jsx';

export default function Index() {
  return (
    <div>
      <Header
        mainBreadcrumbs="Watson News Intelligence Starter Kit"
        mainBreadcrumbsUrl="#"
        subBreadcrumbs="WatsonNewsIntelligenceBUPKX"
        subBreadcrumbsUrl=""
      />
      <Demo/>
    </div>
  );
}
