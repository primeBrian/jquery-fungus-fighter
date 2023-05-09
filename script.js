$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

//created 2 variables for HP and AP
let enemyHP = 50;
let attackAP = 75;

//loaded the jquery
function onReady() {
    console.log('jQuery loaded');
     
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!

    // created buttons for the attacks
     $('.attack-btn, .arcane-scepter').on('click', arcaneScepter);
     $('.attck-btn, .entanangle').on('click', enTangle);
     $('.attack-btn, dragon-blade').on('click', dragonBlade);
     $('.attack-btn, .star-fire').on('click', starFire);
    
     
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

// created a list of functions for the buttons

function arcaneScepter(event) {
    $('#attack-btn').append('<div class="arcane-scepter"></div>');
   console.log('arcane-scepter');
}

function enTangle(event) {
    $('#attack-btn').append('<div class="entangle"></div>');
    console.log('entangle');
}
function dragonBlade(event) {
    $('#attack-btn').append('<div class="dragon-blade"></div>');
    console.log('dragon-blade');
}

function starFire(event) {
    $('#attack-btn').append('<div class="star-fire"></div>');
    console.log('star-fire');
}

//$('.btn, .btn-default, .btn-sm')