import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

import $ from 'jquery';

// Extend the Window interface to include the $ property
declare global {
    interface Window {
        $: typeof $;
        jQuery: typeof $;
    }
}

window.$ = window.jQuery = $;


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        // Check for both .tsx and .jsx files
        const pages = import.meta.glob('./pages/**/*.{tsx,jsx}');
        
        // Try resolving the page component with both extensions
        const path = `./pages/${name}`;
        const file = pages[`${path}.tsx`] || pages[`${path}.jsx`];

        if (file) {
            return file();
        }

        // If no matching file found, return an error or handle appropriately
        throw new Error(`Page not found: ${path}`);
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
