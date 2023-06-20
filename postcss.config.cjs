module.exports = {
    plugins: {
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production'
        ? {
            '@fullhuman/postcss-purgecss': {
                content: ['./*.html'],
                safelist: {
                    greedy: [/^js-/, /^is-/, /^splide/],
                },
            },
        }
        : {}),
    },
};
