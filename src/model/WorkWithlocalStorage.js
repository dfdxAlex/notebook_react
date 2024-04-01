import {initArray, saveDataInfo} from "./WorkDataArray.js";

// Расшифровка элементов массива
// -- непосредственно информация
// -- категория
// -- дата появления
// -- дата удаления
// -- признак удаления (удалена информация или нет)
// -- перспектива расширения
// -- перспектива расширения
function WorkWithlocalStorage(props)
{
    // инициализация массива с данными
    console.log(initArray());

    let info = '';            // Сама информация
    let category = '';        // Категория
    let dataSee = '';         // Дата для показа информации
    let dataDel = '';         // Дата для удаления информации
    let infoDelOrSee = true;  // True - информация не удалена
    let dataCircle = false;   // Информация появляется каждый день true-Да, 0-нет
    let dataReserv2 = '';     // данные для расширения

    if (props && props.info !== '' && props.info !== null && props.info!==undefined) 
        {
            info = props.info;
            if (props.category !== '') 
                category = props.category;
            if (props.dataSee !== '') 
                dataSee = props.dataSee;
            if (props.dataDel !== '') 
                dataDel = props.dataDel;
            if (props.infoDelOrSee !== true) 
                infoDelOrSee = false;
            if (props.dataCircle !== false) 
                dataCircle = true;
            if (props.dataReserv2 !== '') 
                dataReserv2 = props.dataReserv2;
            saveDataInfo([info,category,dataSee,dataDel,infoDelOrSee,dataCircle,dataReserv2]);
        }
        return null;
}


export default WorkWithlocalStorage;
