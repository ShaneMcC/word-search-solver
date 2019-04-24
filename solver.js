#!/usr/bin/env nodejs

const minSize = 5;
const wordList = '/usr/share/dict/words';
const inputFile = __dirname + '/input.txt';

const fs = require('fs');
const wordSearchSolver = require('word-search-solver');


const allWords = fs.readFileSync('/usr/share/dict/words').toString().split("\n");
const grid = fs.readFileSync(inputFile).toString().split("\n");

var wordsToFind = [];

for (a in allWords) {
  if (allWords[a].length >= minSize) {
    wordsToFind.push(allWords[a]);
  }
}

const solution = wordSearchSolver(grid, wordsToFind);

for (a in solution) {
  if (solution[a]['found']) {
    console.log(solution[a]['word']);
  }
}
