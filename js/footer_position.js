const footer = document.getElementById('footer');
const positions = ['static', 'fixed', 'absolute', 'sticky'];
let positionIndex = 0;

footer.addEventListener('click', () => {
    positionIndex = (positionIndex + 1) % positions.length;
    
    const newPosition = positions[positionIndex];
    footer.classList = ''; // Clear existing classes
    footer.classList.add(newPosition); // Apply the new position class
});
