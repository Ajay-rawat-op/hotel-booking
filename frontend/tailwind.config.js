/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        rancho: ['"Rancho"', 'cursive'],
        satisfy: ['"Satisfy"', 'cursive'],
      },
      keyframes: {
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseBtn: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        fadeInScale: 'fadeInScale 0.3s ease-out',
        pulseBtn: 'pulseBtn 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};


//ishq hai ya ibadat   ab kuch samajh nhi ata ek khubsoorat khyal ho tum jo dil se nhi jata