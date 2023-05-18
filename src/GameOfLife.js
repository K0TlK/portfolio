import React, { useState, useEffect } from 'react';

const SIZE = 50;
const ALIVE = '[]';
const DEAD = '  ';

function GameOfLife() {
  const [grid, setGrid] = useState(createEmptyGrid());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGrid(oldGrid => nextGeneration(oldGrid));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="game-of-life">
      <pre>
        {grid.map(row => row.join('')).join('\n')}
      </pre>
      <p>_</p>
    </div>
  );
}

function createEmptyGrid() {
  let grid = [];
  for (let y = 0; y < SIZE; y++) {
    let row = [];
    for (let x = 0; x < SIZE; x++) {
      row.push(Math.random() < 0.5 ? ALIVE : DEAD);
    }
    grid.push(row);
  }
  return grid;
}

function nextGeneration(grid) {
  let newGrid = [];
  for (let y = 0; y < SIZE; y++) {
    let newRow = [];
    for (let x = 0; x < SIZE; x++) {
      newRow.push(getNewCellState(x, y, grid));
    }
    newGrid.push(newRow);
  }
  return newGrid;
}

function getNewCellState(x, y, grid) {
  let aliveNeighbours = 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dx === 0 && dy === 0) continue;
      if (grid[(y + dy + SIZE) % SIZE][(x + dx + SIZE) % SIZE] === ALIVE) {
        aliveNeighbours++;
      }
    }
  }

  if (grid[y][x] === ALIVE) {
    if (aliveNeighbours < 2 || aliveNeighbours > 3) {
      return DEAD;
    }
    return ALIVE;
  } else {
    if (aliveNeighbours === 3) {
      return ALIVE;
    }
    return DEAD;
  }
}

export default GameOfLife;
