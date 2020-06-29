import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';
import PostsContainer from './components/posts-container';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <PostsContainer/>
      <Footer/>
    </div>
  );
}

export default App;
