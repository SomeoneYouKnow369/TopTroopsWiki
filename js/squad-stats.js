// Squad data and Rank Coefficients JSON
const squadData = [
    {
        "Name": "Abomination",
        "Rarity": "Epic",
        "Archetype": "Frontline",
        "Base ATK": "9",
        "Attack Speed": "2.00",
        "Base HP": "306",
        "Passive": "N/A"
    },
    {
        "Name": "Amethyst Aegis",
        "Rarity": "Legendary",
        "Archetype": "Frontline",
        "Base ATK": "13",
        "Attack Speed": "2.50",
        "Base HP": "360",
        "Passive": {
            "DEF": [
                16,
                18,
                20,
                25,
                30
            ]
        }
    },
    {
        "Name": "Arcane Hunter",
        "Rarity": "Epic",
        "Archetype": "Ranged",
        "Base ATK": "9",
        "Attack Speed": "2.55",
        "Base HP": "102",
        "Passive": "N/A"
    },
    {
        "Name": "Archangel",
        "Rarity": "Legendary",
        "Archetype": "Support",
        "Base ATK": "18",
        "Attack Speed": "2.50",
        "Base HP": "170",
        "Passive": "N/A"
    },
    {
        "Name": "Armored Troll",
        "Rarity": "Legendary",
        "Archetype": "Frontline",
        "Base ATK": "13",
        "Attack Speed": "2.50",
        "Base HP": "360",
        "Passive": {
            "HP": [
                8,
                10,
                12,
                18,
                25
            ]
        }
    },
    {
        "Name": "Battle Drummer",
        "Rarity": "Legendary",
        "Archetype": "Support",
        "Base ATK": "18",
        "Attack Speed": "2.50",
        "Base HP": "170",
        "Passive": {
            "ATK Speed": [
                2,
                5,
                10,
                15,
                20
            ]
        }
    },
    {
        "Name": "Beekeeper",
        "Rarity": "Legendary",
        "Archetype": "Mage",
        "Base ATK": "20",
        "Attack Speed": "1.50",
        "Base HP": "70",
        "Passive": "N/A"
    },
    {
        "Name": "Berserker",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "30",
        "Attack Speed": "2.50",
        "Base HP": "200",
        "Passive": "N/A"
    },
    {
        "Name": "Blazing Champion",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "18",
        "Attack Speed": "1.50",
        "Base HP": "200",
        "Passive": "N/A"
    },
    {
        "Name": "Bloodlust Bullet",
        "Rarity": "Legendary",
        "Archetype": "Ranged",
        "Base ATK": "10",
        "Attack Speed": "1.00",
        "Base HP": "120",
        "Passive": "N/A"
    },
    {
        "Name": "Boomerang Mercenary",
        "Rarity": "Legendary",
        "Archetype": "Ranged",
        "Base ATK": "12",
        "Attack Speed": "2.00",
        "Base HP": "120",
        "Passive": "N/A"
    },
    {
        "Name": "Catapult",
        "Rarity": "Epic",
        "Archetype": "Ranged",
        "Base ATK": "15",
        "Attack Speed": "3.00",
        "Base HP": "102",
        "Passive": "N/A"
    },
    {
        "Name": "Cleric",
        "Rarity": "Epic",
        "Archetype": "Support",
        "Base ATK": "6",
        "Attack Speed": "1.00",
        "Base HP": "145",
        "Passive": "N/A"
    },
    {
        "Name": "Conductor",
        "Rarity": "Epic",
        "Archetype": "Mage",
        "Base ATK": "8",
        "Attack Speed": "2.00",
        "Base HP": "60",
        "Passive": "N/A"
    },
    {
        "Name": "Crabomancer",
        "Rarity": "Epic",
        "Archetype": "Melee",
        "Base ATK": "20",
        "Attack Speed": "2.00",
        "Base HP": "170",
        "Passive": "N/A"
    },
    {
        "Name": "Dakini",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "18",
        "Attack Speed": "1.50",
        "Base HP": "280",
        "Passive": "N/A"
    },
    {
        "Name": "Demi Angel",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "30",
        "Attack Speed": "2.50",
        "Base HP": "280",
        "Passive": {
            "Crit Chance": [
                15,
                17,
                20,
                22,
                25
            ]
        }
    },
    {
        "Name": "Dwarf Engineer",
        "Rarity": "Legendary",
        "Archetype": "Mage",
        "Base ATK": "27",
        "Attack Speed": "3.00",
        "Base HP": "70",
        "Passive": "N/A"
    },
    {
        "Name": "Eira",
        "Rarity": "Legendary",
        "Archetype": "Assassin",
        "Base ATK": "27",
        "Attack Speed": "1.50",
        "Base HP": "280",
        "Passive": "N/A"
    },
    {
        "Name": "El Bandolero",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "18",
        "Attack Speed": "1.50",
        "Base HP": "200",
        "Passive": "N/A"
    },
    {
        "Name": "Elemental Witch",
        "Rarity": "Legendary",
        "Archetype": "Mage",
        "Base ATK": "30",
        "Attack Speed": "3.00",
        "Base HP": "70",
        "Passive": "N/A"
    },
    {
        "Name": "Ember Elemental",
        "Rarity": "Legendary",
        "Archetype": "Mage",
        "Base ATK": "9",
        "Attack Speed": "1.00",
        "Base HP": "70",
        "Passive": "N/A"
    },
    {
        "Name": "Explorabbit",
        "Rarity": "Legendary",
        "Archetype": "Assassin",
        "Base ATK": "27",
        "Attack Speed": "1.50",
        "Base HP": "110",
        "Passive": {
            "Crit Chance": [
                30,
                40,
                50,
                60,
                75
            ]
        }
    },
    {
        "Name": "Fire Slasher",
        "Rarity": "Legendary",
        "Archetype": "Mage",
        "Base ATK": "15",
        "Attack Speed": "2.50",
        "Base HP": "120",
        "Passive": "N/A"
    },
    {
        "Name": "Frozen Heart",
        "Rarity": "Legendary",
        "Archetype": "Mage",
        "Base ATK": "9",
        "Attack Speed": "1.00",
        "Base HP": "70",
        "Passive": "N/A"
    },
    {
        "Name": "Girtablilu",
        "Rarity": "Legendary",
        "Archetype": "Ranged",
        "Base ATK": "3",
        "Attack Speed": "1.00",
        "Base HP": "120",
        "Passive": {
            "Crit Chance": [
                20,
                30,
                40,
                50,
                60
            ],
            "Crit Damage": [
                25,
                50,
                100,
                125,
                150
            ]
        }
    },
    {
        "Name": "Golem",
        "Rarity": "Epic",
        "Archetype": "Frontline",
        "Base ATK": "9",
        "Attack Speed": "2.00",
        "Base HP": "306",
        "Passive": {
            "DEF": [
                4,
                8,
                12,
                16,
                20
            ]
        }
    },
    {
        "Name": "Herbalist",
        "Rarity": "Legendary",
        "Archetype": "Support",
        "Base ATK": "18",
        "Attack Speed": "2.50",
        "Base HP": "170",
        "Passive": {
            "DEF": [
                16,
                18,
                20,
                25,
                30
            ]
        }
    },
    {
        "Name": "Hermes",
        "Rarity": "Legendary",
        "Archetype": "Assassin",
        "Base ATK": "18",
        "Attack Speed": "1.00",
        "Base HP": "706",
        "Passive": "N/A"
    },
    {
        "Name": "Holy Protector",
        "Rarity": "Legendary",
        "Archetype": "Frontline",
        "Base ATK": "8",
        "Attack Speed": "1.50",
        "Base HP": "504",
        "Passive": "N/A"
    },
    {
        "Name": "Imperial Elf",
        "Rarity": "Legendary",
        "Archetype": "Ranged",
        "Base ATK": "6",
        "Attack Speed": "1.00",
        "Base HP": "168",
        "Passive": {
            "Crit Chance": [
                5,
                10,
                15,
                20,
                25
            ]
        }
    },
    {
        "Name": "Inferno Shredder",
        "Rarity": "Legendary",
        "Archetype": "Support",
        "Base ATK": "21",
        "Attack Speed": "3.00",
        "Base HP": "170",
        "Passive": "N/A"
    },
    {
        "Name": "Juggernaut",
        "Rarity": "Legendary",
        "Archetype": "Frontline",
        "Base ATK": "13",
        "Attack Speed": "2.50",
        "Base HP": "360",
        "Passive": "N/A"
    },
    {
        "Name": "Leshy",
        "Rarity": "Legendary",
        "Archetype": "Mage",
        "Base ATK": "14",
        "Attack Speed": "1.50",
        "Base HP": "98",
        "Passive": {
            "ATK": [
                10,
                20,
                30,
                40,
                50
            ]
        }
    },
    {
        "Name": "Merman",
        "Rarity": "Epic",
        "Archetype": "Melee",
        "Base ATK": "15",
        "Attack Speed": "1.50",
        "Base HP": "170",
        "Passive": "N/A"
    },
    {
        "Name": "Mushroom Shield",
        "Rarity": "Epic",
        "Archetype": "Frontline",
        "Base ATK": "9",
        "Attack Speed": "2.00",
        "Base HP": "306",
        "Passive": "N/A"
    },
    {
        "Name": "Necromancer Rat",
        "Rarity": "Epic",
        "Archetype": "Mage",
        "Base ATK": "15",
        "Attack Speed": "1.70",
        "Base HP": "60",
        "Passive": "N/A"
    },
    {
        "Name": "Ninja Mole",
        "Rarity": "Epic",
        "Archetype": "Assassin",
        "Base ATK": "15",
        "Attack Speed": "1.00",
        "Base HP": "131",
        "Passive": "N/A"
    },
    {
        "Name": "Oni Warrior",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "24",
        "Attack Speed": "2.00",
        "Base HP": "200",
        "Passive": {
            "ATK": [
                10,
                20,
                30,
                40,
                50
            ]
        }
    },
    {
        "Name": "Ose",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "24",
        "Attack Speed": "2.00",
        "Base HP": "280",
        "Passive": "N/A"
    },
    {
        "Name": "Pyromaniac",
        "Rarity": "Epic",
        "Archetype": "Mage",
        "Base ATK": "8",
        "Attack Speed": "1.00",
        "Base HP": "83",
        "Passive": "N/A"
    },
    {
        "Name": "Rainbow Chariot",
        "Rarity": "Legendary",
        "Archetype": "Ranged",
        "Base ATK": "15",
        "Attack Speed": "2.50",
        "Base HP": "120",
        "Passive": {
            "Crit Chance": [
                35,
                35,
                35,
                35,
                35
            ],
            "Crit Damage": [
                80,
                100,
                125,
                150,
                200
            ]
        }
    },
    {
        "Name": "Royal Guard",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "18",
        "Attack Speed": "1.50",
        "Base HP": "200",
        "Passive": {
            "Crit Chance": [
                5,
                10,
                15,
                20,
                25
            ]
        }
    },
    {
        "Name": "Samurai",
        "Rarity": "Legendary",
        "Archetype": "Assassin",
        "Base ATK": "18",
        "Attack Speed": "1.00",
        "Base HP": "110",
        "Passive": "N/A"
    },
    {
        "Name": "Sekhmet",
        "Rarity": "Legendary",
        "Archetype": "Support",
        "Base ATK": "0",
        "Attack Speed": "2.00",
        "Base HP": "170",
        "Passive": "N/A"
    },
    {
        "Name": "Sharpshooter",
        "Rarity": "Legendary",
        "Archetype": "Ranged",
        "Base ATK": "15",
        "Attack Speed": "2.50",
        "Base HP": "120",
        "Passive": {
            "Crit Chance": [
                7,
                7.5,
                8,
                9,
                10
            ]
        }
    },
    {
        "Name": "Slime King",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "24",
        "Attack Speed": "2.00",
        "Base HP": "200",
        "Passive": "N/A"
    },
    {
        "Name": "Spirited Tiger",
        "Rarity": "Legendary",
        "Archetype": "Frontline",
        "Base ATK": "13",
        "Attack Speed": "2.50",
        "Base HP": "360",
        "Passive": {
            "DEF": [
                16,
                18,
                20,
                25,
                30
            ]
        }
    },
    {
        "Name": "Stone Hermit",
        "Rarity": "Legendary",
        "Archetype": "Support",
        "Base ATK": "14",
        "Attack Speed": "2.00",
        "Base HP": "170",
        "Passive": "N/A"
    },
    {
        "Name": "Storm",
        "Rarity": "Legendary",
        "Archetype": "Mage",
        "Base ATK": "9",
        "Attack Speed": "1.00",
        "Base HP": "70",
        "Passive": "N/A"
    },
    {
        "Name": "Swash Buckler",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "20",
        "Attack Speed": "2.00",
        "Base HP": "200",
        "Passive": {
            "HP": [
                4,
                8,
                12,
                16,
                20
            ],
            "ATK": [
                10,
                20,
                30,
                40,
                50
            ]
        }
    },
    {
        "Name": "Sylvan Spirit",
        "Rarity": "Legendary",
        "Archetype": "Support",
        "Base ATK": "11",
        "Attack Speed": "1.50",
        "Base HP": "170",
        "Passive": "N/A"
    },
    {
        "Name": "The King",
        "Rarity": "Legendary",
        "Archetype": "Support",
        "Base ATK": "14",
        "Attack Speed": "2.00",
        "Base HP": "170",
        "Passive": {
            "DEF": [
                10,
                12,
                15,
                18,
                20
            ]
        }
    },
    {
        "Name": "Thor",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "36",
        "Attack Speed": "3.00",
        "Base HP": "200",
        "Passive": {
            "HP": [
                4,
                8,
                10,
                16,
                20
            ]
        }
    },
    {
        "Name": "Thundershot",
        "Rarity": "Legendary",
        "Archetype": "Ranged",
        "Base ATK": "9",
        "Attack Speed": "1.50",
        "Base HP": "120",
        "Passive": "N/A"
    },
    {
        "Name": "Toad Druid",
        "Rarity": "Legendary",
        "Archetype": "Assassin",
        "Base ATK": "27",
        "Attack Speed": "1.50",
        "Base HP": "110",
        "Passive": "N/A"
    },
    {
        "Name": "Trickster",
        "Rarity": "Legendary",
        "Archetype": "Assassin",
        "Base ATK": "18",
        "Attack Speed": "1.00",
        "Base HP": "110",
        "Passive": {
            "DEF": [
                16,
                18,
                20,
                25,
                30
            ]
        }
    },
    {
        "Name": "Valkyre",
        "Rarity": "Epic",
        "Archetype": "Melee",
        "Base ATK": "15",
        "Attack Speed": "1.50",
        "Base HP": "238",
        "Passive": "N/A"
    },
    {
        "Name": "Vampire Queen",
        "Rarity": "Legendary",
        "Archetype": "Assassin",
        "Base ATK": "18",
        "Attack Speed": "1.00",
        "Base HP": "110",
        "Passive": "N/A"
    },
    {
        "Name": "Verleaf",
        "Rarity": "Epic",
        "Archetype": "Support",
        "Base ATK": "9",
        "Attack Speed": "2.50",
        "Base HP": "145",
        "Passive": {
            "DEF": [
                4,
                8,
                12,
                16,
                20
            ]
        }
    },
    {
        "Name": "Warrior Carriage",
        "Rarity": "Epic",
        "Archetype": "Assassin",
        "Base ATK": "10",
        "Attack Speed": "99.00",
        "Base HP": "94",
        "Passive": "N/A"
    },
    {
        "Name": "Water Maiden",
        "Rarity": "Legendary",
        "Archetype": "Support",
        "Base ATK": "18",
        "Attack Speed": "2.50",
        "Base HP": "170",
        "Passive": "N/A"
    },
    {
        "Name": "Wave Warrior Drenthest",
        "Rarity": "Legendary",
        "Archetype": "Mage",
        "Base ATK": "18",
        "Attack Speed": "2.00",
        "Base HP": "70",
        "Passive": "N/A"
    },
    {
        "Name": "Werewolf",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "20",
        "Attack Speed": "1.00",
        "Base HP": "200",
        "Passive": "N/A"
    },
    {
        "Name": "Ymir",
        "Rarity": "Legendary",
        "Archetype": "Melee",
        "Base ATK": "18",
        "Attack Speed": "1.50",
        "Base HP": "200",
        "Passive": "N/A"
    }
];

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
        const rankCoefficient = rankData[rarity];

        const levelMultiplier = calculateLevelMultiplier(level);

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
            <div class="statstxt"><p><img class="iconsq" src="images/attack.png" alt=""/> Attack: ${finalAtk.toFixed(0)}</p>
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
            <div class="thdata"><div><spn class="compunit">${calculatedStats.unitName}</span></div>
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