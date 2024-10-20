const rankCoefficients = [
   {"Rank": 1, "Legendary": 0.8, "Epic": 0.8, "Rare": 0.8, "Common": 0.8},
  {"Rank": 2, "Legendary": 1.1, "Epic": 1.1, "Rare": 1.1, "Common": 1.1},
  {"Rank": 3, "Legendary": 1.32, "Epic": 1.32, "Rare": 1.32, "Common": 1.32},
  {"Rank": 4, "Legendary": 1.45, "Epic": 1.45, "Rare": 1.45, "Common": 1.45},
  {"Rank": 5, "Legendary": 1.61, "Epic": 1.61, "Rare": 1.61, "Common": 1.61},
  {"Rank": 6, "Legendary": 1.81, "Epic": 1.78, "Rare": 1.78, "Common": 1.78},
  {"Rank": 7, "Legendary": 2.04, "Epic": 1.99, "Rare": 1.99, "Common": 1.99},
  {"Rank": 8, "Legendary": 2.33, "Epic": 2.23, "Rare": 2.23, "Common": 2.23},
  {"Rank": 9, "Legendary": 2.68, "Epic": 2.51, "Rare": 2.51, "Common": 2.51},
  {"Rank": 10, "Legendary": 3.11, "Epic": 2.83, "Rare": 2.83, "Common": 2.83},
  {"Rank": 11, "Legendary": 3.64, "Epic": 3.23, "Rare": 3.23, "Common": 3.23},
  {"Rank": 12, "Legendary": 4.29, "Epic": 3.71, "Rare": 3.71, "Common": 3.71},
  {"Rank": 13, "Legendary": 5.11, "Epic": 4.31, "Rare": 4.31, "Common": 4.31},
  {"Rank": 14, "Legendary": 6.13, "Epic": 5.04, "Rare": 5.04, "Common": 5.04},
  {"Rank": 15, "Legendary": 7.41, "Epic": 5.95, "Rare": 5.95, "Common": 5.95}
];

// Populate unit and rank dropdowns
window.onload = () => {
    const unitSelect = document.getElementById('unit-select');
    const rankSelect = document.getElementById('rank-select');
  
    // Populate unit names
    squadData.forEach(unit => {
        let option = document.createElement('option');
        option.value = unit.Name;
        option.textContent = unit.Name;
        unitSelect.appendChild(option);
    });

    // Populate ranks 1 to 15
    rankCoefficients.forEach(rank => {
        let option = document.createElement('option');
        option.value = rank.Rank;
        option.textContent = rank.Rank;
        if (rank.Rank === 4) {
            option.selected = true;
        }
        rankSelect.appendChild(option);
    });
};

// Formula for Level Multiplier
function calculateLevelMultiplier(level) {
    const A = 0.0000029990915;
    const B = 0.000329999952;
    const C = 0.045;
    let L = level - 1;
    return (A * Math.pow(L, 2.99999)) + (B * Math.pow(L, 1.99999)) + (C * L) + 1;
}


function populatePassiveDropdowns(unit, rank) {
    const atkContainer = document.getElementById('atk-dropdown-container');
    const hpContainer = document.getElementById('hp-dropdown-container');
    const atkspdContainer = document.getElementById('atkspd-dropdown-container');
    const skiltitl = document.getElementById('skiltitl');
    

    atkContainer.innerHTML = '';
    hpContainer.innerHTML = '';
    atkspdContainer.innerHTML = '';    
    skiltitl.innerHTML = '';
    
     if (unit.Passive !== "N/A") {
        // Determine max passive level based on rank
        let maxpasLevel = 1; // Always include Level 1

        if (rank >= 4) maxpasLevel = 2;
        if (rank >= 5) maxpasLevel = 3;
        if (rank >= 6) maxpasLevel = 4;
        if (rank >= 7) maxpasLevel = 5;

        // ATK Passive Dropdown
        if (unit.Passive.ATK) {
            const atkDropdown = document.createElement('select');
            for (let i = 0; i < maxpasLevel; i++) {
                const option = document.createElement('option');
                option.value = unit.Passive.ATK[i];
                option.textContent = `Level ${i + 1}: ${unit.Passive.ATK[i]}%`;
                atkDropdown.appendChild(option);
            }
            atkContainer.innerHTML += '<div>Damage</div>';
            atkContainer.appendChild(atkDropdown); 
            skiltitl.innerHTML = 'Skill Upgrade:';
            
        }

        // HP Passive Dropdown
        if (unit.Passive.HP) {
            const hpDropdown = document.createElement('select');
            for (let i = 0; i < maxpasLevel; i++) {
                const option = document.createElement('option');
                option.value = unit.Passive.HP[i];
                option.textContent = `Level ${i + 1}: ${unit.Passive.HP[i]}%`;
                hpDropdown.appendChild(option);
            }
            
            hpContainer.innerHTML += '<div>HP</div>';
            hpContainer.appendChild(hpDropdown);            
            skiltitl.innerHTML = 'Skill Upgrade:';
        }
        
        // ATKSPD Passive Dropdown
        if (unit.Passive["ATK Speed"]) {
            const atkspdDropdown = document.createElement('select');
            for (let i = 0; i < maxpasLevel; i++) {
                const option = document.createElement('option');
                option.value = unit.Passive["ATK Speed"][i];
                option.textContent = `Level ${i + 1}: ${unit.Passive["ATK Speed"][i]}%`;
                atkspdDropdown.appendChild(option);
            }
            atkspdContainer.innerHTML += '<div>Attack Speed</div>';
            atkspdContainer.appendChild(atkspdDropdown);
            skiltitl.innerHTML = 'Skill Upgrade:';
        }
    } else {
        atkContainer.innerHTML = '';
        hpContainer.innerHTML = '';
        atkspdContainer.innerHTML = '';
        skiltitl.innerHTML = '';
        
    }
}
function updateDropdowns() {
    const unitName = document.getElementById('unit-select').value;
    const rank = parseInt(document.getElementById('rank-select').value);
    const unit = squadData.find(u => u.Name === unitName);

    if (unit && rank) {
        populatePassiveDropdowns(unit, rank);
    } else {
        // Clear the dropdowns if no valid unit or rank is selected
        document.getElementById('atk-dropdown-container').innerHTML = '';
        document.getElementById('hp-dropdown-container').innerHTML = '';
        document.getElementById('atkspd-dropdown-container').innerHTML = '';
        document.getElementById('skiltitl').innerHTML = '';
        
    }
}



// Main function to calculate stats
function calculateStats() {
    const unitName = document.getElementById('unit-select').value;
    const rank = parseInt(document.getElementById('rank-select').value);
    const level = parseInt(document.getElementById('level-input').value);

    const unit = squadData.find(u => u.Name === unitName);
    const rankData = rankCoefficients.find(r => r.Rank === rank);

    if (unit && rankData && level > 0 && level <= 300) {
         const rarity = unit.Rarity;

        // Use rank coefficient, default to 1 if rank is 1
        const rankCoefficient = rank === 1 ? 1 : rankData[rarity];

        // Use level multiplier, default to 1 if level is 1
        const levelMultiplier = level === 1 ? 1 : calculateLevelMultiplier(level);

        // Calculate stats
        const atk = unit["Base ATK"] * rankCoefficient * levelMultiplier;
        const hp = unit["Base HP"] * rankCoefficient * levelMultiplier;
        const speed = unit["Attack Speed"];
        
       // Get selected passive values
    const atkDropdown = document.querySelector('#atk-dropdown-container select');
    const hpDropdown = document.querySelector('#hp-dropdown-container select');
    const atkspdDropdown = document.querySelector('#atkspd-dropdown-container select');

    const selectedAtkPassive = atkDropdown ? parseInt(atkDropdown.value) : 0;
    const selectedHpPassive = hpDropdown ? parseInt(hpDropdown.value) : 0;
    const selectedatkspdPassive = atkspdDropdown ? parseInt(atkspdDropdown.value) : 0;

    // Apply passives
    const finalAtk = atk * (1 + selectedAtkPassive / 100);
    const finalHp = hp * (1 + selectedHpPassive / 100);
    const finalatkspd = speed * (1 - selectedatkspdPassive / 100);

        // Display results
        document.getElementById('result').innerHTML = `
             <img class="sqimg" src="images/units/${unitName}.png" alt=""/> 
            <div class="statstxt"><p><img class="iconsq" src="images/attack.png" alt=""/> Attack: ${atk.toFixed(0)}</p>
            <p><img class="iconsq" src="images/health.png" alt=""/> HP: ${finalHp.toFixed(0)}</p>
            <p><img class="iconsq" src="images/attack-speed.png" alt=""/> Attack Speed: ${finalatkspd}</p></div>
        `;
        return { unitName, rank, level, atk: finalAtk, hp: finalHp, speed: finalatkspd };

    } 
    
    else {
        document.getElementById('result').innerHTML = "<p>Please select valid inputs.</p>";
    }
    
    
    
    
}



function addToComparison() {
    const tableBody = document.querySelector("#comparison-table .txbody");
    
   

    const calculatedStats = calculateStats();

    // Check if stats are valid before adding to comparison
    if (calculatedStats) {
        const newRow = document.createElement('div');
        
        newRow.innerHTML = `
            <div class="thdata"><div><spn class="compunit"><img class="sqimg" src="images/units/${calculatedStats.unitName}.png" alt=""/> </span></div>
            <div>${calculatedStats.rank}</div>
            <div>${calculatedStats.level}</div>
            <div>${calculatedStats.atk.toFixed(0)}</div>
            <div>${calculatedStats.hp.toFixed(0)}</div>
            <div>${calculatedStats.speed}</div></div>
        `;
        
        tableBody.appendChild(newRow);
        $('html, body').delay('100').animate({scrollTop: $("#tblc").offset().top  - 20  }, "slow");
    } else {
        console.error("Invalid stats, cannot add to comparison.");
    }
}
function clearComparison() {
    const tableBody = document.querySelector("#comparison-table .txbody");
    tableBody.innerHTML = ""; // Clears all rows in the comparison table
}


//=====rightclick-----------------------  
$(document).contextmenu(function() {
    return false;
});  