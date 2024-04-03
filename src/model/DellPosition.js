import {workArray, saveDataInfo} from './WorkDataArray.js';

function DellPosition(id, setWorkArray)
{
    workArray[id][4] = false;
    saveDataInfo(false);

    setWorkArray([...workArray]);

    return null;
}

export default DellPosition;
