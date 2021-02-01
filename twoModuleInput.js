const twoModuleInput = (playerBoard, player, banSurroundings, twoModuleSpacing) => {
    const moduleInput = () => {
        do {
            var x = prompt(`${player} insert x coordinate (number) for 2 module ship:`)
            var y = prompt(`${player} insert y coordinate (number) for 2 module ship:`)
            x = parseInt(x)
            y = parseInt(y)
        }
        while (isNaN(x) === true || isNaN(y) === true 
        || twoModuleSpacing(x, y, playerBoard) === false 
        || isNaN(x) === true || isNaN(y) === true || x > playerBoard.length - 1
        || y > playerBoard.length - 1 || x < playerBoard.length - 10 || y < playerBoard.length - 10
        || playerBoard[y][x] === 0 || playerBoard[y][x] === undefined )
        playerBoard[y][x] = 0
        console.clear()
        console.table(playerBoard)

        var firstModuleX = x
        var firstModuleY = y
        do {
            var x = prompt(`${player} insert x coordinate (number) for 2 module ship:`)
            var y = prompt(`${player} insert y coordinate (number) for 2 module ship:`)
            x = parseInt(x)
            y = parseInt(y)
        }
        while (isNaN(x) === true || isNaN(y) === true || x > playerBoard.length - 1
        || y > playerBoard.length - 1 || x < playerBoard.length - 10 || y < playerBoard.length - 10
        || playerBoard[y][x] === 0 || playerBoard[y][x] === undefined || x > firstModuleX + 1
        || x < firstModuleX - 1 || y > firstModuleY + 1 || y < firstModuleY - 1
            || x !== firstModuleX && y !== firstModuleY)
        playerBoard[y][x] = 0
        banSurroundings(x, y, playerBoard)
        playerBoard[firstModuleY][firstModuleX] = 0
        banSurroundings(firstModuleX, firstModuleY, playerBoard)
        console.clear()
        console.table(playerBoard)


    }


    moduleInput()
    moduleInput()
    moduleInput()
}

export default twoModuleInput