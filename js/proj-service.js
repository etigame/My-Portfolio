'use strict'
var gProjs

_createProjs()

function _createProjs() {
    var projs = [
        {id: 'minesweeper',
        name: 'Minesweeper',
        title: 'Try to find all the mines',
        desc: 'The classic game Minesweeper is single-player logic-based computer game played on rectangular board whose object is to locate a predetermined number of randomly-placed mines in the shortest possible time by clicking on "safe" squares while avoiding the squares with mines. If the player clicks on a mine, the game ends',
        url: 'https://etigame.github.io/Mine-Sweeper-updated/',
        publishedAt: Date.now(),
        labels: ['Matrixes', 'keymouse events'],
       },
       {id: 'booksShop',
        name: 'Books Shop',
        title: 'Manage your books shop successfully',
        desc: 'Books Shop where you can manage your books - create, read, update and delete.',
        url: 'https://etigame.github.io/Books-Shop/',
        publishedAt: Date.now(),
        labels: ['MVC', 'CRUDL'],
       },
       {id: 'todoApp',
        name: 'TODO App',
        title: 'Create. Plan. Organize.',
        desc: 'Productivity platform aimed at task and project management.',
        url: 'https://etigame.github.io/TODO-App/',
        publishedAt: Date.now(),
        labels: ['MVC', 'CRUDL'],
       },
       {id: 'ballBoard',
        name: 'Ball Board',
        title: 'Try to collect all the balls without falling to the holes',
        desc: 'The player tries to collect all the balls without falling to the holes. Falling a hole means to stay in place for 3 seconds',
        url: 'https://etigame.github.io/Ball-Board/',
        publishedAt: Date.now(),
        labels: ['keyboard events'],
       },
       {id: 'whatInPicture',
        name: 'What-In-Picture',
        title: 'Do you recognize those places?',
        desc: 'The player tries to recognize beautiful sites from around the world and marks the right answer',
        url: 'https://etigame.github.io/What-In-Picture-Game/',
        publishedAt: Date.now(),
        labels: ['keymouse events'],
       },
       {id: 'touchNums',
        name: 'Touch Nums',
        title: 'How fast can you touch all the nums?',
        desc: 'Touch the numbers as fast as you can. Choose level and start play.',
        url: 'https://etigame.github.io/Touch-Nums/',
        publishedAt: Date.now(),
        labels: ['keymouse events'],
       },
    ]
    
    gProjs = projs
}

function getProjs() {
    return gProjs
}