import React, { useState } from 'react';
import './Community.css';
import defaultAvatar from '../assets/avatar.png'; // Make sure you have an avatar image in assets

const initialPosts = [
  {
    id: 1,
    content: "Does anyone know a great pediatric walk-in clinic near Harbourfront?",
    comments: ["Try HealthOne, it's usually quick!", "I had a good experience at Bay Street Clinic."]
  },
  {
    id: 2,
    content: "Looking for a nanny who speaks both English and Mandarin. Any suggestions?",
    comments: ["Check the Community tab on the homepage!", "Our nanny speaks both and we found her here!"]
  }
];

const Community = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const postId = Date.now();
      setPosts([{ id: postId, content: newPost, comments: [] }, ...posts]);
      setNewPost('');
    }
  };

  const handleCommentSubmit = (e, postId, commentText) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, commentText] }
          : post
      )
    );
  };

  const handleDeletePost = (postId) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
  };

  const handleEditPost = (postId) => {
    const updatedContent = prompt("Edit your post:", posts.find((p) => p.id === postId)?.content);
    if (updatedContent !== null) {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId ? { ...post, content: updatedContent } : post
        )
      );
    }
  };

  return (
    <div className="community-page">
      <h2>👥 Community Forum</h2>
      <p>Share your thoughts, tips, or questions. Comment on posts to engage with others.</p>

      <form onSubmit={handlePostSubmit} className="post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write something to share with the community..."
          rows="4"
        />
        <button type="submit">Post</button>
      </form>

      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <div className="post-header">
              <img src={defaultAvatar} alt="avatar" className="post-avatar" />
              <p>{post.content}</p>
            </div>
            <div className="post-actions">
              <button onClick={() => handleEditPost(post.id)}>Edit</button>
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            </div>

            <div className="comments-section">
              <h4>Comments</h4>
              <ul>
                {post.comments.map((comment, idx) => (
                  <li key={idx}>{comment}</li>
                ))}
              </ul>

              <form
                onSubmit={(e) => {
                  const commentText = e.target.elements[`comment-${post.id}`].value;
                  handleCommentSubmit(e, post.id, commentText);
                  e.target.reset();
                }}
              >
                <input
                  type="text"
                  name={`comment-${post.id}`}
                  placeholder="Leave a comment..."
                />
                <button type="submit">Reply</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
