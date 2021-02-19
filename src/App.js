import React from 'react'

import AnimatedCursor from 'react-animated-cursor'

import Construction from './components/Construction'

import './App.css';

function App() {
  return (
    <div>
      <AnimatedCursor
        color='176,224,230' />
      <Construction />
    </div>
  )
}

export default App;
