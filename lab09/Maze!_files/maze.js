"use strict";

// CSE3026 : Web Application Development
// Lab 09 - Maze

var loser = null; // whether the user has hit a wall
var start = false;

window.onload = function() {
  $$("div#maze div.boundary").each(function(item) {
    item.observe("mouseover", overBoundary);
  });
  $("end").observe("mouseover", overEnd);
  $("start").observe("click", startClick);
};

// called when mouse enters the walls;
// signals the end of the game with a loss
function overBoundary(event) {
  if (start === true) {
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].addClassName("youlose");
    }
    $("status").innerHTML = "You lose !";
  }
}

// called when mouse is clicked on Start div;
// sets the maze back to its initial playable state
function startClick() {
  start = true;
  var boundaries = $$("div#maze div.boundary");
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].classList.remove("youlose");
  }
  $$("body")[0].observe("mouseover", overBody);
}

// called when mouse is on top of the End div.
// signals the end of the game with a win
function overEnd() {
  if (start === true) {
    $("status").innerHTML = "You win !";
  }
  start = false;
}

// test for mouse being over document.body so that the player
// can't cheat by going outside the maze
function overBody(event) {
  if (start === true && event.element() == document.body) {
    overBoundary(event);
  }
}
