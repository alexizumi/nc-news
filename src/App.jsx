import { Route, Routes } from 'react-router-dom';
import './App.css';
import ArticleDetails from './components/ArticleDetails';
import ArticlesList from './components/ArticlesList';
import Home from './components/Home';

function App() {

  return (
    <>
      <h1>My NC News</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles/:article_id' element={<ArticleDetails />} />
        <Route path='/articles' element={<ArticlesList />} />
      </Routes>

    </>
  )
}

export default App