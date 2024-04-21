import {workArray, saveDataInfo} from '../model/WorkDataArray.js';

// в функцию передается id поста, который нужно удалить и 
// функция изменяющая состояние
function hundlerDellPosition(id, setWorkArray)
{
    workArray[id][4] = false;
    saveDataInfo(false);

    setWorkArray([...workArray]);

    return null;
}

export default hundlerDellPosition;
