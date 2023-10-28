const {
    defineConfig
} = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "http://localhost:3000/",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    viewportWidth: 375, // Ширина мобильного экрана
    viewportHeight: 667, // Высота мобильного экрана
});