import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  extend: {
    colors: {
        appbgcolor: '#131416',
        divbgcolor: '#191A1D',
        divbgcoloropacity: 'rgba(24, 24, 27, 0.5)',
        divbgcoloralt: '#202124',
        strokecolor: '#3F3F46',
        strokecoloralt: '#52525B',
        h1textcolor: '#FFFFFF',
        defaulttextcolor: '#FFFFFF',
        inputtextcolor: '#A1A1AA',
        inputcolor: '#202124',
        inputhovercolor: '#343438',
        loginbuttoncolor: '#00D11F',
        loginbuttonhover: '#37E601',
        buttoncolor: '#006FEE',
        buttoncolorhover: '#005bc4',
        buttoncolorhoveralt: '#004ea9',
        buttongreenglowcolor: 'rgba(0, 209, 31, 0.4)',
        alertColor: '#FF3F3F',
        alertColorAlt: '#D32929',
        alertColorGlow: 'rgba(255, 63, 63, 0.4)',
        co2divbg: 'rgba(255, 63, 63, 0.5)',
    },
},
  plugins: [
    react(),
    tailwindcss()
  ],
})
