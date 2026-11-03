import React, { useState } from "react";

const Feed = () => {
  const [posts, setPost] = useState([
    {
      _id: "1",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbnN8ZW58MHx8fHwxNzkzNjQ3ODIzfDA&ixlib=rb-4.1.0&w=393&h=852&fit=max&q=80",
      caption: "A Piece of Art",
    },
  ]);

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((posts) => (
          <div key={posts._id} className="post-card">
            <img src={posts.image} alt={posts.caption} />
            <p>{posts.caption}</p>
          </div>
        ))
      ) : (
        <h1>No posts available</h1>
      )}
    </section>
  );
};

export default Feed;
