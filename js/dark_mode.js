window.addEventListener('DOMContentLoaded', () => {
// In a script tag within your Astro component or layout
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Function to apply theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    // Initial theme load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark'); // Default to system preference if no saved theme
    } else {
        applyTheme('light');
    }

    // Toggle functionality
    themeToggle.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            applyTheme('light');
        } else {
            applyTheme('dark');
        }
    });
});