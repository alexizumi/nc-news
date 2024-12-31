// /App.jsx
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ArticleDetails from './components/ArticleDetails';
import ArticlesList from './components/ArticlesList';
import CommentsList from './components/CommentsList';
import Header from './components/Header';
import Home from './components/Home';

function App() {

  return (
    <>
      <Header />
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