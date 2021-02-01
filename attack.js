const attack = (player, playerBoard, attackBoard) => {
    do {
        var x = prompt(`${player} insert x coordinate (number) to attack`)
        var y = prompt(`${player} insert y coordinate (number) to attack`)
        x = parseInt(x)
        y = parseInt(y)
    }
    while (isNaN(x) === true || isNaN(y) === true || x > playerBoard.length - 1
    || y > playerBoard.length - 1 || x < playerBoard.length - 10 || y < playerBoard.length - 10
    || attackBoard[y][x] === 'X' || attackBoard[y][x] === 'N')
    if(playerBoard[y][x] === 0) {
        attackBoard[y][x] = 'X'
        return true
    }
    else {
        attackBoard[y][x] = 'N'
        return false
    }

}

export default attack