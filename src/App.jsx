import { Route, Routes } from 'react-router-dom';
import './App.css';
import ArticleDetails from './components/ArticleDetails';
import ArticlesList from './components/ArticlesList';
import CommentsList from './components/CommentsList';
import Home from './components/Home';

function App() {

  return (
    <>
      <h1>My NC News</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles/:article_id' element={<ArticleDetails />} />
        <Route path='/articles' element={<ArticlesList />} />
        <Route path='/articles/:article_id/comments' element={<CommentsList />} />
      </Routes>

    </>
  )
}

export default App