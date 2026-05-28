// Soil type definitions
const soilInfo = {
    Inceptisols: { controller: "Info" },
    Oxisols: { controller: "Info" },
    Ultisols: { controller: "Info" },
    Mollisols: { controller: "Info" },
    Vertisols: { controller: "Info" },
    Entisols: { controller: "Info" },
    Spodosols: { controller: "Info" },
    Aridisols: { controller: "Info" },
    Histosols: { controller: "Info" },
    Andisols: { controller: "Info" },
    Unclassified: { controller: "Info" }
};

// Function to populate dropdown
function populateDropdown() {
    console.log('Starting dropdown population');
    
    // Get the dropdown element
    const dropdown = document.getElementById('soil-type');
    if (!dropdown) {
        console.error('Critical error: Dropdown element not found');
        return;
    }
    console.log('Found dropdown element');

    // Clear existing options
    dropdown.innerHTML = '<option value="all">Show All Layers</option>';
    console.log('Cleared existing options');

    // Add soil types
    const soilTypes = Object.keys(soilInfo).sort();
    console.log('Available soil types:', soilTypes);

    // Create options using template literal
    const options = soilTypes.map(soilType => 
        `<option value="${soilType}">${soilType}</option>`
    ).join('');

    // Add options
    dropdown.innerHTML += options;
    console.log('Added options to dropdown');

    // Verify options
    const optionsList = dropdown.getElementsByTagName('option');
    console.log('Total options:', optionsList.length);
    for (let i = 0; i < optionsList.length; i++) {
        console.log(`Option value: ${optionsList[i].value}, text: ${optionsList[i].textContent}`);
    }

    // Add event listener
    dropdown.addEventListener('change', (e) => {
        console.log('Dropdown changed:', e.target.value);
    });
    console.log('Added event listener');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event triggered');
    
    // Wait a moment to ensure everything is ready
    setTimeout(() => {
        console.log('Initializing dropdown after delay');
        populateDropdown();
    }, 1000);
});
