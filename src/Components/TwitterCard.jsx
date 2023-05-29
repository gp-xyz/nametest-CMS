import React from 'react';

const TwitterCard = ({
  title = "Default Title",
  description = "Default description",
  image = "https://example.com/default-image.jpg",
  twitterHandle = "DefaultTwitterHandle"
}) => {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={`@${twitterHandle}`} />
    </>
  );
};

export default TwitterCard;
