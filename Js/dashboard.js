// Function to toggle date picker visibility
function toggleDatePicker(type) {
    const datePicker = document.getElementById(`${type}DatePicker`);
    const allDatePickers = document.querySelectorAll('.date-picker');
    
    // Hide all other date pickers first
    allDatePickers.forEach(picker => {
        if (picker !== datePicker) {
            picker.style.display = 'none';
        }
    });
    
    // Toggle current date picker
    if (datePicker.style.display === 'block') {
        datePicker.style.display = 'none';
    } else {
        datePicker.style.display = 'block';
    }
}

// Function to apply date filter
function applyDateFilter(type) {
    const dateInput = document.getElementById(`${type}DateInput`);
    const selectedDate = dateInput.value;
    
    if (!selectedDate) {
        alert('Please select a date first');
        return;
    }
    
    // Here you would typically make an API call to get filtered data
    // For now, we'll just simulate a change in the displayed numbers
    console.log(`Filtering ${type} by date:`, selectedDate);
    
    // Simulate data change based on type
    const statValueElement = document.getElementById(`${type}Ratio`);
    if (statValueElement) {
        // Generate a random number to simulate filtered data
        const randomChange = Math.floor(Math.random() * 100) - 50; // -50 to +50
        const currentValue = parseInt(statValueElement.textContent.replace(/,/g, ''));
        const newValue = currentValue + randomChange;
        
        // Format number with commas
        statValueElement.textContent = newValue.toLocaleString();
    }
    
    // Hide the date picker after applying
    document.getElementById(`${type}DatePicker`).style.display = 'none';
}

// Time edit functions
function enableTimeEdit(id) {
    // Hide all other edit forms first
    document.querySelectorAll('.time-edit').forEach(edit => {
        edit.style.display = 'none';
    });
    
    // Show the selected edit form
    document.getElementById(`${id}-edit`).style.display = 'flex';
}

function saveTimeEdit(id) {
    const input = document.getElementById(`${id}-input`);
    const timeValue = input.value;
    
    // Convert 24h time to 12h format for display
    const [hours, minutes] = timeValue.split(':');
    let period = 'AM';
    let displayHours = parseInt(hours);
    
    if (displayHours >= 12) {
        period = 'PM';
        if (displayHours > 12) {
            displayHours -= 12;
        }
    }
    
    if (displayHours === 0) {
        displayHours = 12;
    }
    
    const displayTime = `${displayHours}:${minutes} ${period}`;
    
    // Update the displayed time
    const timeBox = document.getElementById(`${id}-edit`).parentElement;
    timeBox.querySelector('.time-value').textContent = 
        id.includes('first') ? `First Metro at ${displayTime}` : `Last Metro at ${displayTime}`;
    
    // Hide the edit form
    document.getElementById(`${id}-edit`).style.display = 'none';
    
    // In a real application, you would send this to your backend here
    console.log(`Updated ${id} to ${timeValue}`);
}

function cancelTimeEdit(id) {
    document.getElementById(`${id}-edit`).style.display = 'none';
}

// Close date pickers when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.classList.contains('sort-btn') && 
        !event.target.closest('.date-picker')) {
        const allDatePickers = document.querySelectorAll('.date-picker');
        allDatePickers.forEach(picker => {
            picker.style.display = 'none';
        });
    }
});

// Initialize date inputs with today's date
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('passengersDateInput').value = today;
    document.getElementById('incomeDateInput').value = today;
    
    // Hide all edit forms on load
    document.querySelectorAll('.time-edit').forEach(edit => {
        edit.style.display = 'none';
    });
});