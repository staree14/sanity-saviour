// Function to toggle the theme between dark and light
function toggleTheme() {
    // Toggle the dark-mode class on the body and other elements
    const body = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.section');
    const footer = document.querySelector('footer');
    const buttons = document.querySelectorAll('.button');
    
    // Toggle dark mode for body, header, nav, container, sections, footer, and buttons
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    footer.classList.toggle('dark-mode');
    buttons.forEach(button => button.classList.toggle('dark-mode'));

    // Save the theme preference in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Event listener for the theme toggle button
document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

// Function to load the theme based on localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('nav').classList.add('dark-mode');
        document.querySelector('.container').classList.add('dark-mode');
        document.querySelectorAll('.section').forEach(section => section.classList.add('dark-mode'));
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelectorAll('.button').forEach(button => button.classList.add('dark-mode'));
    }
}

// Call loadTheme when the page is loaded
window.addEventListener('load', loadTheme);
