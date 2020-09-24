const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function countLetter(str, letter){
    let res = 0;
    for ( let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            res++;
        }
    }
    return res;
}

function getRow(firstRow, secondRow) {

    let a = countLetter(firstRow, 'а'),
        b = countLetter(secondRow, 'а');

    if (a > b) {
        return firstRow;
    } else if (a == b) {
        return "Количество символов в строках одинаковое";
    } else {
        return secondRow;
    }
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму
