const fourModuleInput = (playerBoard, player, banSurroundings) => {
    do {
        var x = prompt(`${player} insert x coordinate (number) for 4 module ship:`)
        var y = prompt(`${player} insert y coordinate (number) for 4 module ship:`)
        x = parseInt(x)
        y = parseInt(y)
    }
    while (isNaN(x) === true || isNaN(y) === true
    || x > playerBoard.length - 1 || y > playerBoard.length - 1
    || x < playerBoard.length - 10 || y < playerBoard.length - 10 || playerBoard[y][x] === 0
        || playerBoard[y][x] === undefined)
    playerBoard[y][x] = 0
    console.clear()
    console.table(playerBoard)
    var firstModuleX = x
    var firstModuleY = y
    do {
        var x = prompt(`${player} insert x coordinate (number) for 4 module ship:`)
        var y = prompt(`${player} insert y coordinate (number) for 4 module ship:`)
        x = parseInt(x)
        y = parseInt(y)
    }
    while (isNaN(x) === true || isNaN(y) === true
    || x > playerBoard.length - 1 || y > playerBoard.length - 1
    || x < playerBoard.length - 10 || y < playerBoard.length - 10
    || playerBoard[y][x] === 0 || playerBoard[y][x] === undefined
    || x > firstModuleX + 1 || x < firstModuleX - 1 || y > firstModuleY + 1
    || y < firstModuleY - 1 || x !== firstModuleX && y !== firstModuleY)
    playerBoard[y][x] = 0
    console.clear()
    console.table(playerBoard)
    var secondModuleX = x
    var secondModuleY = y
    var maxValueY = (firstModuleY + secondModuleY + 3) / 2
    var minValueY = (firstModuleY + secondModuleY - 3) / 2
    var maxValueX = (firstModuleX + secondModuleX + 3) / 2
    var minValueX = (firstModuleX + secondModuleX - 3) / 2

    do {
        var x = prompt(`${player} insert x coordinate (number) for 4 module ship:`)
        var y = prompt(`${player} insert y coordinate (number) for 4 module ship:`)
        x = parseInt(x)
        y = parseInt(y)
        var xBool = firstModuleX === secondModuleX ? true : false
        var yBool = firstModuleY === secondModuleY ? true : false
    }
    while (isNaN(x) === true || isNaN(y) === true
    || x > playerBoard.length - 1 || y > playerBoard.length - 1
    || x < playerBoard.length - 10 || y < playerBoard.length - 10
    || playerBoard[y][x] === 0 || playerBoard[y][x] === undefined
    || x !== minValueX && x !== maxValueX && yBool === true
    || y !== minValueY && y !== maxValueY && xBool === true
    || xBool === true && x !== firstModuleX
        || yBool === true && y !== firstModuleY
    )
    playerBoard[y][x] = 0
    console.clear()
    console.table(playerBoard)

    var thirdModuleX = x
    var thirdModuleY = y
    var maxValueY = (firstModuleY + secondModuleY + thirdModuleY + 6) / 3
    var minValueY = (firstModuleY + secondModuleY + thirdModuleY - 6) / 3
    var maxValueX = (firstModuleX + secondModuleX + thirdModuleX + 6) / 3
    var minValueX = (firstModuleX + secondModuleX + thirdModuleX - 6) / 3

    do {
        var x = prompt(`${player} insert x coordinate (number) for 4 module ship:`)
        var y = prompt(`${player} insert y coordinate (number) for 4 module ship:`)
        x = parseInt(x)
        y = parseInt(y)
        var xBool = firstModuleX === secondModuleX ? true : false
        var yBool = firstModuleY === secondModuleY ? true : false
    }
    while (isNaN(x) === true || isNaN(y) === true
    || x > playerBoard.length - 1 || y > playerBoard.length - 1
    || x < playerBoard.length - 10 || y < playerBoard.length - 10
    || playerBoard[y][x] === 0 || playerBoard[y][x] === undefined
    || x !== minValueX && x !== maxValueX && yBool === true
    || y !== minValueY && y !== maxValueY && xBool === true
    || xBool === true && x !== firstModuleX
        || yBool === true && y !== firstModuleY
    )
    playerBoard[y][x] = 0
    banSurroundings(x, y, playerBoard)
    banSurroundings(firstModuleX, firstModuleY, playerBoard)
    banSurroundings(secondModuleX, secondModuleY, playerBoard)
    banSurroundings(thirdModuleX, thirdModuleY, playerBoard)
    console.clear()
    console.table(playerBoard)
}

export default fourModuleInput
