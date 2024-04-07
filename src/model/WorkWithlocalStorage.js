import saveString from "./saveString.js";
import OutputPoleBook from '../vievs/OutputPoleBook.js';

// Расшифровка элементов массива
// -- непосредственно информация
// -- категория
// -- дата появления
// -- дата удаления
// -- признак удаления (удалена информация или нет) True - информация не удалена
// -- перспектива расширения
// -- перспектива расширения
function WorkWithlocalStorage(props)
{

    // переменные состояния, проходят транзитом в OutputPoleBook
    let clonWorkArray = props.clonWorkArray;
    let setWorkArray = props.setWorkArray;

    saveString(props);

    return <OutputPoleBook 
               clonWorkArray={clonWorkArray}
               setWorkArray={setWorkArray}
           />
}


export default WorkWithlocalStorage;
