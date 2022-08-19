import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import GlobalStyles from './components/styles/Global.styled';
import { store } from './redux';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <GlobalStyles />
          <AppRouter />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
