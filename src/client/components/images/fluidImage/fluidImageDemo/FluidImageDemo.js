import React from 'react';
import FluidImage from '@rc-lib-client/components/images/fluidImage/FluidImage';

function FluidImageDemo() {
  return (
    <FluidImage
      src="https://storage.googleapis.com/acamp-prod/images/landing-pages/camper_2.1.svg"
      aspectRatio={344 / 154}
    />
  );
}

export { FluidImageDemo };
