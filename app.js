//Tabulations
const tabButtons = document.querySelectorAll('.tabContainer .buttonContainer button');
const tabPanels = document.querySelectorAll('.tabContainer .tabPanel');

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function(node) {
    node.style.backgroundColor="";
    node.style.color="";
  });
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color="black";
  
  tabPanels.forEach(function(node) {
    node.style.display="none";
  });
  tabPanels[panelIndex].style.display="block";
  tabPanels[panelIndex].style.backgroundColor=colorCode;
}

showPanel(0, 'antiquewhite');

//Menu
var main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"]
var techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"]
var sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"]
var seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"]

var random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
var random_technique = techniques[Math.floor(Math.random()*techniques.length)]
var random_side = sides[Math.floor(Math.random()*sides.length)]
var random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)]

var menu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`


const menuButton = document.getElementById('menu-random');
const menuDisplay = document.getElementById('menuDisplay');

menuPrint = menuButton.addEventListener('click', () => {
  menuDisplay.innerHTML = menu;
});


//popup
function onMouseOut(event) {
  // If the mouse is near the top of the window, show the popup
  // Also, do NOT trigger when hovering or clicking on selects
  if (
    event.clientY < 50 &&
    event.relatedTarget == null &&
    event.target.nodeName.toLowerCase() !== 'select') {
    // Remove this event listener
    document.removeEventListener("mouseout", onMouseOut);

    // Show the popup
    document.getElementById("popup").style.display = "block";
  }
}

document.addEventListener("mouseout", onMouseOut);