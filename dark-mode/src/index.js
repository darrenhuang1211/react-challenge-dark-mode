import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import './styles/_dark-mode.scss';
import {ThemeContextProvider} from './common/contexts/ThemeContext';
import Routes from './routes';

ReactDOM.render(
  <ThemeContextProvider>
    <AppContainer>
      <Routes />
    </AppContainer>
  </ThemeContextProvider>,
  document.getElementById('root')
);
