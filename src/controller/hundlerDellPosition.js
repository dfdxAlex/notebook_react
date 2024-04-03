import {workArray, saveDataInfo} from '../model/WorkDataArray.js';

function hundlerDellPosition(id, setWorkArray)
{
    workArray[id][4] = false;
    saveDataInfo(false);

    setWorkArray([...workArray]);

    return null;
}

export default hundlerDellPosition;
