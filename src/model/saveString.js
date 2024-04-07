import {saveDataInfo} from "./WorkDataArray.js";

function saveString(props)
{
    let info = '';            // Сама информация
    let category = '';        // Категория
    let dataSee = '';         // Дата для показа информации
    let dataDel = '';         // Дата для удаления информации
    let infoDelOrSee = true;  // True - информация не удалена
    let dataCircle = false;   // Информация появляется каждый день true-Да, 0-нет
    let dataReserv2 = '';     // данные для расширения

    let arrayReturn = saveDataInfo(false);

    if (props && props.info !== '' && props.info !== null && props.info!==undefined) 
        {
            info = props.info;
            if (props.category !== '') 
                category = props.category;
            if (props.dataSee !== '') 
                dataSee = props.dataSee;
            if (props.dataDel !== '') 
                dataDel = props.dataDel;
            if (props.infoDelOrSee !== false 
                && props.infoDelOrSee !== null 
                  && props.infoDelOrSee !== undefined) 
                infoDelOrSee = true;
            if (props.dataCircle !== false) 
                dataCircle = true;
            if (props.dataReserv2 !== '') 
                dataReserv2 = props.dataReserv2;

            arrayReturn = saveDataInfo([info,category,dataSee,dataDel,infoDelOrSee,dataCircle,dataReserv2]);
        }
        return arrayReturn;
}

export default saveString;
