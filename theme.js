// Function to toggle the theme and save the preference in localStorage
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    // Apply dark mode to headers and nav items
    document.querySelectorAll('header, nav, .hero').forEach(el => el.classList.toggle('dark-mode'));
    document.querySelectorAll('nav a').forEach(link => link.classList.toggle('dark-mode'));
    // Save the theme in localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Function to load the theme based on the saved preference in localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelectorAll('header, nav, .hero').forEach(el => el.classList.add('dark-mode'));
        document.querySelectorAll('nav a').forEach(link => link.classList.add('dark-mode'));
    }
}

// Add event listener to toggle button when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTheme(); // Load the theme on page load

    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleTheme);
    }
});
