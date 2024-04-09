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
    return <OutputPoleBook 
               clonWorkArray={props.clonWorkArray}
               setWorkArray={props.setWorkArray}
           />
}

export default WorkWithlocalStorage;
