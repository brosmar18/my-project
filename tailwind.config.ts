import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#181F67',
                'primary-dark': '#0F1444',
                'primary-light': '#2A3A8C',
                'accent': '#7BB837',
                'accent-dark': '#5F8F2A',
                'accent-light': '#9AD054',
                'neutral': '#939498',
                'neutral-dark': '#6B6C70',
                'neutral-light': '#B8B9BC',
            },
        },
    },
    plugins: [],
}

export default config