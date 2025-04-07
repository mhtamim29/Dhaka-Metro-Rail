        // Fare matrix for all stations
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

        // Global variables
        let currentFare = null;
        let fromStation = null;
        let toStation = null;
        let paymentMethod = null;
        let paymentDetails = {};
        let selectedBank = null;
        let selectedCard = null;

        // Dropdown menu toggle
        function toggleMenu() {
            const menu = document.getElementById("dropdownMenu");
            menu.classList.toggle("show");
        }

        // Close dropdown when clicking outside
        window.onclick = function(event) {
            if (!event.target.closest('.dropdown')) {
                const dropdowns = document.getElementsByClassName("dropdown-menu");
                for (let i = 0; i < dropdowns.length; i++) {
                    dropdowns[i].classList.remove('show');
                }
            }
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Get references to elements
            const fromSelect = document.getElementById('from');
            const toSelect = document.getElementById('to');
            const calculateFareBtn = document.getElementById('calculate-fare');
            const mobileBankingRadio = document.getElementById('mobileBanking');
            const bankingRadio = document.getElementById('banking');
            const mobileBankingForm = document.getElementById('mobileBankingForm');
            const bankingForm = document.getElementById('bankingForm');
            const mobileAmountInput = document.getElementById('mobile-amount');
            const bankAmountInput = document.getElementById('bank-amount');
            const mobileNumberInput = document.getElementById('mobile-number');
            const mobilePinInput = document.getElementById('mobile-pin');
            const accountNumberInput = document.getElementById('account-number');
            const cardNameInput = document.getElementById('card-name');
            const expiryInput = document.getElementById('MM');
            const cvvInput = document.getElementById('CVV');
            const bankOptions = document.querySelectorAll('.bank-option');
            const bankCardOptions = document.querySelectorAll('.bank-card-option');

            // Initially hide payment forms
            mobileBankingForm.style.display = 'none';
            bankingForm.style.display = 'none';

            // Calculate fare button handler
            calculateFareBtn.addEventListener('click', function() {
                fromStation = fromSelect.value;
                toStation = toSelect.value;
                
                if (!fromStation || !toStation) {
                    alert('Please select both "From" and "To" stations.');
                    return;
                }
                
                if (fromStation === toStation) {
                    alert('Departure and arrival stations cannot be the same.');
                    return;
                }
                
                // Calculate fare
                const fare = fareMatrix[fromStation][toStation];
                const fromName = fromSelect.options[fromSelect.selectedIndex].text;
                const toName = toSelect.options[toSelect.selectedIndex].text;
                
                // Store the fare and show result
                currentFare = fare;
                showFareResult(fromName, toName, fare);
            });

            // Show fare result function
            function showFareResult(fromName, toName, fare) {
                const oldResult = document.getElementById('fare-result');
                if (oldResult) oldResult.remove();
                
                const resultDiv = document.createElement('div');
                resultDiv.id = 'fare-result';
                resultDiv.style.marginTop = '1rem';
                resultDiv.style.padding = '1rem';
                resultDiv.style.backgroundColor = '#f8f9fa';
                resultDiv.style.borderRadius = '5px';
                resultDiv.style.textAlign = 'center';
                
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
                
                document.getElementById('journey-form').appendChild(resultDiv);
            }

            // Payment method selection handlers
            mobileBankingRadio.addEventListener('change', function() {
                if (this.checked) {
                    validateBeforePaymentSelection(() => {
                        paymentMethod = 'mobile';
                        mobileBankingForm.style.display = 'block';
                        bankingForm.style.display = 'none';
                        mobileAmountInput.value = currentFare;
                        mobileAmountInput.readOnly = true;
                    });
                }
            });

            bankingRadio.addEventListener('change', function() {
                if (this.checked) {
                    validateBeforePaymentSelection(() => {
                        paymentMethod = 'banking';
                        bankingForm.style.display = 'block';
                        mobileBankingForm.style.display = 'none';
                        bankAmountInput.value = currentFare;
                        bankAmountInput.readOnly = true;
                    });
                }
            });

            function validateBeforePaymentSelection(callback) {
                if (!fromSelect.value || !toSelect.value) {
                    alert('Please select both "From" and "To" stations first.');
                    this.checked = false;
                    return;
                }
                
                if (!currentFare) {
                    alert('Please calculate the fare first by clicking "Calculate Fare".');
                    this.checked = false;
                    return;
                }
                
                callback();
            }

            // Bank option selection
            bankOptions.forEach(option => {
                option.addEventListener('click', function() {
                    bankOptions.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedBank = this.getAttribute('data-bank');
                    paymentDetails.bank = selectedBank;
                });
            });

            // Card option selection
            bankCardOptions.forEach(option => {
                option.addEventListener('click', function() {
                    bankCardOptions.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedCard = this.getAttribute('data-card');
                    paymentDetails.card = selectedCard;
                });
            });

            // Cancel button handlers
            document.querySelectorAll('.btn-cancel').forEach(btn => {
                btn.addEventListener('click', function() {
                    const form = this.closest('.payment-form');
                    form.querySelectorAll('input').forEach(input => {
                        input.value = '';
                        input.style.border = '';
                    });
                    
                    mobileBankingRadio.checked = false;
                    bankingRadio.checked = false;
                    form.style.display = 'none';
                    
                    bankOptions.forEach(opt => opt.classList.remove('selected'));
                    bankCardOptions.forEach(opt => opt.classList.remove('selected'));
                    selectedBank = null;
                    selectedCard = null;
                    paymentDetails = {};
                });
            });

            // Confirm payment button handlers
            document.querySelectorAll('.btn-confirm').forEach(button => {
                button.addEventListener('click', function() {
                    const form = this.closest('.payment-form');
                    
                    // Validate all fields
                    if (!validateForm(form)) {
                        return;
                    }
                    
                    // Collect payment details
                    if (paymentMethod === 'mobile') {
                        paymentDetails = {
                            method: 'Mobile Banking',
                            provider: selectedBank,
                            account: mobileNumberInput.value,
                            amount: mobileAmountInput.value
                        };
                    } else {
                        paymentDetails = {
                            method: 'Bank Card',
                            cardType: selectedCard,
                            cardNumber: accountNumberInput.value,
                            cardName: cardNameInput.value,
                            expiry: expiryInput.value,
                            amount: bankAmountInput.value
                        };
                    }
                    
                    // Generate ticket and redirect
                    generateTicket();
                });
            });

            function validateForm(form) {
                let isValid = true;
                const inputs = form.querySelectorAll('input[required]');
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        input.style.border = '2px solid red';
                        isValid = false;
                    } else {
                        input.style.border = '';
                    }
                });
                
                // Validate mobile number format
                if (paymentMethod === 'mobile' && !/^\+8801\d{9}$/.test(mobileNumberInput.value)) {
                    alert('Please enter a valid Bangladeshi mobile number (e.g. +8801XXXXXXXXX)');
                    mobileNumberInput.style.border = '2px solid red';
                    isValid = false;
                }
                
                // Validate card number
                if (paymentMethod === 'banking') {
                    if (!/^\d{16}$/.test(accountNumberInput.value.replace(/\s/g, ''))) {
                        alert('Please enter a valid 16-digit card number');
                        accountNumberInput.style.border = '2px solid red';
                        isValid = false;
                    }
                    
                    if (!/^\d{2}\/\d{2}$/.test(expiryInput.value)) {
                        alert('Please enter expiry date in MM/YY format');
                        expiryInput.style.border = '2px solid red';
                        isValid = false;
                    }
                    
                    if (!/^\d{3,4}$/.test(cvvInput.value)) {
                        alert('Please enter a valid CVV (3 or 4 digits)');
                        cvvInput.style.border = '2px solid red';
                        isValid = false;
                    }
                }
                
                if (!isValid) {
                    alert('Please fill in all required fields correctly.');
                    return false;
                }
                
                return true;
            }

            function generateTicket() {
                // Create ticket data
                const ticketData = {
                    from: fromSelect.options[fromSelect.selectedIndex].text,
                    to: toSelect.options[toSelect.selectedIndex].text,
                    fare: currentFare,
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString(),
                    ticketNumber: 'DMR-' + Math.floor(Math.random() * 1000000),
                    payment: paymentDetails
                };
                
                // Store ticket data in sessionStorage
                sessionStorage.setItem('ticketData', JSON.stringify(ticketData));
                
                // Redirect to myticket.html
                window.location.href = 'myticket.html';
            }

            // Header scroll effect
            const header = document.querySelector('header');
            const body = document.querySelector('body');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('transparent');
                    body.classList.add('white-background');
                } else {
                    header.classList.remove('transparent');
                    body.classList.remove('white-background');
                }
            });
        });

        


        // Confirm payment button handlers
document.querySelectorAll('.btn-confirm').forEach(button => {
    button.addEventListener('click', function() {
        const form = this.closest('.payment-form');
        
        // Check if any payment method is selected
        if (!document.getElementById('mobileBanking').checked && 
            !document.getElementById('banking').checked) {
            alert('Please select a payment method first.');
            return;
        }
        
        // For mobile banking, check if a bank is selected
        if (paymentMethod === 'mobile' && !selectedBank) {
            alert('Please select a mobile banking provider.');
            return;
        }
        
        // For banking, check if a card is selected
        if (paymentMethod === 'banking' && !selectedCard) {
            alert('Please select a card type.');
            return;
        }
        
        // Validate all fields
        if (!validateForm(form)) {
            return;
        }
        
        // Collect payment details
        if (paymentMethod === 'mobile') {
            paymentDetails = {
                method: 'Mobile Banking',
                provider: selectedBank,
                account: mobileNumberInput.value,
                amount: mobileAmountInput.value
            };
        } else {
            paymentDetails = {
                method: 'Bank Card',
                cardType: selectedCard,
                cardNumber: accountNumberInput.value,
                cardName: cardNameInput.value,
                expiry: expiryInput.value,
                amount: bankAmountInput.value
            };
        }
        
        // Generate ticket and redirect
        generateTicket();
    });
});

// Payment method selection handlers
mobileBankingRadio.addEventListener('change', function() {
    if (this.checked) {
        validateBeforePaymentSelection(() => {
            paymentMethod = 'mobile';
            mobileBankingForm.style.display = 'block';
            bankingForm.style.display = 'none';
            mobileAmountInput.value = currentFare;
            mobileAmountInput.readOnly = true;
            
            // Enable confirm button for this form
            mobileBankingForm.querySelector('.btn-confirm').disabled = false;
            bankingForm.querySelector('.btn-confirm').disabled = true;
        });
    }
});

bankingRadio.addEventListener('change', function() {
    if (this.checked) {
        validateBeforePaymentSelection(() => {
            paymentMethod = 'banking';
            bankingForm.style.display = 'block';
            mobileBankingForm.style.display = 'none';
            bankAmountInput.value = currentFare;
            bankAmountInput.readOnly = true;
            
            // Enable confirm button for this form
            bankingForm.querySelector('.btn-confirm').disabled = false;
            mobileBankingForm.querySelector('.btn-confirm').disabled = true;
        });
    }
});

// Initially disable confirm buttons
document.querySelectorAll('.btn-confirm').forEach(btn => {
    btn.disabled = true;
});





// Confirm payment button handlers
document.querySelectorAll('.btn-confirm').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent any default form submission
        
        const form = this.closest('.payment-form');
        
        // Check if any payment method is selected
        if (!document.getElementById('mobileBanking').checked && 
            !document.getElementById('banking').checked) {
            alert('Please select a payment method first.');
            return false; // Stay on the same page
        }
        
        // For mobile banking, check if a bank is selected
        if (paymentMethod === 'mobile' && !selectedBank) {
            alert('Please select a mobile banking provider.');
            return false; // Stay on the same page
        }
        
        // For banking, check if a card is selected
        if (paymentMethod === 'banking' && !selectedCard) {
            alert('Please select a card type.');
            return false; // Stay on the same page
        }
        
        // Validate all fields
        if (!validateForm(form)) {
            return false; // Stay on the same page if validation fails
        }
        
        // Collect payment details
        if (paymentMethod === 'mobile') {
            paymentDetails = {
                method: 'Mobile Banking',
                provider: selectedBank,
                account: mobileNumberInput.value,
                amount: mobileAmountInput.value
            };
        } else {
            paymentDetails = {
                method: 'Bank Card',
                cardType: selectedCard,
                cardNumber: accountNumberInput.value,
                cardName: cardNameInput.value,
                expiry: expiryInput.value,
                amount: bankAmountInput.value
            };
        }
        
        // Generate ticket and redirect only if all validations pass
        generateTicket();
        return true;
    });
});