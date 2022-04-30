import React, { useState, useEffect } from "react";
import useApi from "./hooks/useApi";
import commentsApi from "./api/comments";
import postsApi from "./api/posts";
import "./App.css";

function App() {
  const getPostsApi = useApi(postsApi.getPosts);
  const getCommentsApi = useApi(commentsApi.getComments);

  useEffect(() => {
    getPostsApi.request();
    getCommentsApi.request();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Flüsterpost</p>
      </header>

      <div className="App-body">
        <h4>dummy posts</h4>
        {getPostsApi.loading && <p>Posts are loading!</p>}
        {getPostsApi.error && <p>{getPostsApi.error}</p>}
        <ul>
          {getPostsApi.data?.map((post, i) => (
            i < 8 ? <li key={post.id}>{post.title}</li> : <></>
          ))}
        </ul>

        <h4>dummy comments</h4>
        {getCommentsApi.loading && <p>Comments are loading!</p>}
        {getCommentsApi.error && <p>{getCommentsApi.error}</p>}
        <ul>
          {getCommentsApi.data?.map((comment, i) => (
            i < 8 ? <li key={comment.id}>{comment.name}</li> : <></>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
