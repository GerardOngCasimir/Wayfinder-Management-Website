function selectInstitute(institute) {
    const leftPanel = document.getElementById('left-panel');
    const rightPanel = document.getElementById('right-panel');
    const backButton = document.getElementById('back-button');

    // Transition left panel out to the left
    leftPanel.style.transform = 'translateX(-100%)';
    leftPanel.style.opacity = '0';

    // Add a delay before transitioning the right panel in
    setTimeout(() => {
        rightPanel.classList.remove('hidden');
        rightPanel.style.transform = 'translateX(0)';
        rightPanel.style.opacity = '1';
        document.getElementById('selected-institute').textContent = `Selected Institute: ${institute}`;
    }, 500); // Adjust the delay as needed

    backButton.classList.remove('hidden');
}

function goBack() {
    const leftPanel = document.getElementById('left-panel');
    const rightPanel = document.getElementById('right-panel');
    const backButton = document.getElementById('back-button');

    // Transition right panel out to the right
    rightPanel.style.transform = 'translateX(100%)';
    rightPanel.style.opacity = '0';

    // Add a delay before transitioning the left panel in
    setTimeout(() => {
        leftPanel.style.transform = 'translateX(0)';
        leftPanel.style.opacity = '1';
        rightPanel.classList.add('hidden');
    }, 500); // Adjust the delay as needed

    backButton.classList.add('hidden');
}

