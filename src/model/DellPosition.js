import {workArray, saveDataInfo} from './WorkDataArray.js';

function DellPosition(id)
{
    workArray[id][4] = false;
    saveDataInfo(false);
}

export default DellPosition;
