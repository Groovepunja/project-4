// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Optionally, change button text to reflect the current theme
    const button = document.querySelector('.toggle-button');
    if (body.classList.contains('dark-theme')) {
        button.innerText = 'Switch to Light Theme';
    } else {
        button.innerText = 'Switch to Dark Theme';
    }
}

// Function to toggle the visibility of the menu
function toggleMenu() {
    const menu = document.querySelector('.popup-menu');
    menu.classList.toggle('active');
}

// Set default theme to light
document.body.classList.add('light-theme');

// Attach the theme toggle function to the button
document.querySelector('.toggle-button').addEventListener('click', toggleTheme);

// Attach the menu toggle function to the button
document.querySelector('.toggle-button').addEventListener('click', toggleMenu);
