import React from 'react';

const withSuspense = (Component) => {
  return (
    <React.Suspense fallback={<p>loading...</p>}>
      <Component />
    </React.Suspense>
  );
};

export default withSuspense;
