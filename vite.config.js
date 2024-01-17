import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'


const manifestForPlugin = {
  manifest: {
    name: "Grow Weed",
    short_name: "Grow Weed App",
    icons: [{
      "src": "/logo1.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "/logo2.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "/logo1.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/logo3.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/logo3.png",
      "sizes": "168x168",
      "type": "image/png"
    },
    {
      "src": "/logo1.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/logo1.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "/logo3.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    ],
    theme_color: '#FFFFFF',
    background_color: '#FFFFFF',
    display: "standalone",
    scope: '/',
    start_url: "/",
    orientation: 'portrait',
    display_override: ["fullscreen", "minimal-ui", "window-controls-overlay"],
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});


