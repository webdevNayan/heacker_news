import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../redux/hackerNewsSlice';
import SearchResult from '../components/SearchResult';
import "./Home.scss"

function Home() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.hackerNews.searchResults);
  const loading = useSelector((state) => state.hackerNews.loading);
  const totalPages = Math.ceil(searchResults.length / 10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    dispatch(fetchSearchResults(searchQuery));
  };

  useEffect(() => {
    // Automatically fetch the latest news when the component loads.
    if (!searchQuery) {
      dispatch(fetchSearchResults('')); // Fetch the latest news
    }
  }, [dispatch, searchQuery]);

  // pagination
  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const currentResults = searchResults.slice(startIndex, endIndex);

  return (

    <>
    <div className='home'>
      <div className='input_container'> 
      <input
        type="text"
        placeholder="Search Hacker News"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? (
        <div className='loading'> Wait ... Page is Loading </div>
      ) : (
        <div className='search_result_container'>
          <SearchResult results={currentResults} />
        </div>
      )}

     
    </div>

     <div className="pagination_container">
            {currentPage > 1 && (
              <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            )}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={i + 1 === currentPage ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
            {currentPage < totalPages && (
              <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            )}
          </div>
          </>
  );
}

export default Home;
