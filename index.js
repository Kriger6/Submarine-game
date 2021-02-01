"use strict";

import banSurroundings from '/banSurroundings.js'
import fourModuleInput from '/fourModuleInput.js'
import threeModuleInput from '/threeModuleInput.js'
import twoModuleInput from '/twoModuleInput.js'
import oneModuleInput from '/oneModuleInput.js'
import {twoModuleSpacing, threeModuleSpacing, secondInputSpacing} from '/spaceValidation.js';
import attack from './attack.js';




console.log("Welcome to the submarine game");
console.log("Type 'start()' to begin ");





// Starts the game
const start = () => {
  console.clear()
  const value = null
  const attackValue = "."
  var player1Board = [...Array(10)].map(e => Array(10).fill(value))
  var player2Board = [...Array(10)].map(e => Array(10).fill(value))
  var attackBoard1 = [...Array(10)].map(e => Array(10).fill(value))
  var attackBoard2 = [...Array(10)].map(e => Array(10).fill(value))
  const firstPlayer = "Player 1"
  const secondPlayer = "Player 2"
  var player1Score = 0
  var player2Score = 0
  console.table(player1Board);
  

  
  const input = (playerBoard, player) => {
    
    

    fourModuleInput(playerBoard, player, banSurroundings)
    threeModuleInput(playerBoard, player, banSurroundings, threeModuleSpacing, secondInputSpacing)
    twoModuleInput(playerBoard, player, banSurroundings, twoModuleSpacing)
    oneModuleInput(playerBoard, player, banSurroundings)

  }

  input(player1Board, firstPlayer)
  console.clear()
  console.table(player2Board)
  input(player2Board, secondPlayer)
  console.clear()
  

  console.table(attackBoard2)
  while (player1Score < 20 || player2Score < 20) {
    do {
      if (attack(firstPlayer, player2Board, attackBoard2) === true) {
        player1Score += 1
        var reAttack = true
        console.table(attackBoard2)
        if (player1Score === 20) {
          console.log("Congratulations! Player 1 won!");
          console.log("type start() to play again!")
          return
        }
      }
      else {
        var reAttack = false
        console.table(attackBoard2)
      }
    }
    while (reAttack === true)
    do {
      if (attack(secondPlayer, player1Board, attackBoard1) === true) {
        player2Score += 1
        var reAttack = true
        console.table(attackBoard1)
        if (player2Score === 20) {
          console.log("Congratulations! Player 2 won!");
          console.log("type start() to play again!")
          return
        }
      }
      else {
        var reAttack = false
        console.table(attackBoard1)
      }
    }
    while (reAttack === true)
  }
}

window.start = start

