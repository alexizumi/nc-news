import { useState } from 'react';
import './App.css';
import ArticlesList from './components/ArticlesList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My NC News</h1>
      <ArticlesList />
    </>
  )
}

export default App
