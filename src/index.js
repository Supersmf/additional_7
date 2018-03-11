module.exports = function solveSudoku(matrix) {
    const PATERN = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let matrix_Vert = [];
    let res = [];

    function vert() {
        matrix.forEach(e => {
            e.forEach((s, f) => {
                if (!matrix_Vert[f]) matrix_Vert[f] = [];
                matrix_Vert[f].push(s);
            });
        });
    }

    matrix.forEach(arr => {
        arr = arr.map((value, index, arr) => {

            if (value === 0) {
                vert();

                value = PATERN.filter(num => !arr.includes(num));
                value = value.filter(num => !matrix_Vert[index].includes(num));
                
                arr[index] = value;
            }
        })
    })

    return matrix;
}


/*function solveSudoku(matrix) {
    const PATERN = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let matrix_Vert = [];
    let res = [];

    function vert() {
        matrix.forEach((e, i) => {
            e.forEach((s, f) => {
                if (!matrix_Vert[f]) matrix_Vert[f] = [];
                matrix_Vert[f].push(s);
            });
        });
    }

    // console.log(matrix_Vert)

    matrix.forEach(arr => {
        arr = arr.map((value, index, arr) => {
            if (value === 0) {
            	vert();
                // console.log(matrix_Vert[index], index)
                // console.log(value)
                // console.log('value', value)
                value = PATERN.filter(num => !arr.includes(num));
                console.log('value', value)
                let temp = value.filter(num => matrix_Vert[index].includes(num));
                console.log('filter', temp);

                value = value.filter(num => !matrix_Vert[index].includes(num));
                // matrix_Vert[index][]
                console.log('value fin', value)
                    // console.log(matrix_Vert)
                // arr[index] = value[0];
            }
        })
    })

    return matrix;

}


/*const initial = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const initial = [
    [6, 5, 0, 7, 3, 0, 0, 8, 0],
    [0, 0, 0, 4, 8, 0, 5, 3, 0],
    [8, 4, 0, 9, 2, 5, 0, 0, 0],
    [0, 9, 0, 8, 0, 0, 0, 0, 0],
    [5, 3, 0, 2, 0, 9, 6, 0, 0],
    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 0, 6],
    [0, 0, 7, 0, 0, 0, 0, 5, 0],
    [1, 6, 5, 3, 9, 0, 4, 7, 0]
];

let res = solveSudoku(initial);

console.log(res); */