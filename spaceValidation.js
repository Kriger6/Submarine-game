export const twoModuleSpacing = (x, y, player) => {
    if (y - 1 > -1) {
        if (player[y - 1][x] === null) {
            return true
        }
    }
    if (x + 1 < 10) {
        if (player[y][x + 1] === null) {
            return true
        }
    }
    if (y + 1 < 10) {
        if (player[y + 1][x] === null) {
            return true
        }
    }
    if (x - 1 > -1) {
        if (player[y][x - 1] === null) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}

export const threeModuleSpacing = (x, y, player) => {
    if (y - 2 > -1) {
        if (player[y - 2][x] === null) {
            return true
        }
    }
    if (x + 2 < 10) {
        if (player[y][x + 2] === null) {
            return true
        }
    }
    if (y + 2 < 10) {
        if (player[y + 2][x] === null) {
            return true
        }
    }
    if (x - 2 > -1) {
        if (player[y][x - 2] === null) {
            return true
        }
    }
    if (y - 1 > - 1 && y + 1 < 10) {
        if (player[y - 1][x] === null && player[y + 1][x] === null) {
            return true
        }
    }
    if (x - 1 > - 1 && x + 1 < 10) {
        if (player[y][x - 1] === null && player[y][x + 1] === null) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}

export const secondInputSpacing = (x, y, firstModuleX, firstModuleY, player) => {
    let thirdModuleP
    let thirdModuleN 
    if (firstModuleX === x) {
        thirdModuleP = (firstModuleY + y + 3) / 2
        thirdModuleN = (firstModuleY + y - 3) / 2
        if (thirdModuleP < 10) {
            if (player[thirdModuleP][x] === null) {
                return true
            }
        }
        if (thirdModuleN > -1) {
            if (player[thirdModuleN][x] === null) {
                return true
            }
        }
    }
    if (firstModuleY === y) {
        thirdModuleP = (firstModuleX + x + 3) / 2
        thirdModuleN = (firstModuleX + x - 3) / 2
        if (thirdModuleP < 10) {
            if (player[y][thirdModuleP] === null) {
                return true
            }
        }
        if (thirdModuleN > -1) {
            if (player[y][thirdModuleN] === null) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
    else {
        return false
    }
    

    

    
}