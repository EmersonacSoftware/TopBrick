const wordElements = document.querySelectorAll('.word');
const sidebar = document.getElementById('sidebar');
const sidebarContent = document.getElementById('sidebarContent');
const wordTitle = document.getElementById('wordTitle');
const wordDefinition = document.getElementById('wordDefinition');
const wordImage = document.getElementById('wordImage');
const closeBtn = document.getElementById('closeBtn');

wordElements.forEach(wordElement => {
    wordElement.addEventListener('click', () => {
        const wordId = wordElement.id;
        const title = getComputedStyle(wordElement).getPropertyValue('--title');
        const definition = getComputedStyle(wordElement).getPropertyValue('--definition');
        const image = getComputedStyle(wordElement).getPropertyValue('--image');
        
        wordTitle.textContent = title;
        wordDefinition.textContent = definition;
        wordImage.src = image.replace(/url\((['"]?)(.*)\1\)/gi, '$2'); // Extract the URL from 'url(...)'

        sidebar.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});
