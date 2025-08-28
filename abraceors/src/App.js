import React from 'react'
import Home from './Pages/Home/Home';
import Router from './Router/Router';
import { GlobalStyle } from './GlobalStyle';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  )
}

