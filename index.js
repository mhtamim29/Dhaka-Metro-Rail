document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});

// metroFareCalculator.js
document.addEventListener('DOMContentLoaded', function() {
    const fareMatrix = {
        'uttara-north': {
            'uttara-north': 0,
            'uttara-center': 20,
            'uttara-south': 20,
            'pallabi': 30,
            'mirpur-11': 30,
            'mirpur-10': 40,
            'kazipara': 40,
            'shewrapara': 50,
            'agargaon': 60,
            'bijoy-sarani': 60,
            'farmgate': 70,
            'karwan-bazar': 80,
            'shahbagh': 80,
            'dhaka-university': 90,
            'bangladesh-secretariat': 90,
            'motijheel': 100
        },
        'uttara-center': {
            'uttara-north': 20,
            'uttara-center': 0,
            'uttara-south': 20,
            'pallabi': 20,
            'mirpur-11': 30,
            'mirpur-10': 30,
            'kazipara': 40,
            'shewrapara': 40,
            'agargaon': 50,
            'bijoy-sarani': 60,
            'farmgate': 60,
            'karwan-bazar': 70,
            'shahbagh': 80,
            'dhaka-university': 90,
            'bangladesh-secretariat': 90,
            'motijheel': 100
        },
        'uttara-south': {
            'uttara-north': 20,
            'uttara-center': 20,
            'uttara-south': 0,
            'pallabi': 20,
            'mirpur-11': 20,
            'mirpur-10': 30,
            'kazipara': 30,
            'shewrapara': 40,
            'agargaon': 40,
            'bijoy-sarani': 50,
            'farmgate': 60,
            'karwan-bazar': 60,
            'shahbagh': 70,
            'dhaka-university': 80,
            'bangladesh-secretariat': 80,
            'motijheel': 90
        },
        'pallabi': {
            'uttara-north': 30,
            'uttara-center': 20,
            'uttara-south': 20,
            'pallabi': 0,
            'mirpur-11': 20,
            'mirpur-10': 20,
            'kazipara': 20,
            'shewrapara': 30,
            'agargaon': 30,
            'bijoy-sarani': 40,
            'farmgate': 50,
            'karwan-bazar': 50,
            'shahbagh': 60,
            'dhaka-university': 60,
            'bangladesh-secretariat': 70,
            'motijheel': 80
        },
        'mirpur-11': {
            'uttara-north': 30,
            'uttara-center': 30,
            'uttara-south': 20,
            'pallabi': 20,
            'mirpur-11': 0,
            'mirpur-10': 20,
            'kazipara': 20,
            'shewrapara': 20,
            'agargaon': 30,
            'bijoy-sarani': 40,
            'farmgate': 40,
            'karwan-bazar': 50,
            'shahbagh': 50,
            'dhaka-university': 60,
            'bangladesh-secretariat': 60,
            'motijheel': 70
        },
        'mirpur-10': {
            'uttara-north': 40,
            'uttara-center': 30,
            'uttara-south': 30,
            'pallabi': 20,
            'mirpur-11': 20,
            'mirpur-10': 0,
            'kazipara': 20,
            'shewrapara': 20,
            'agargaon': 20,
            'bijoy-sarani': 30,
            'farmgate': 30,
            'karwan-bazar': 40,
            'shahbagh': 50,
            'dhaka-university': 50,
            'bangladesh-secretariat': 60,
            'motijheel': 60
        },
        'kazipara': {
            'uttara-north': 40,
            'uttara-center': 40,
            'uttara-south': 30,
            'pallabi': 20,
            'mirpur-11': 20,
            'mirpur-10': 20,
            'kazipara': 0,
            'shewrapara': 20,
            'agargaon': 20,
            'bijoy-sarani': 20,
            'farmgate': 30,
            'karwan-bazar': 40,
            'shahbagh': 40,
            'dhaka-university': 50,
            'bangladesh-secretariat': 50,
            'motijheel': 60
        },
        'shewrapara': {
            'uttara-north': 50,
            'uttara-center': 40,
            'uttara-south': 40,
            'pallabi': 30,
            'mirpur-11': 20,
            'mirpur-10': 20,
            'kazipara': 20,
            'shewrapara': 0,
            'agargaon': 20,
            'bijoy-sarani': 20,
            'farmgate': 20,
            'karwan-bazar': 30,
            'shahbagh': 40,
            'dhaka-university': 40,
            'bangladesh-secretariat': 50,
            'motijheel': 50
        },
        'agargaon': {
            'uttara-north': 60,
            'uttara-center': 50,
            'uttara-south': 40,
            'pallabi': 30,
            'mirpur-11': 30,
            'mirpur-10': 20,
            'kazipara': 20,
            'shewrapara': 20,
            'agargaon': 0,
            'bijoy-sarani': 20,
            'farmgate': 20,
            'karwan-bazar': 20,
            'shahbagh': 30,
            'dhaka-university': 30,
            'bangladesh-secretariat': 40,
            'motijheel': 50
        },
        'bijoy-sarani': {
            'uttara-north': 60,
            'uttara-center': 60,
            'uttara-south': 50,
            'pallabi': 40,
            'mirpur-11': 40,
            'mirpur-10': 30,
            'kazipara': 20,
            'shewrapara': 20,
            'agargaon': 20,
            'bijoy-sarani': 0,
            'farmgate': 20,
            'karwan-bazar': 20,
            'shahbagh': 20,
            'dhaka-university': 30,
            'bangladesh-secretariat': 40,
            'motijheel': 40
        },
        'farmgate': {
            'uttara-north': 70,
            'uttara-center': 60,
            'uttara-south': 60,
            'pallabi': 50,
            'mirpur-11': 40,
            'mirpur-10': 40,
            'kazipara': 30,
            'shewrapara': 20,
            'agargaon': 30,
            'bijoy-sarani': 20,
            'farmgate': 0,
            'karwan-bazar': 20,
            'shahbagh': 20,
            'dhaka-university': 20,
            'bangladesh-secretariat': 30,
            'motijheel': 30
        },
        'karwan-bazar': {
            'uttara-north': 80,
            'uttara-center': 70,
            'uttara-south': 60,
            'pallabi': 50,
            'mirpur-11': 50,
            'mirpur-10': 40,
            'kazipara': 40,
            'shewrapara': 30,
            'agargaon': 20,
            'bijoy-sarani': 20,
            'farmgate': 20,
            'karwan-bazar': 0,
            'shahbagh': 20,
            'dhaka-university': 20,
            'bangladesh-secretariat': 20,
            'motijheel': 30
        },
        'shahbagh': {
            'uttara-north': 80,
            'uttara-center': 80,
            'uttara-south': 70,
            'pallabi': 60,
            'mirpur-11': 50,
            'mirpur-10': 50,
            'kazipara': 40,
            'shewrapara': 40,
            'agargaon': 30,
            'bijoy-sarani': 20,
            'farmgate': 30,
            'karwan-bazar': 20,
            'shahbagh': 0,
            'dhaka-university': 20,
            'bangladesh-secretariat': 20,
            'motijheel': 20
        },
        'dhaka-university': {
            'uttara-north': 90,
            'uttara-center': 80,
            'uttara-south': 70,
            'pallabi': 60,
            'mirpur-11': 60,
            'mirpur-10': 50,
            'kazipara': 50,
            'shewrapara': 40,
            'agargaon': 30,
            'bijoy-sarani': 30,
            'farmgate': 20,
            'karwan-bazar': 20,
            'shahbagh': 20,
            'dhaka-university': 0,
            'bangladesh-secretariat': 20,
            'motijheel': 20
        },
        'bangladesh-secretariat': {
            'uttara-north': 90,
            'uttara-center': 90,
            'uttara-south': 80,
            'pallabi': 70,
            'mirpur-11': 70,
            'mirpur-10': 60,
            'kazipara': 50,
            'shewrapara': 50,
            'agargaon': 40,
            'bijoy-sarani': 40,
            'farmgate': 30,
            'karwan-bazar': 20,
            'shahbagh': 20,
            'dhaka-university': 20,
            'bangladesh-secretariat': 0,
            'motijheel': 20
        },
        'motijheel': {
            'uttara-north': 100,
            'uttara-center': 90,
            'uttara-south': 90,
            'pallabi': 80,
            'mirpur-11': 70,
            'mirpur-10': 60,
            'kazipara': 60,
            'shewrapara': 50,
            'agargaon': 50,
            'bijoy-sarani': 40,
            'farmgate': 30,
            'karwan-bazar': 30,
            'shahbagh': 20,
            'dhaka-university': 20,
            'bangladesh-secretariat': 20,
            'motijheel': 0
        }
    };

    // Calculate fare button click handler
    document.getElementById('calculate-fare').addEventListener('click', function() {
        const fromStation = document.getElementById('from').value;
        const toStation = document.getElementById('to').value;
        
        if (!fromStation || !toStation) {
            alert('Please select both "From" and "To" stations.');
            return;
        }
        
        if (fromStation === toStation) {
            alert('Departure and arrival stations cannot be the same.');
            return;
        }
        
        const fare = fareMatrix[fromStation][toStation];
        const fromName = document.getElementById('from').options[document.getElementById('from').selectedIndex].text;
        const toName = document.getElementById('to').options[document.getElementById('to').selectedIndex].text;
        
        // Display the result
        showFareResult(fromName, toName, fare);
    });

    // Function to display fare result
    function showFareResult(fromName, toName, fare) {
        // Remove any existing result
        const oldResult = document.getElementById('fare-result');
        if (oldResult) oldResult.remove();
        
        // Create result element
        const resultDiv = document.createElement('div');
        resultDiv.id = 'fare-result';
        resultDiv.style.marginTop = '1rem';
        resultDiv.style.padding = '1rem';
        resultDiv.style.backgroundColor = '#f8f9fa';
        resultDiv.style.borderRadius = '5px';
        resultDiv.style.textAlign = 'center';
        
        // Add content
        resultDiv.innerHTML = `
            <div style="font-size: 1.1rem; margin-bottom: 0.5rem;">
                <span style="color: #006a4e;">${fromName}</span> 
                → 
                <span style="color:rgb(204, 0, 0);">${toName}</span>
            </div>
            <div style="font-size: 1.8rem; font-weight: bold; color: #006a4e;">
                ${fare} Taka
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">
                Dhaka Metro Rail Fare
            </div>
        `;
        
        // Add to the form
        const form = document.getElementById('journey-form');
        form.appendChild(resultDiv);
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Get references to the dropdowns
    const timeSelect = document.querySelector('.schedule-card select:first-of-type');
    const stationSelect = document.querySelector('.schedule-card select:last-of-type');
    const tableBody = document.querySelector('.schedule-card tbody');
    
    const stationOrder = [
        "Uttara North",
        "Uttara Center",
        "Uttara South",
        "Pallabi",
        "Mirpur-11",
        "Mirpur-10",
        "Kazipara",
        "Shewrapara",
        "Agargaon",
        "Bijoy Sarani",
        "Farmgate",
        "Karwan Bazar",
        "Shahbagh",
        "Dhaka University",
        "Bangladesh Secretariat",
        "Motijheel"
    ];
    
    // Time between stations (2 minutes)
    const timeBetweenStations = 2;
    
    // Update the schedule when selections change
    timeSelect.addEventListener('change', updateSchedule);
    stationSelect.addEventListener('change', updateSchedule);
    
    function updateSchedule() {
        const selectedTime = timeSelect.value;
        const selectedStation = stationSelect.value;
        
        if (!selectedTime) return;
        
        // Clear existing rows
        tableBody.innerHTML = '';
        
        // Calculate times for the next 3 trains
        for (let trainNum = 0; trainNum < 3; trainNum++) {
            // Calculate base time for this train (add 20 minutes for each subsequent train)
            const baseTime = addMinutes(selectedTime, trainNum * 20);
            
            // Find the index of the selected station (if one is selected)
            const selectedStationIndex = selectedStation ? 
                stationOrder.findIndex(station => 
                    station.toLowerCase().replace(' ', '-') === selectedStation
                ) : -1;
            
            // Create a new row for each station or just the selected one
            if (selectedStationIndex >= 0) {
                // Only show the selected station
                const stationName = stationOrder[selectedStationIndex];
                const minutesFromStart = (stationOrder.length - 1 - selectedStationIndex) * timeBetweenStations;
                const arrivalTime = subtractMinutes(baseTime, minutesFromStart);
                
                const row = createScheduleRow(
                    trainNum + 1,
                    stationName,
                    arrivalTime,
                    addMinutes(arrivalTime, 1) // departure is 1 min after arrival
                );
                tableBody.appendChild(row);
            } else {
                // Show all stations
                stationOrder.forEach((stationName, index) => {
                    const minutesFromStart = (stationOrder.length - 1 - index) * timeBetweenStations;
                    const arrivalTime = subtractMinutes(baseTime, minutesFromStart);
                    
                    const row = createScheduleRow(
                        trainNum + 1,
                        stationName,
                        arrivalTime,
                        addMinutes(arrivalTime, 1) // departure is 1 min after arrival
                    );
                    tableBody.appendChild(row);
                });
            }
        }
    }
    
    function createScheduleRow(serialNo, stationName, arrivalTime, departureTime) {
        const row = document.createElement('tr');
        row.style.backgroundColor = serialNo % 2 === 1 ? 'var(--white)' : '#f2f2f2';
        
        // Serial number cell
        const serialCell = document.createElement('td');
        serialCell.style.padding = '1rem';
        serialCell.style.textAlign = 'center';
        serialCell.textContent = serialNo;
        row.appendChild(serialCell);
        
        // Station name cell
        const stationCell = document.createElement('td');
        stationCell.style.padding = '1rem';
        stationCell.style.textAlign = 'center';
        stationCell.textContent = stationName;
        row.appendChild(stationCell);
        
        // Arrival time cell
        const arrivalCell = document.createElement('td');
        arrivalCell.style.padding = '1rem';
        arrivalCell.style.textAlign = 'center';
        arrivalCell.textContent = formatTime(arrivalTime);
        row.appendChild(arrivalCell);
        
        // Departure time cell
        const departureCell = document.createElement('td');
        departureCell.style.padding = '1rem';
        departureCell.style.textAlign = 'center';
        departureCell.textContent = formatTime(departureTime);
        row.appendChild(departureCell);
        
        return row;
    }
    
    // Helper function to add minutes to a time string (HH:mm format)
    function addMinutes(timeString, minutesToAdd) {
        const [hours, minutes] = timeString.split(':').map(Number);
        let totalMinutes = hours * 60 + minutes + minutesToAdd;
        
        // Handle overflow to next hour/day
        const newHours = Math.floor(totalMinutes / 60) % 24;
        const newMinutes = totalMinutes % 60;
        
        return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
    }
    
    // Helper function to subtract minutes from a time string
    function subtractMinutes(timeString, minutesToSubtract) {
        const [hours, minutes] = timeString.split(':').map(Number);
        let totalMinutes = hours * 60 + minutes - minutesToSubtract;
        
        // Handle underflow to previous hour/day
        while (totalMinutes < 0) {
            totalMinutes += 24 * 60; // Add a full day
        }
        
        const newHours = Math.floor(totalMinutes / 60) % 24;
        const newMinutes = totalMinutes % 60;
        
        return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
    }
    
    // Helper function to format time (add AM/PM)
    function formatTime(timeString) {
        const [hours, minutes] = timeString.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        return `${displayHours}:${String(minutes).padStart(2, '0')} ${period}`;
    }
    
    // Initialize the schedule
    updateSchedule();
});





// Select the header and body elements
const header = document.querySelector('header');
const body = document.querySelector('body');

// Event listener for scroll
window.addEventListener('scroll', () => {
    // Check if the page is scrolled down
    if (window.scrollY > 100) { // 100px is an arbitrary value, adjust as needed
        header.classList.add('transparent');  // Make header transparent
        body.classList.add('white-background');  // Make body white
    } else {
        header.classList.remove('transparent');  // Restore original header background
        body.classList.remove('white-background');  // Restore original body background
    }
});
