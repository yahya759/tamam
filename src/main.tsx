import {createRoot} from 'react-dom/client';
import '@fontsource/readex-pro/400.css';
import '@fontsource/readex-pro/500.css';
import '@fontsource/readex-pro/600.css';
import '@fontsource/readex-pro/700.css';
import '@fontsource/ibm-plex-sans-arabic/400.css';
import '@fontsource/ibm-plex-sans-arabic/500.css';
import '@fontsource/ibm-plex-sans-arabic/600.css';
import { Root } from './Root';
import './index.css';
import { initAnalytics } from './lib/analytics';

initAnalytics();
createRoot(document.getElementById('root')!).render(<Root />);
