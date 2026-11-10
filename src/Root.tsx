import React, { Suspense, lazy } from 'react';
import App from './App';

const DemosHub = lazy(() => import('./demos/DemosHub').then((m) => ({ default: m.DemosHub })));

/**
 * "/"            -> main TAMAM site
 * "/salon" ...   -> the same site with niche copy (see src/niches.ts)
 * "/demos"       -> private page with copyable links for every niche
 */
export const Root: React.FC = () => {
  const path = window.location.pathname.replace(/\/+$/, '').toLowerCase();

  if (path === '/demos' || path === '/demo') {
    return (
      <Suspense fallback={null}>
        <DemosHub />
      </Suspense>
    );
  }
  return <App />;
};
