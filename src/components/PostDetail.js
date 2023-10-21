// src/components/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostDetail } from '../redux/hackerNewsSlice';
import "./PostDetail.scss"

function PostDetail() {
  const dispatch = useDispatch();
  const { objectID } = useParams();
  const postDetail = useSelector((state) => state.hackerNews.postDetail);

  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    dispatch(fetchPostDetail(objectID)).then(() => {
      setLoading(false); // Set loading to false once data is fetched
    });
  }, [dispatch, objectID]);

  if (loading) {
    // Display a loader while loading
    return <div className='loading'> Please Wait Page is Loading</div>;
  }

  return (
    <div className='post_detail_container'>
      <h2>{postDetail.title}</h2>
      <p>Points: {postDetail.points}</p>
      <ul>
        {postDetail.children &&
          postDetail.children.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
      </ul>
    </div>
  );
}

export default PostDetail;
