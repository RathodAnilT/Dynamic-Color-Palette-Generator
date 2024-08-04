document.getElementById('generatePaletteBtn').addEventListener('click', generatePalette);

function generatePalette() {
    const paletteContainer = document.getElementById('paletteContainer');
    paletteContainer.innerHTML = ''; // Clear existing palette

    // Generate a palette of 5 random colors
    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        paletteContainer.appendChild(colorBox);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Initial palette generation
generatePalette();
