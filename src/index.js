function chessBoard () {
    let board = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            board.push([i, j]);
        }
    }
    return board;
}

function findIndex(target, board) {
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === target[0] && board[i][1] === target[1]) return i;
    }
}

function buildObjArray (arrayBoard, startIndex) {
    let objArray = [];
    for (let i = 0; i < arrayBoard.length; i++) {
        objArray[i] = {
            distance: null,
            predecessor: null
        }
    }
    objArray[startIndex].distance = 0;
    return objArray;
}

function buildAdjacentList(array) {
    let adjacentList = [];
    for (let i = 0; i < array.length; i++) { // For loop for the board
        let neighbors = [];
        for (let j = 0; j < 8; j++) {
            let neighbor = findNextMove(j, array[i][0], array[i][1]); // Loops through every possible moves the knight can move in that specific square. Returns an array w/ 2 values.
            if (isWithinBoard(array, neighbor)) { // Tests if its within the boards range. 
                neighbors.push(findIndex(neighbor, array));
            } 
        }
        adjacentList[i] = neighbors;
    }
    return adjacentList;
}

function findNextMove (index, x, y) {
    if (index === 0) return [x+2, y+1]
    if (index === 1) return [x+2, y-1]
    if (index === 2) return [x-2, y+1]
    if (index === 3) return [x-2, y-1]
    if (index === 4) return [x+1, y+2]
    if (index === 5) return [x+1, y-2]
    if (index === 6) return [x-1, y+2]
    if (index === 7) return [x-1, y-2]
}

function isWithinBoard(array, target){
    if (array.find(element => element[0] === target[0]) && 
        array.find(element => element[1] === target[1])) 
        return true;
}


function knightsMove(start, end) {
    const board = chessBoard(); // returns array 8x8
    console.log(board)
    const startIndex = findIndex(start, board); // 0
    const endIndex = findIndex(end, board); // 17
    const buildArray = buildObjArray(board, startIndex);
    const adjacentList = buildAdjacentList(board);
    let queue = [startIndex];
    let current;
    
}

console.log(knightsMove([0,0], [2,1]))