import React, { useState } from "react";

const UserProfileCard = ({ name, age, bio, location, profilePicture }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleFollow = () => setIsFollowed(!isFollowed);
  const toggleBio = () => setShowFullBio(!showFullBio);

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "16px", maxWidth: "300px" }}>
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>
        Bio: {showFullBio ? bio : `${bio.slice(0, 50)}...`}
        {bio.length > 50 && (
          <button onClick={toggleBio} style={{ marginLeft: "8px", color: "blue", border: "none", background: "none", cursor: "pointer" }}>
            {showFullBio ? "Read less" : "Read more"}
          </button>
        )}
      </p>
      <button onClick={toggleFollow} style={{ padding: "8px 16px", marginTop: "10px", cursor: "pointer" }}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default UserProfileCard;
