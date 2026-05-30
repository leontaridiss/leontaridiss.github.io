import React from 'react';

const PublicImage = ({ src, alt, ...props }) => (
  <img src={`${process.env.PUBLIC_URL}${src}`} alt={alt} {...props} />
);

export default PublicImage;
