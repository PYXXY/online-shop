const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
        './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'body-multicolor': 'linear-gradient(\n' +
                    '                    to bottom, #DAF1DE, #8EB69B, #235347, #163832, #0B2B26, #051F20)'
            },
        },

    },
    plugins: [],
});
