import saveString from "../model/saveString.js";

function hundlerAddPosition(props)
{
    // состояния главного массива
    // приходит состояние из пропса с главного компонента
    let clonWorkArray = props.clonWorkArray;
    let setWorkArray = props.setWorkArray;

    // выбрать текстовое поле для чтения его содержимого
    // Информация добывается из состояния, которое отслеживает текстовое поле
    // const inputText = document.getElementById('input_text_add_string');
    const inputText = props.clonInputTextPozition;

    // имитация объекта-пропса, для функции saveString
    let newData = {
        info: inputText
    };

    // добавить новые данные в массив и вернуть 
    // новый массив в clonWorkArray
    clonWorkArray = saveString(newData);

    // изменить состояние массива
    setWorkArray([...clonWorkArray]);
}

export default hundlerAddPosition;

