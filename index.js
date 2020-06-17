// Your code here
function mapToNegativize(arr) {
    const newArr = arr.map(e => e * -1)
    return newArr
}

// function mapToNegativize(src) {
//     let r = []
//     for (let i = 0; i < src.length; i++ ) {
//       r.push(-1 * src[i])
//     }
//     return r
// }

function mapToNoChange(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    return newArr;
}

function mapToDouble(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr;
}


function mapToSquare(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i])
    }
    return newArr;
}

function reduceToTotal(arr, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) return false
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i]) return true
    }
    return false
}