/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

if (tabs && tabContents) {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            if (target) {
                tabContents.forEach(tc => {
                    tc.classList.remove('filters__active');
                });
                target.classList.add('filters__active');

                tabs.forEach(t => {
                    t.classList.remove('filter-tab-active');
                });
                tab.classList.add('filter-tab-active');
            } else {
                console.error("Target element not found for:", tab.dataset.target);
            }
        });
    });
}

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Helper functions to get the current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Validate and apply the previously selected theme and icon
if (selectedTheme && (selectedTheme === 'dark' || selectedTheme === 'light')) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
}
if (selectedIcon && (selectedIcon === 'ri-moon-line' || selectedIcon === 'ri-sun-line')) {
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);

        // Save the theme and the current icon to localStorage
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });
} else {
    console.warn("Theme button not found in the document.");
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
    });

    sr.reveal(`.profile__border`);
    sr.reveal(`.profile__name`, { delay: 500 });
    sr.reveal(`.profile__profession`, { delay: 600 });
    sr.reveal(`.profile__social`, { delay: 700 });
    sr.reveal(`.profile__info-group`, { interval: 100, delay: 700 });
    sr.reveal(`.profile__buttons`, { delay: 800 });
    sr.reveal(`.filters__content`, { delay: 900 });
    sr.reveal(`.filters`, { delay: 1000 });
} else {
    console.warn("ScrollReveal library is not loaded.");
}

console.log("Ta Daaaaaaa 😎");
