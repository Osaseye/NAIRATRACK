/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        emerald: {
          DEFAULT: '#0A5D44',
        },
        jade: {
          DEFAULT: '#1BA97C',
          hover: '#159568',
        },
        // Secondary Colors
        gold: '#E5C48A',
        graphite: '#022B21',
        
        // Neutral Colors - flattened for easier use
        'neutral-off-white': '#F9FAF9',
        'neutral-muted-grey': '#6E7B75', 
        'neutral-light-grey': '#E8ECEA',
        
        // Background variants
        background: '#F9FAF9',
        'background-card': '#FFFFFF',
        
        // System Colors
        success: '#2ECC71',
        warning: '#F1C40F', 
        error: '#E74C3C',
      },
      fontFamily: {
        'primary': ['Inter', 'system-ui', 'sans-serif'],
        'secondary': ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'section-header': ['18px', { lineHeight: '28px', fontWeight: '600' }],
        'screen-title': ['24px', { lineHeight: '32px', fontWeight: '700' }],
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

