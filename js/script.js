// Filterdropdown-------------------------------------- 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("showd");
}
$(".dropbtn").on('click', function() {
    $(this).toggleClass('is-active').next(".option-content").stop().slideToggle(500);
  });


// Filter-----------------------------------------
$('input[type="radio"], select#sort-tire').change(function() {
  filterNow();
});

function filterNow() {
  var list = $(".news-list .news-item");
  $(list).fadeOut("fast");

  var filtered = $(".news-list article");

  // Get selected values from radio buttons and select dropdown
  var rarity = $('input[name="rarity"]:checked').val();
  var faction = $('input[name="faction"]:checked').val();
 function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

var city = $('select#sort-tire').val();

// Escape the city value
var escapedCity = escapeRegExp(city);

filtered = filtered.filter(function() {
    const rarityMatch = rarity === '.' || $(this).attr("data-rarity") === rarity;
    const factionMatch = faction === '.' || $(this).attr("data-faction") === faction;
    const cityMatch = city === '.' || RegExp('^' + escapedCity + '$').test($(this).attr("data-tire"));
  
    return rarityMatch && factionMatch && cityMatch;
});
  

  if (filtered.length === 0) {
  } else {
    filtered.each(function(i) {
      $(this).delay(100).fadeIn("fast");
    });
  }
}


// Popup--------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item');
    const overlay = document.querySelector('.overlay');

    newsItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.add('active');
            overlay.classList.add('active');
        });

        const closeButton = item.querySelector('.close-btn');
        closeButton.addEventListener('click', function(e) {
            
            e.stopPropagation();
            
            item.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    
    overlay.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});


// Search--------------------------------------
document.getElementById('search-input').addEventListener('keyup', function() {
    var searchTerm = this.value.toLowerCase();
    var articles = document.querySelectorAll('.news-item');    
    var sectitle = document.querySelectorAll('.sectitle');
    
    
            $('.sectitle').css({"display": ""});

    articles.forEach(function(article) {
        var articleText = article.innerText.toLowerCase();
        if (articleText.includes(searchTerm)) {
            article.style.display = '';
            
        } else {
            article.style.display = 'none';            
            $('.sectitle').css({"display": "none"});
        }
    });
});

$('#search-input').on('input', function() {
    resetFilters();
  });

 function resetFilters() {
 
    $('input[name="rarity"][value="."]').prop('checked', true);
    $('input[name="faction"][value="."]').prop('checked', true);
     $('select#sort-tire').val('.');
  }
  
//=====rightclick-----------------------  
$(document).contextmenu(function() {
    return false;
});  




// TireColor-------------------------------------- 
$(document).ready(function() {
    // Initial setup
    setupTierText();

    // Event listener for the select box
    $('#gameModeSelect').change(function() {
        resetFilters();
        
        var articles = document.querySelectorAll('.news-item');  
        articles.forEach(function(article) {
        if (article.style.display) {
        article.style.display = '';
        }
        });
        var sectitles = document.querySelectorAll('.sectitle');  
        sectitles.forEach(function(sectitle) {
        if (sectitle.style.display) {
        sectitle.style.display = '';
        }
        });
        
        setupTierText(); 
    });
});

function setupTierText() {
    var selectedMode = $('#gameModeSelect').val(); // Get the selected game mode

    $('.news-item').each(function() {
        var tierText;
        
        // Set tierText based on the selected game mode
        if (selectedMode === 'arena') {
            tierText = $(this).find('.maintire').text().trim();
        } else if (selectedMode === 'adventure') {
            tierText = $(this).find('.modetier td:nth-child(2)').text().trim();
        } else if (selectedMode === 'ancient') {
            tierText = $(this).find('.modetier td:nth-child(3)').text().trim();
        }

        // Update the visual representation based on tierText
        colortheme($(this), tierText);
    });
}

function colortheme(newsItem, tierText) {
        var tireDiv = newsItem.find('.tire');

        if (tierText === 'S+') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#a152cb');
            newsItem.css('order', '1');
        } 
        else if (tierText === 'S') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#005392');
            newsItem.css('order', '2');
        } 
        else if (tierText === 'A+') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#65a8da');
            newsItem.css('order', '3');
        } 
        else if (tierText === 'A') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#65a8da');
            newsItem.css('order', '4');
        } 
        else if (tierText === 'B+') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#8cc382');
            newsItem.css('order', '5');
        } 
        else if (tierText === 'B') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#8cc382');
            newsItem.css('order', '6');
        } 
        else if (tierText === 'C+') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#f5c245');
            newsItem.css('order', '7');
        } 
        else if (tierText === 'C') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#f5c245');
            newsItem.css('order', '8');
        } 
        else if (tierText === 'D+') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#ff752b');
            newsItem.css('order', '9');
        } 
        else if (tierText === 'D') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#ff752b');
            newsItem.css('order', '10');
        } 
        else if (tierText === 'E+') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#e6233d');
            newsItem.css('order', '11');
        } 
        else if (tierText === 'E') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#e6233d');
            newsItem.css('order', '12');
        } 
        else if (tierText === 'F+') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#8c1425');
            newsItem.css('order', '13');
        }
        else if (tierText === 'F') {
            newsItem.attr('data-tire', tierText);
            tireDiv.text(tierText);
            tireDiv.css('background-color', '#8c1425');
            newsItem.css('order', '14');
        }
        else if (tierText === 'NEW') {
            newsItem.attr('data-tire', 'NEW');
            tireDiv.text('NEW');
            tireDiv.css('background-color', '#ff538e');
            newsItem.css('order', '15');
        }
   
}


/*$(document).ready(function() {
    $('.news-item').each(function() {
        var tierTextx = $(this).find('.modetier td:nth-child(3)').text().trim();
        var tireDiv = $(this).find('.tire');

        
            $(this).attr('data-tire', tierTextx);
            tireDiv.text(tierTextx);
            
            if (tierTextx === 'F') {
            $(this).css('order', '1');
            }
            
            if (tierTextx === 'E') {
            $(this).css('order', '10');
            }
        
    });
          
});*/
        
        
