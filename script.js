document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('dynamic-text').textContent = 'The text has been changed!';
});

document.getElementById('change-style-btn').addEventListener('click', function() {
    const styleText = document.getElementById('style-text');
    styleText.style.color = 'blue';
    styleText.style.fontWeight = 'bold';
});

document.getElementById('toggle-element-btn').addEventListener('click', function() {
    const container = document.getElementById('dynamic-element-container');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a dynamically added element!';
    newElement.classList.add('highlight');

    if (container.children.length === 0) {
        container.appendChild(newElement);
    } else {
        container.removeChild(container.firstChild);
    }
});

