function findNeighbors(node, matrix) {
    let neighborsArray = [];
    let x = node[0];
    let y = node[1];
    let numRows = matrix.length;
    let numCols = matrix[0].length;

    // Up
    // [x - 1, y]
    if (x - 1 >= 0) {
        let upNode = [x - 1, y];
        neighborsArray.push(upNode);
    }

    // Down
    // [x + 1, y]
    if (x + 1 <= numRows - 1) {
        let downNode = [x + 1, y];
        neighborsArray.push(downNode);
    }

    // Right
    // [x, y + 1]
    if (y + 1 <= numCols - 1) {
        let rightNode = [x, y + 1];
        neighborsArray.push(rightNode);
    }

    // Left
    // [x, y - 1]
    if (y - 1 >= 0) {
        let leftNode = [x, y - 1];
        neighborsArray.push(leftNode);
    }
    
    return neighborsArray;
}


function bfsPath(matrix, startNode, endValue) {
    // Create a queue and enqueue the starting node
    let queue = [startNode];

    // Create a set to store visited nodes
    let visited = new Set();

    // create node array of coordinate traversal
    let coordinateTravArray = [];

    // While the queue is not empty, repeat steps 4-6
    while (queue.length > 0) {
        // Dequeue the first node and check if it's been visited
        let currentNode = queue.shift();
        // create string version of array location for comparison purposes
        let currentNodeString = currentNode.toString();

        if (!visited.has(currentNodeString)) {
            // If not, mark it as visited and DO THE THING
            visited.add(currentNodeString);

            // add visited node to output array
            coordinateTravArray.push(currentNode);
            // if currentNode val is endValue, return
            let row = currentNode[0];
            let column = currentNode[1];
            if (matrix[row][column] === endValue) {
                return coordinateTravArray;
            }

            // Put all its neighbors in the back of the queue
            let neighbors = findNeighbors(currentNode, matrix);
            queue.push(...neighbors);
        }
    }
    return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [ 
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

// EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// internal node (left, right, down, up)
// [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// const matrix1 = [ 
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes 
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value 
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];