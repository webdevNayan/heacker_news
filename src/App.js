// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './Pages/Home';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:objectID" element={<PostDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
