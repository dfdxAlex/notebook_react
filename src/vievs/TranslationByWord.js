import getLang from '../controller/getLang.js';

function TranslationByWord(props)
{
    for (let i=1; i<props.clonTranslateArray.length; i++) {
        if (props.clonTranslateArray[i]['ru'] === props.str) {
            return props.clonTranslateArray[i][getLang()];
        }
    }
    return null;
}

export default TranslationByWord;
