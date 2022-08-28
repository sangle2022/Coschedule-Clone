import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import {store} from './Redux/store';
import  GlobalContext from './Context/GlobalContext'
import { ContextWrapper } from './Context/GlobalContext';
import { DayContextProvider } from './Context/ContextDay';
const root = ReactDOM.createRoot(document.getElementById('root'));
// {Dont change index file unless you are using redux}
//{Inform team leader if any changes needed}
root.render(
    <ChakraProvider>
    <BrowserRouter>
    <Provider store={store}>
      <ContextWrapper>

  <DayContextProvider>
   <App />
   </DayContextProvider>
   </ContextWrapper>
    </Provider>
  </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();