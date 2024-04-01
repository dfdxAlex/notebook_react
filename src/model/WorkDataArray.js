// Глобальный массив с данными записной книжки
// В массиве будет информация:
// -- непосредственно информация
// -- категория
// -- дата появления
// -- дата удаления
// -- признак удаления (удалена информация или нет)
// -- циклическое появление информации
// -- перспектива расширения
let workArray = [[],[],[],[],[],[],[]];

// Функция проверяет существует ли запись в хранилище об массиве с данными
// Если такой записи нет, то она создается из пустого глобального массива
// Если запись есть, то она читается и помещается в массив.
// Массив с данными может экспортироваться отдельно, а может быть
// получен из функции initArray()
function initArray()
{
    if (localStorage.getItem('DataForNoteBook') == null) {
        console.log('Нет хранилища данных');
        const newData =  JSON.stringify(workArray);
        localStorage.setItem('DataForNoteBook',newData)
    } else {
        const jsonArray = localStorage.getItem('DataForNoteBook');
        workArray = JSON.parse(jsonArray);
    }

    return workArray;
}

//функция записывает информацию в массив и в хранилище
function saveDataInfo(dataInfo)
{
    workArray.push(dataInfo);
    const newData =  JSON.stringify(workArray);
    localStorage.setItem('DataForNoteBook',newData)
}

export {workArray, initArray, saveDataInfo};
