let selectedOptions = {};

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded");
    const cardContainer = document.getElementById('cardContainer');
    const calculateBtn = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    const optionsContainer = document.getElementById('optionsContainer');
    const currentCardTitle = document.getElementById('currentCardTitle');
    const optionsList = document.getElementById('optionsList');
    const nextCardBtn = document.getElementById('nextCard');
    const calculatorsContainer = document.getElementById('calculatorsContainer');
    const calculatorsList = document.getElementById('calculatorsList');
    const totalImpairmentDiv = document.getElementById('totalImpairment');
    const finalizeImpairmentBtn = document.getElementById('finalizeImpairment');

    let selectedCards = [];
    let currentCardIndex = 0;

    const cardOptions = {
        shoulder: ['ROM', 'Strength', 'Arthroplasty', 'Instability/Subluxation/Dislocation', 'Synovial Hypertrophy'],
        elbow: ['ROM', 'Strength', 'Arthroplasty', 'Synovial Hypertrophy', 'Persistent Subluxation/Dislocation', 'Excessive Passive Mediolateral Instability', 'Excessive Active Mediolateral Deviation'],
        wrist: ['ROM', 'Arthroplasty', 'Synovial Hypertrophy', 'Excessive Active Mediolateral Deviation', 'Carpal Instability Patterns'],
        thumb: ['ROM', 'Arthroplasty', 'Sensory', 'Amputation', 'Synovial Hypertrophy', 'Lateral Deviation', 'Digit Rotational Deformity', 'Persistent Joint Subluxation/Dislocation', 'Joint Passive Mediolateral Instability', 'Constrictive Tenosynovitis'],
        index: ['ROM', 'Arthroplasty', 'Sensory', 'Amputation', 'Synovial Hypertrophy', 'Lateral Deviation', 'Digit Rotation Deformity', 'Persistent Joint Subluxation/Dislocation', 'Joint Passive Mediolateral Instability', 'Intrinsic Tightness', 'Constrictive Tenosynovitis', 'Extensor Tendon Subluxation at MP Joint'],
        middle: ['ROM', 'Arthroplasty', 'Sensory', 'Amputation', 'Synovial Hypertrophy', 'Lateral Deviation', 'Digit Rotation Deformity', 'Persistent Joint Subluxation/Dislocation', 'Joint Passive Mediolateral Instability', 'Intrinsic Tightness', 'Constrictive Tenosynovitis', 'Extensor Tendon Subluxation at MP Joint'],
        ring: ['ROM', 'Arthroplasty', 'Sensory', 'Amputation', 'Synovial Hypertrophy', 'Lateral Deviation', 'Digit Rotation Deformity', 'Persistent Joint Subluxation/Dislocation', 'Joint Passive Mediolateral Instability', 'Intrinsic Tightness', 'Constrictive Tenosynovitis', 'Extensor Tendon Subluxation at MP Joint'],
        little: ['ROM', 'Arthroplasty', 'Sensory', 'Amputation', 'Synovial Hypertrophy', 'Lateral Deviation', 'Digit Rotation Deformity', 'Persistent Joint Subluxation/Dislocation', 'Joint Passive Mediolateral Instability', 'Intrinsic Tightness', 'Constrictive Tenosynovitis', 'Extensor Tendon Subluxation at MP Joint'],
        nerve: ['Peripheral Nerves', 'CRPS', 'Spinal Nerves', 'Brachial Plexus'],
        vascular: ['Option 1', 'Option 2', 'Option 3'],
        grip: ['Grip Strength', 'Pinch Strength'],
        amputation: ['Option 1', 'Option 2', 'Option 3']
    };

    // Create cards
    Object.keys(cardOptions).forEach(cardValue => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = cardValue;
        card.textContent = cardValue.charAt(0).toUpperCase() + cardValue.slice(1);
        card.addEventListener('click', () => {
            card.classList.toggle('selected');
        });
        cardContainer.appendChild(card);
    });

    calculateBtn.addEventListener('click', () => {
        console.log("Calculate button clicked");
        selectedCards = Array.from(document.querySelectorAll('.card.selected')).map(card => card.dataset.value);
        console.log("Selected cards:", selectedCards);
        if (selectedCards.length > 0) {
            currentCardIndex = 0;
            selectedOptions = {};
            showOptionsForCard(selectedCards[currentCardIndex]);
        } else {
            resultDiv.textContent = "Please select at least one card.";
        }
    });

    function showOptionsForCard(cardValue) {
        console.log("Showing options for:", cardValue);
        currentCardTitle.textContent = `Options for ${cardValue.charAt(0).toUpperCase() + cardValue.slice(1)}`;
        optionsList.innerHTML = '';
        cardOptions[cardValue].forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => {
                optionElement.classList.toggle('selected');
            });
            optionsList.appendChild(optionElement);
        });
        optionsContainer.style.display = 'block';
        calculatorsContainer.style.display = 'none';
    }

    nextCardBtn.addEventListener('click', () => {
        console.log("Next button clicked");
        const cardValue = selectedCards[currentCardIndex];
        selectedOptions[cardValue] = Array.from(document.querySelectorAll('.option.selected')).map(option => option.textContent);
        console.log("Selected options:", selectedOptions);
        
        currentCardIndex++;
        if (currentCardIndex < selectedCards.length) {
            showOptionsForCard(selectedCards[currentCardIndex]);
        } else {
            showCalculators
          function showCalculators() {
        console.log("Showing calculators");
        optionsContainer.style.display = 'none';
        calculatorsContainer.style.display = 'block';
        calculatorsList.innerHTML = '';
        
        for (const [cardValue, options] of Object.entries(selectedOptions)) {
            options.forEach(option => {
                const calculatorCard = document.createElement('div');
                calculatorCard.classList.add('calculator-card');
                calculatorCard.innerHTML = createCalculatorContent(cardValue, option);
                calculatorsList.appendChild(calculatorCard);
            });
        }
        
        const totalImpairmentCard = document.createElement('div');
        totalImpairmentCard.classList.add('calculator-card');
        totalImpairmentCard.id = 'total-impairment-card';
        totalImpairmentCard.innerHTML = `
            <h3 id="total-impairment-title">Total Impairment</h3>
            <div id="impairment-breakdown"></div>
            <p class="total-impairment"><strong>Total: <span id="total-impairment-result">0 UE = 0 WPI</span></strong></p>
        `;
        calculatorsList.appendChild(totalImpairmentCard);
        
        setupCalculatorEventListeners();
        updateTotalImpairment();
    }

    function createCalculatorContent(cardValue, option) {
        if (cardValue === 'shoulder') {
            return createShoulderCalculatorContent(option);
        }
        // Add more conditions for other body parts as needed
        return `<h3>${cardValue.charAt(0).toUpperCase() + cardValue.slice(1)} - ${option}</h3><p>Calculator content for ${option} goes here.</p>`;
    }

    function setupCalculatorEventListeners() {
        console.log("Setting up calculator event listeners");
        if (selectedOptions.shoulder) {
            setupShoulderCalculators(selectedOptions.shoulder);
        }
        // Add setup functions for other body parts as you implement them
    }

    function updateTotalImpairment() {
        console.log("Updating total impairment");
        const impairmentBreakdown = document.getElementById('impairment-breakdown');
        const totalImpairmentResult = document.getElementById('total-impairment-result');

        let allImpairments = [];
        let breakdownHTML = '';

        if (selectedOptions.shoulder) {
            const shoulderImpairments = getShoulderImpairment();
            if (shoulderImpairments.length > 0) {
                allImpairments = allImpairments.concat(shoulderImpairments);
                breakdownHTML += `<p>Shoulder:</p><ul>`;
                shoulderImpairments.forEach(imp => {
                    breakdownHTML += `<li>${imp.name}: ${imp.value} UE</li>`;
                });
                breakdownHTML += `</ul>`;
            }
        }
        // Add similar blocks for other body parts as you implement them

        if (allImpairments.length > 0) {
            const impairmentValues = allImpairments.map(imp => imp.value);
            const combinedUE = combineImpairments(impairmentValues);
            const combinedWPI = Math.round(combinedUE * 0.6);

            if (impairmentValues.length > 1) {
                breakdownHTML += `<p><strong>Combined: ${impairmentValues.join(' C ')} = ${combinedUE} UE</strong></p>`;
            }
            
            breakdownHTML += `<p><strong>Total: ${combinedUE} UE = ${combinedWPI} WPI</strong></p>`;
            totalImpairmentResult.textContent = `${combinedUE} UE = ${combinedWPI} WPI`;
        } else {
            breakdownHTML = '<p>No impairments calculated yet.</p>';
            totalImpairmentResult.textContent = '0 UE = 0 WPI';
        }

        impairmentBreakdown.innerHTML = breakdownHTML;
    }

    function combineImpairments(impairments) {
        if (impairments.length === 0) return 0;
        if (impairments.length === 1) return impairments[0];

        impairments.sort((a, b) => b - a); // Sort in descending order
        let result = impairments[0];

        for (let i = 1; i < impairments.length; i++) {
            result = result + impairments[i] * (1 - result / 100);
            result = Math.round(result * 10) / 10; // Round to nearest 0.1%
        }

        return Math.round(result); // Round to nearest whole percent for final result
    }

    finalizeImpairmentBtn.addEventListener('click', () => {
        console.log("Finalize Impairment button clicked");
        // Implement finalization logic here
    });
});
