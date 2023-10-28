const withPWA = require("next-pwa")({
    dest: 'public',
});

module.exports = withPWA({
    webpack: (config) => {
        config.module.rules.push({
            test: /\.mp3$/,
            use: {
                loader: "url-loader",
            },
        });
        return config;
    },
    images: {
        domains: ["res.cloudinary.com"],
        unoptimized: true, 
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
        future: {
            exclude: [
                /\.DS_Store/,
                "Thumbs.db",
                ".git",
                ".github",
                ".vscode",
                "node_modules",
            ],
        },
    },
});
