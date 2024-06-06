function selectInstitute(institute) {
    const leftPanel = document.getElementById('left-panel');
    const rightPanel = document.getElementById('right-panel');
    const backButton = document.getElementById('back-button');

    // Save selected institute under local storage
    localStorage.setItem('selectedInstitute', institute);
    
    // Add the overlay show class to trigger the curtain transition
    document.querySelector('.overlay').classList.add('show');

    // Delay the panel transition to allow the curtain effect to complete
    setTimeout(() => {
        //leftPanel.style.transform = 'translateX(-100%)';
        leftPanel.style.opacity = '0';

        setTimeout(() => {
            rightPanel.classList.remove('hidden');
            //rightPanel.style.transform = 'translateX(0)';
            rightPanel.style.opacity = '1';
            document.getElementById('selected-institute').textContent = `Selected Institute: ${institute}`;
            backButton.classList.remove('hidden');
        }, 500); // Adjust the delay as needed

        // Remove the overlay show class after the transition
        setTimeout(() => {
            document.querySelector('.overlay').classList.remove('show');
        }, 300); // Adjust based on your transition time
    }, 400); // Adjust based on your curtain transition time
    
    /*
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
    */
}

function goBack() {
    const leftPanel = document.getElementById('left-panel');
    const rightPanel = document.getElementById('right-panel');
    const backButton = document.getElementById('back-button');

    // Add the overlay show class to trigger the curtain transition
    document.querySelector('.overlay').classList.add('show');

    // Hide the right panel and back button after the transition
    setTimeout(() => {
        //rightPanel.style.transform = 'translateX(100%)';
        rightPanel.style.opacity = '0';
        
        // Reset left panel visibility
        setTimeout(() => {
            rightPanel.classList.add('hidden');
            backButton.classList.add('hidden');
            leftPanel.classList.remove('hidden');
            //leftPanel.style.transform = 'translateX(0)';
            leftPanel.style.opacity = '1';
        }, 500); // Adjust the delay as needed

        // Remove the overlay show class after the transition
        setTimeout(() => {
            document.querySelector('.overlay').classList.remove('show');
        }, 300); // Adjust based on your transition time
    }, 400); // Adjust based on your curtain transition time
    
    /*
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
    
     */
}

