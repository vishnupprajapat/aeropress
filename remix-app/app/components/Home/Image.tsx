import React, { useState } from 'react';
import { stegaClean } from '@sanity/client/stega';
import { urlFor } from '~/sanity/image';

type ImageProps = {
    src: any;
    srcSet: string;
    width: number;
    height: number;
  alt: string;
  className?: string;
loading?: 'lazy' | 'eager';
};

const Image: React.FC<ImageProps> = ({
  src,
  srcSet,
  width,
  height,
  alt,
  className = '',
  loading
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
    className={className || undefined}
      src={isLoaded ? src : undefined}
      srcSet={isLoaded ? undefined : srcSet}
      width={width}
      height={height}
      alt={stegaClean(alt)}
      loading={loading}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default Image;
