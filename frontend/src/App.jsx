import { useState } from 'react'
import { Card } from './components/Card'

import './App.css'

function App() {
  

  return (
    <div className="App">
      <Card imgSrc="https://picsum.photos/200/300" title="Title" description="this is very long description" link="card page"></Card>
    </div>
  );
}

export default App
