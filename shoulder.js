function createShoulderCalculatorContent(option) {
    switch (option) {
        case 'ROM':
            return createShoulderROMContent();
        case 'Strength':
            return createShoulderStrengthContent();
        case 'Arthroplasty':
            return createShoulderArthroplastyContent();
        case 'Instability/Subluxation/Dislocation':
            return createShoulderInstabilityContent();
        case 'Synovial Hypertrophy':
            return createShoulderSynovialHypertrophyContent();
        default:
            return `<h3>Shoulder - ${option}</h3><p>Calculator content for ${option} goes here.</p>`;
    }
}

function setupShoulderCalculators(shoulderOptions) {
    console.log("Setting up shoulder calculators with options:", shoulderOptions);
    if (shoulderOptions.includes('ROM')) {
        setupShoulderROM();
    }
    if (shoulderOptions.includes('Strength')) {
        setupShoulderStrength();
    }
    if (shoulderOptions.includes('Arthroplasty')) {
        setupShoulderArthroplasty();
    }
    if (shoulderOptions.includes('Instability/Subluxation/Dislocation')) {
        setupShoulderInstability();
    }
    if (shoulderOptions.includes('Synovial Hypertrophy')) {
        setupShoulderSynovialHypertrophy();
    }
}

function createShoulderROMContent() {
    return `
        <h3>Shoulder - ROM</h3>
        <table class="rom-table">
            <tr>
                <th></th>
                <th>Flexion</th>
                <th>Extension</th>
                <th>Ankylosis</th>
                <th>Imp%</th>
            </tr>
            <tr>
                <td>Angle°</td>
                <td><input type="number" id="shoulder-flexion" min="0" max="180"></td>
                <td><input type="number" id="shoulder-extension" min="0" max="60"></td>
                <td><input type="number" id="shoulder-ankylosis-fe" min="0" max="180"></td>
                <td rowspan="2" id="shoulder-fe-imp">0</td>
            </tr>
            <tr>
                <td>Imp%</td>
                <td id="shoulder-flexion-imp">0</td>
                <td id="shoulder-extension-imp">0</td>
                <td id="shoulder-ankylosis-fe-imp">0</td>
            </tr>
            <tr>
                <th></th>
                <th>Abduction</th>
                <th>Adduction</th>
                <th>Ankylosis</th>
                <th>Imp%</th>
            </tr>
            <tr>
                <td>Angle°</td>
                <td><input type="number" id="shoulder-abduction" min="0" max="180"></td>
                <td><input type="number" id="shoulder-adduction" min="0" max="50"></td>
                <td><input type="number" id="shoulder-ankylosis-aa" min="0" max="180"></td>
                <td rowspan="2" id="shoulder-aa-imp">0</td>
            </tr>
            <tr>
                <td>Imp%</td>
                <td id="shoulder-abduction-imp">0</td>
                <td id="shoulder-adduction-imp">0</td>
                <td id="shoulder-ankylosis-aa-imp">0</td>
            </tr>
            <tr>
                <th></th>
                <th>Internal Rotation</th>
                <th>External Rotation</th>
                <th>Ankylosis</th>
                <th>Imp%</th>
            </tr>
            <tr>
                <td>Angle°</td>
                <td><input type="number" id="shoulder-internal-rotation" min="0" max="90"></td>
                <td><input type="number" id="shoulder-external-rotation" min="0" max="90"></td>
                <td><input type="number" id="shoulder-ankylosis-ie" min="0" max="90"></td>
                <td rowspan="2" id="shoulder-ie-imp">0</td>
            </tr>
            <tr>
                <td>Imp%</td>
                <td id="shoulder-internal-rotation-imp">0</td>
                <td id="shoulder-external-rotation-imp">0</td>
                <td id="shoulder-ankylosis-ie-imp">0</td>
            </tr>
        </table>
        <p class="total-impairment"><strong>Total: <span id="shoulder-rom-total">0</span> UE = <span id="shoulder-rom-wpi">0</span> WPI</strong></p>
    `;
}

function createShoulderStrengthContent() {
    return `
        <h3>Shoulder - Muscle Strength</h3>
        <table class="strength-table">
            <tr class="header-row">
                <th>Motion</th>
                <th>Max UE</th>
                <th>Strength Deficit % (max 50%)</th>
                <th>UE Impairment</th>
            </tr>
            <tr>
                <td>Flexion</td>
                <td>24</td>
                <td><input type="number" id="shoulder-flexion-strength-deficit" min="0" max="50" step="1"></td>
                <td><input type="number" id="shoulder-flexion-strength-imp" min="0" max="12" step="1"></td>
            </tr>
            <tr>
                <td>Extension</td>
                <td>6</td>
                <td><input type="number" id="shoulder-extension-strength-deficit" min="0" max="50" step="1"></td>
                <td><input type="number" id="shoulder-extension-strength-imp" min="0" max="3" step="1"></td>
            </tr>
            <tr>
                <td>Abduction</td>
                <td>12</td>
                <td><input type="number" id="shoulder-abduction-strength-deficit" min="0" max="50" step="1"></td>
                <td><input type="number" id="shoulder-abduction-strength-imp" min="0" max="6" step="1"></td>
            </tr>
            <tr>
                <td>Adduction</td>
                <td>6</td>
                <td><input type="number" id="shoulder-adduction-strength-deficit" min="0" max="50" step="1"></td>
                <td><input type="number" id="shoulder-adduction-strength-imp" min="0" max="3" step="1"></td>
            </tr>
            <tr>
                <td>Internal Rotation</td>
                <td>6</td>
                <td><input type="number" id="shoulder-internal-rotation-strength-deficit" min="0" max="50" step="1"></td>
                <td><input type="number" id="shoulder-internal-rotation-strength-imp" min="0" max="3" step="1"></td>
            </tr>
            <tr>
                <td>External Rotation</td>
                <td>6</td>
                <td><input type="number" id="shoulder-external-rotation-strength-deficit" min="0" max="50" step="1"></td>
                <td><input type="number" id="shoulder-external-rotation-strength-imp" min="0" max="3" step="1"></td>
            </tr>
        </table>
        <p class="total-impairment"><strong>Total: <span id="shoulder-strength-total-ue">0 UE = 0 WPI</span></strong></p>
        <div class="instructions">
            <p>Instructions: Enter the strength deficit percent provided by physician for each motion. If a strength deficit percent is not provided by physician, enter the strength UE impairment for each motion provided by physician. For reference, Grade 4 strength is 1 to 25% strength deficit and Grade 3 Strength is 26 to 50% strength deficit.</p>
        </div>
        <div class="reference">
            <p>Reference: Table 16-35 on p. 510 of The AMA Guides 5th Edition</p>
        </div>
    `;
}

function createShoulderArthroplastyContent() {
    return `
        <h3>Shoulder - Arthroplasty</h3>
        <div class="arthroplasty-options">
            <div class="arthroplasty-option" data-value="30">
                <input type="radio" id="total-shoulder-resection" name="shoulder-arthroplasty" value="30">
                <label for="total-shoulder-resection">Total Shoulder Resection Arthroplasty</label>
            </div>
            <div class="arthroplasty-option" data-value="24">
                <input type="radio" id="total-shoulder-implant" name="shoulder-arthroplasty" value="24">
                <label for="total-shoulder-implant">Total Shoulder Implant Arthroplasty</label>
            </div>
            <div class="arthroplasty-option" data-value="10">
                <input type="radio" id="distal-clavicle-resection" name="shoulder-arthroplasty" value="10">
                <label for="distal-clavicle-resection">Distal Clavicle Resection Arthroplasty</label>
            </div>
            <div class="arthroplasty-option" data-value="3">
                <input type="radio" id="proximal-clavicle-resection" name="shoulder-arthroplasty" value="3">
                <label for="proximal-clavicle-resection">Proximal Clavicle Resection Arthroplasty</label>
            </div>
        </div>
        <p class="total-impairment"><strong>Total: <span id="shoulder-arthroplasty-total">0 UE = 0 WPI</span></strong></p>
    `;
}

function createShoulderInstabilityContent() {
    return `
        <h3>Shoulder - Instability/Subluxation/Dislocation</h3>
        <div class="instability-options">
            <div class="instability-option" data-value="6">
                <input type="radio" id="class-1-instability" name="shoulder-instability" value="6">
                <label for="class-1-instability">Class 1 - Occult Instability (6 UE)</label>
            </div>
            <div class="instability-option" data-value="12">
                <input type="radio" id="class-2-instability" name="shoulder-instability" value="12">
                <label for="class-2-instability">Class 2 - Subluxating Humeral Head (12 UE)</label>
            </div>
            <div class="instability-option" data-value="24">
                <input type="radio" id="class-3-instability" name="shoulder-instability" value="24">
                <label for="class-3-instability">Class 3 - Dislocating Humeral Head (24 UE)</label>
            </div>
        </div>
        <p class="total-impairment"><strong>Total: <span id="shoulder-instability-total">0 UE = 0 WPI</span></strong></p>
    `;
}

function createShoulderSynovialHypertrophyContent() {
    return `
        <h3>Shoulder - Synovial Hypertrophy</h3>
        <table class="synovial-hypertrophy-table">
            <thead>
                <tr>
                    <th>Shoulder Joints</th>
                    <th>Max UE</th>
                    <th>Mild (10%)</th>
                    <th>Moderate (20%)</th>
                    <th>Severe (30%)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Glenohumeral</td>
                    <td>60</td>
                    <td><input type="checkbox" class="synovial-checkbox" data-joint="glenohumeral" value="6"> 6</td>
                    <td><input type="checkbox" class="synovial-checkbox" data-joint="glenohumeral" value="12"> 12</td>
                    <td><input type="checkbox" class="synovial-checkbox" data-joint="glenohumeral" value="18"> 18</td>
                </tr>
                <tr>
                    <td>Acromioclavicular</td>
                    <td>25</td>
                    <td><input type="checkbox" class="synovial-checkbox" data-joint="acromioclavicular" value="3"> 3</td>
                    <td><input type="checkbox" class="synovial-checkbox" data-joint="acromioclavicular" value="5"> 5</td>
                    <td><input type="checkbox" class="synovial-checkbox" data-joint="acromioclavicular" value="8"> 8</td>
                </tr>
                <tr>
                    <td>Sternoclavicular</td>
                    <td>5</td>
                    <td><input type="checkbox" class="synovial-checkbox" data-joint="sternoclavicular" value="1"> 1</td>
                    <td><input type="checkbox" class="synovial-checkbox" data-joint="sternoclavicular" value="1"> 1</td>
                    <td><input type="checkbox" class="synovial-checkbox" data-joint="sternoclavicular" value="2"> 2</td>
                </tr>
            </tbody>
        </table>
        <p class="instructions">Instructions: Check up to one box for each joint as applicable.</p>
        <p class="reference">Reference: Tables 16-19 & 16-18 on pages 500 & 499 of The AMA Guides 5th Ed.</p>
        <p class="total-impairment"><strong>Total: <span id="shoulder-synovial-hypertrophy-total">0 UE = 0 WPI</span></strong></p>
    `;
}

function setupShoulderROM() {
    const shoulderInputs = ['flexion', 'extension', 'abduction', 'adduction', 'internal-rotation', 'external-rotation', 'ankylosis-fe', 'ankylosis-aa', 'ankylosis-ie'];
    shoulderInputs.forEach(input => {
        const element = document.getElementById(`shoulder-${input}`);
        if (element) {
            element.addEventListener('input', calculateShoulderROM);
        }
    });
}

function calculateShoulderROM() {
    const movements = [
        { name: 'flexion', dataArray: SHOULDERFlexionExtensionData, group: 'fe' },
{ name: 'extension', dataArray: SHOULDERFlexionExtensionData, group: 'fe' },
        { name: 'abduction', dataArray: SHOULDERAbductionAdductionData, group: 'aa' },
        { name: 'adduction', dataArray: SHOULDERAbductionAdductionData, group: 'aa' },
        { name: 'internal-rotation', dataArray: SHOULDERInternalExternalRotationData, field: 'internalRotation', group: 'ie' },
        { name: 'external-rotation', dataArray: SHOULDERInternalExternalRotationData, field: 'externalRotation', group: 'ie' }
    ];

    let impairments = {
        fe: { normal: 0, ankylosis: 0 },
        aa: { normal: 0, ankylosis: 0 },
        ie: { normal: 0, ankylosis: 0 }
    };

    movements.forEach(movement => {
        const angleInput = document.getElementById(`shoulder-${movement.name}`);
        const impOutput = document.getElementById(`shoulder-${movement.name}-imp`);
        const angle = angleInput.value !== '' ? parseInt(angleInput.value) : null;

        if (angle !== null) {
            const imp = findImpairment(angle, movement.dataArray, movement.field || movement.name);
            impOutput.textContent = imp;
            impairments[movement.group].normal += imp;
        } else {
            impOutput.textContent = '';
        }
    });

    // Handle ankylosis
    ['fe', 'aa', 'ie'].forEach(group => {
        const ankylosisInput = document.getElementById(`shoulder-ankylosis-${group}`);
        const ankylosisImpOutput = document.getElementById(`shoulder-ankylosis-${group}-imp`);
        const ankylosisAngle = ankylosisInput.value !== '' ? parseInt(ankylosisInput.value) : null;

        if (ankylosisAngle !== null) {
            const dataArray = group === 'fe' ? SHOULDERFlexionExtensionData :
                              group === 'aa' ? SHOULDERAbductionAdductionData :
                              SHOULDERInternalExternalRotationData;
            const imp = findImpairment(ankylosisAngle, dataArray, 'ankylosis');
            ankylosisImpOutput.textContent = imp;
            impairments[group].ankylosis = imp;
        } else {
            ankylosisImpOutput.textContent = '';
        }
    });

    // Calculate and update subtotals
    let totalImp = 0;
    ['fe', 'aa', 'ie'].forEach(group => {
        const subtotal = Math.max(impairments[group].normal, impairments[group].ankylosis);
        document.getElementById(`shoulder-${group}-imp`).textContent = subtotal;
        totalImp += subtotal;
    });

    // Calculate total shoulder impairment
    const wpi = Math.round(totalImp * 0.6);

    document.getElementById('shoulder-rom-total').textContent = totalImp;
    document.getElementById('shoulder-rom-wpi').textContent = wpi;

    updateTotalImpairment();
}

function setupShoulderStrength() {
    const movements = ['flexion', 'extension', 'abduction', 'adduction', 'internal-rotation', 'external-rotation'];
    movements.forEach(movement => {
        const deficitElement = document.getElementById(`shoulder-${movement}-strength-deficit`);
        const impElement = document.getElementById(`shoulder-${movement}-strength-imp`);
        if (deficitElement) {
            deficitElement.addEventListener('input', () => calculateShoulderStrength(movement, 'deficit'));
        }
        if (impElement) {
            impElement.addEventListener('input', () => calculateShoulderStrength(movement, 'imp'));
        }
    });
}

function calculateShoulderStrength(movement, inputType) {
    const deficitInput = document.getElementById(`shoulder-${movement}-strength-deficit`);
    const impInput = document.getElementById(`shoulder-${movement}-strength-imp`);
    const maxUE = parseInt(deficitInput.closest('tr').children[1].textContent);

    if (inputType === 'deficit') {
        let deficit = Math.min(parseFloat(deficitInput.value) || 0, 50);
        deficitInput.value = deficit;
        const impairment = Math.round((deficit / 100) * maxUE);
        impInput.value = impairment;
    } else {
        let impairment = Math.min(parseInt(impInput.value) || 0, Math.floor(maxUE / 2));
        impInput.value = impairment;
        const deficit = Math.round((impairment / maxUE) * 100);
        deficitInput.value = deficit;
    }

    updateTotalShoulderStrengthImpairment();
}

function updateTotalShoulderStrengthImpairment() {
    const movements = ['flexion', 'extension', 'abduction', 'adduction', 'internal-rotation', 'external-rotation'];
    let totalUEImpairment = 0;

    movements.forEach(movement => {
        const impInput = document.getElementById(`shoulder-${movement}-strength-imp`);
        totalUEImpairment += parseInt(impInput.value) || 0;
    });

    const totalWPI = Math.round(totalUEImpairment * 0.6);

    document.getElementById('shoulder-strength-total-ue').textContent = `${totalUEImpairment} UE = ${totalWPI} WPI`;

    updateTotalImpairment();
}

function setupShoulderArthroplasty() {
    const arthroplastyOptions = document.querySelectorAll('input[name="shoulder-arthroplasty"]');
    arthroplastyOptions.forEach(option => {
        option.addEventListener('change', calculateShoulderArthroplasty);
    });
}

function calculateShoulderArthroplasty() {
    const selectedOption = document.querySelector('input[name="shoulder-arthroplasty"]:checked');
    const totalElement = document.getElementById('shoulder-arthroplasty-total');
    
    if (selectedOption) {
        const ueImpairment = parseInt(selectedOption.value);
        const wpi = Math.round(ueImpairment * 0.6);
        totalElement.textContent = `${ueImpairment} UE = ${wpi} WPI`;
    } else {
        totalElement.textContent = '0 UE = 0 WPI';
    }
    
    updateTotalImpairment();
}

function setupShoulderInstability() {
    const instabilityOptions = document.querySelectorAll('input[name="shoulder-instability"]');
    instabilityOptions.forEach(option => {
        option.addEventListener('change', calculateShoulderInstability);
    });
}

function calculateShoulderInstability() {
    const selectedOption = document.querySelector('input[name="shoulder-instability"]:checked');
    const totalElement = document.getElementById('shoulder-instability-total');
    
    if (selectedOption) {
        const ueImpairment = parseInt(selectedOption.value);
        const wpi = Math.round(ueImpairment * 0.6);
        totalElement.textContent = `${ueImpairment} UE = ${wpi} WPI`;
    } else {
        totalElement.textContent = '0 UE = 0 WPI';
    }
    
    updateTotalImpairment();
}

function setupShoulderSynovialHypertrophy() {
    const synovialCheckboxes = document.querySelectorAll('.synovial-checkbox');
    synovialCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateShoulderSynovialHypertrophy);
    });
}

function calculateShoulderSynovialHypertrophy(event) {
    const changedCheckbox = event.target;
    const joint = changedCheckbox.dataset.joint;
    
    // Uncheck other checkboxes for the same joint
    document.querySelectorAll(`.synovial-checkbox[data-joint="${joint}"]`).forEach(checkbox => {
        if (checkbox !== changedCheckbox) {
            checkbox.checked = false;
        }
    });

    // Calculate total impairment
    let totalUEImpairment = 0;
    document.querySelectorAll('.synovial-checkbox:checked').forEach(checkbox => {
        totalUEImpairment += parseInt(checkbox.value);
    });

    const totalWPI = Math.round(totalUEImpairment * 0.6);
    document.getElementById('shoulder-synovial-hypertrophy-total').textContent = `${totalUEImpairment} UE = ${totalWPI} WPI`;

    updateTotalImpairment();
}

function getShoulderImpairment() {
    let impairments = [];

    if (selectedOptions.shoulder) {
        if (selectedOptions.shoulder.includes('ROM')) {
            const romImpairment = parseInt(document.getElementById('shoulder-rom-total').textContent);
            if (!isNaN(romImpairment) && romImpairment > 0) {
                impairments.push({ name: 'ROM', value: romImpairment });
            }
        }

        if (selectedOptions.shoulder.includes('Strength')) {
            const strengthImpairment = parseInt(document.getElementById('shoulder-strength-total-ue').textContent.split(' ')[0]);
            if (!isNaN(strengthImpairment) && strengthImpairment > 0) {
                impairments.push({ name: 'Strength', value: strengthImpairment });
            }
        }

        if (selectedOptions.shoulder.includes('Arthroplasty')) {
            const arthroplastyImpairment = parseInt(document.getElementById('shoulder-arthroplasty-total').textContent.split(' ')[0]);
            if (!isNaN(arthroplastyImpairment) && arthroplastyImpairment > 0) {
                impairments.push({ name: 'Arthroplasty', value: arthroplastyImpairment });
            }
        }

        if (selectedOptions.shoulder.includes('Instability/Subluxation/Dislocation')) {
            const instabilityImpairment = parseInt(document.getElementById('shoulder-instability-total').textContent.split(' ')[0]);
            if (!isNaN(instabilityImpairment) && instabilityImpairment > 0) {
                impairments.push({ name: 'Instability', value: instabilityImpairment });
            }
        }

        if (selectedOptions.shoulder.includes('Synovial Hypertrophy')) {
            const synovialImpairment = parseInt(document.getElementById('shoulder-synovial-hypertrophy-total').textContent.split(' ')[0]);
            if (!isNaN(synovialImpairment) && synovialImpairment > 0) {
                impairments.push({ name: 'Synovial Hypertrophy', value: synovialImpairment });
            }
        }
    }

    return impairments;
}

function findImpairment(angle, dataArray, angleField) {
    let impairment = 0;
    for (let i = 0; i < dataArray.length; i++) {
        let dataAngle = dataArray[i][angleField];
        if (typeof dataAngle === 'string') {
            if (dataAngle.startsWith('<') && angle <= parseInt(dataAngle.slice(1))) {
                impairment = dataArray[i]['ue' + angleField.charAt(0).toUpperCase() + angleField.slice(1)];
                break;
            } else if (dataAngle.startsWith('>') && angle >= parseInt(dataAngle.slice(1))) {
                impairment = dataArray[i]['ue' + angleField.charAt(0).toUpperCase() + angleField.slice(1)];
                break;
            }
        } else if (angle === dataAngle) {
            impairment = dataArray[i]['ue' + angleField.charAt(0).toUpperCase() + angleField.slice(1)];
            break;
        }
    }
    return impairment;
}
