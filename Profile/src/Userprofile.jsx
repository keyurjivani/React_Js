import React, { useState } from "react";

const UserProfileCard = ({ name, age, bio, location, profilePicture }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleFollow = () => setIsFollowed(!isFollowed);
  const toggleBio = () => setShowFullBio(!showFullBio);

  return (
    <div className="user-profile-card">
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        className="profile-picture"
      />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>
        Bio: {showFullBio ? bio : `${bio.slice(0, 50)}...`}
        {bio.length > 50 && (
          <button
            onClick={toggleBio}
            aria-label={showFullBio ? "Show less bio" : "Show more bio"}
            className="bio-toggle-button"
          >
            {showFullBio ? "Read less" : "Read more"}
          </button>
        )}
      </p>
      <button onClick={toggleFollow} className="follow-toggle-button">
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default UserProfileCard;
