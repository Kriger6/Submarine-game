export default (x, y, playerBoard) => {
    if (y >= 0 && y < 10 && x >= 0 && x < 10) {
        playerBoard[y][x] = 0

    } else {
        return
    }
    if (y >= 1 && x >= 1 && y < 10 && x < 10 && playerBoard[y - 1][x - 1] !== 0) {
        playerBoard[y - 1][x - 1] = undefined
    }
    if (y >= 0 && x >= 0 && y <= 8 && x <= 8 && playerBoard[-(-y - 1)][-(-x - 1)] !== 0) {
        playerBoard[-(-y - 1)][-(-x - 1)] = undefined

    }
    if (y > 0 && playerBoard[y - 1][x] !== 0) {
        playerBoard[y - 1][x] = undefined
    }

    if (y > 0 && x < 9 && playerBoard[y - 1][-(-x - 1)] !== 0) {
        playerBoard[y - 1][-(-x - 1)] = undefined
    }

    if (x > 0 && playerBoard[y][x - 1] !== 0) {
        playerBoard[y][x - 1] = undefined
    }

    if (y < 9 && x > 0 && playerBoard[-(-y - 1)][x - 1] !== 0) {
        playerBoard[-(-y - 1)][x - 1] = undefined
    }

    if (x < 9 && playerBoard[y][-(-x - 1)] !== 0) {
        playerBoard[y][-(-x - 1)] = undefined
    }

    if (y < 9 && playerBoard[-(-y - 1)][x] !== 0) {
        playerBoard[-(-y - 1)][x] = undefined
    }
}

