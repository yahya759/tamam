import React, { Suspense, lazy } from 'react';
import App from './App';
import type { DemoId } from './demos/utils';

const DemoSite = lazy(() => import('./demos/DemoSite').then((m) => ({ default: m.DemoSite })));
const DemosHub = lazy(() => import('./demos/DemosHub').then((m) => ({ default: m.DemosHub })));

const DEMO_PATHS: DemoId[] = ['salon', 'restaurant', 'dental'];

export const Root: React.FC = () => {
  const path = window.location.pathname.replace(/\/+$/, '').toLowerCase();

  if (path === '/demos' || path === '/demo') {
    return (
      <Suspense fallback={null}>
        <DemosHub />
      </Suspense>
    );
  }

  const id = DEMO_PATHS.find((p) => path === `/${p}`);
  if (id) {
    return (
      <Suspense fallback={null}>
        <DemoSite id={id} />
      </Suspense>
    );
  }

  return <App />;
};
