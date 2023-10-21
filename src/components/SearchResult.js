import React from 'react';

function SearchResult({ results }) {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.objectID}>
          <a href={`/post/${result.objectID}`}>{result.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default SearchResult;
