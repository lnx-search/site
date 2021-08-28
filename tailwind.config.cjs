module.exports = {
    mode: 'jit',
    purge: ['src/app.html', 'src/**/*.{svelte,css}'],
    darkMode: false, // or 'media' or false
    theme: {
        extend: {
            width: {
                '426': '426px',
                '28': '28rem',
                '80': '20rem',
            }
        },
    },
    variants: {},
    plugins: [],
};
