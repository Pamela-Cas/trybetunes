import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Content from './component/Content';
import Links from './component/Links';

class App extends React.Component {
  render() {
    return (<p>TrybeTunes</p>);
    return (
      <BrowserRouter>
        <Links />
        <Content />
      </BrowserRouter>
    );
  }
}
