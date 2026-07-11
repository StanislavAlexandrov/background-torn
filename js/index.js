const preview = document.querySelector('[data-preview]');
const buttons = document.querySelectorAll('[data-version]');

const versions = {
    old: {
        source: './versions/old/index.html',
        title: 'Old background-torn version',
    },
    new: {
        source: './versions/new/index.html',
        title: 'New background-torn version',
    },
};

const showVersion = (versionName) => {
    const version = versions[versionName];

    if (!preview || !version) {
        return;
    }

    preview.src = version.source;
    preview.title = version.title;

    buttons.forEach((button) => {
        const isActive = button.dataset.version === versionName;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
};

buttons.forEach((button) => {
    button.addEventListener('click', () => showVersion(button.dataset.version));
});
