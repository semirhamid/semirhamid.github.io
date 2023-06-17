const withPWA = require("next-pwa");

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
        unoptimized: true, // Disable Image Optimization during export
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
    },
});
