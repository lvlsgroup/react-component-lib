import React from 'react';
import UrlInput from '@rc-lib-client/components/urlinputs/urlInput/UrlInput';

function UrlInputDemo() {
  return (
    <UrlInput
      searchParam={'query'}
      historyAction={'replace'}
      placeholder="Search: name, instagram name, city"
    />
  );
}

export default React.memo(UrlInputDemo);
