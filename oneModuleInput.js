const oneModuleInput = (playerBoard, player, banSurroundings) => {
    const moduleInput = () => {
        do {
            var x = prompt(`${player} insert x coordinate (number) for 1 module ship:`)
            var y = prompt(`${player} insert y coordinate (number) for 1 module ship:`)
            x = parseInt(x)
            y = parseInt(y)
        }
        while (isNaN(x) === true || isNaN(y) === true || x > playerBoard.length - 1
        || y > playerBoard.length - 1 || x < playerBoard.length - 10 || y < playerBoard.length - 10
        || playerBoard[y][x] === 0 || playerBoard[y][x] === undefined)
        banSurroundings(x, y, playerBoard)
        console.clear()
        console.table(playerBoard)
    }


    moduleInput()
    moduleInput()
    moduleInput()
    moduleInput()
}

export default oneModuleInput