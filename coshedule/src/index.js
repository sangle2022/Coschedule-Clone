import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import { store } from './Redux/store';
import { DayContextProvider } from './Context/DayContext';
import ContextWrapper from './Context/ContextWrapper';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode><BrowserRouter>
  <ChakraProvider>
    <Provider store={store}>
    <ContextWrapper>
          <DayContextProvider>
            <App />
          </DayContextProvider>
        </ContextWrapper>
      </Provider>
  </ChakraProvider> 
</BrowserRouter></StrictMode>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
