/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                white: 'var(--white)',
                primary: 'var(--primary-color)',
                red: 'var(--red-primary)',
                green: 'var(--green-primary)',
                gray: 'var(--gray-lighter)',
                gray_text: 'var(--gray-text)',
                tranperent: 'rgba(0,0,0,0)',
                yellow: 'var(--orange-primary)',
                black: 'rgb(0,0,0)'
            },
            backgroundColor: {
                white: 'var(--white)',
                primary: 'var(--primary-color)',
                red: 'var(--red-primary)',
                green: 'var(--green-primary)',
                gray: 'var(--gray-lighter)',
                gray_text: 'var(--gray-text)',
                tranperent: 'rgba(0,0,0,0)',
                yellow: 'var(--orange-primary)',
                black: 'rgb(0,0,0)'
            }
        },
        fontFamily: {
            prompt: ['Prompt', 'Helvetica', 'arial', 'sans-serif'],
            thonburi: ['Thonburi', 'Helvetica', 'arial', 'sans-serif']
        },

        screens: {
            '2xl': { max: '1535px' },
            xl: { max: '1279px' },
            lg: { max: '1023px' },
            md: { max: '767px' },
            sm: { max: '639px' }
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem'
            }
        }
    },
    plugins: []
};
