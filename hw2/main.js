const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let a = '',
        b = '';

    for (let i = 0; i < firstRow.length; i++) {
        console.log(firstRow.charAt(i));
        let counter = 0;
        if (a == 'a') {
            counter++;
        }
        console.log(a);
        console.log(counter);
    }
    if (a > b) {
        return firstRow;
    } else if (a == b) {
        return "Количество символов в строках одинаковое";
    } else {
        return secondRow;
    }
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму