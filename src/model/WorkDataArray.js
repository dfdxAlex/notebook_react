// Глобальный массив с данными записной книжки
// В массиве будет информация:
// -- (0)непосредственно информация
// -- (1)категория
// -- (2)дата появления
// -- (3)дата удаления
// -- (4)признак удаления (удалена информация или нет) True - информация не удалена
// -- (5)циклическое появление информации
// -- (6)перспектива расширения
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
//если передать false, то функция запишет в хранилище версию
//массива без добавления элементов.
function saveDataInfo(dataInfo)
{
    if (dataInfo) 
        workArray.push(dataInfo);

    const newData =  JSON.stringify(workArray);
    localStorage.setItem('DataForNoteBook',newData);
    return workArray;
}

export {workArray, initArray, saveDataInfo};
