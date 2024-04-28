import hundlerDellPosition from '../controller/hundlerDellPosition.js';

import './css/OutputPoleBook.css';

// Расшифровка элементов массива
// -- непосредственно информация
// -- категория
// -- дата появления
// -- дата удаления
// -- признак удаления (удалена информация или нет) True - информация не удалена
// -- перспектива расширения
// -- перспектива расширения

function OutputPoleBook(props)
{
    let clonWorkArray = props.clonWorkArray;
    const setWorkArray = props.setWorkArray;

    return <div>
               <ul>
                   {clonWorkArray.map((item, index) => {
                    // item[4] проверяет считается ли запись удаленной
                      if (item[4]) {
                        return ( 
                               <div className="ul-div" 
                                    key={index}
                                >
                                   <div className="poleinfo-div--button">
                                       <button
                                           type="button"
                                           className='poleinfo--button'
                                           onClick={() => hundlerDellPosition(index, setWorkArray)}
                                       >
                                           X
                                       </button>
                                   </div>           
                                       <li className='poleinfo-li'>
                                            {item[0]}
                                       </li>
                               </div>
                               )
                        }
                        return null;
                   })}
               </ul>
           </div>;
}

export default OutputPoleBook;
