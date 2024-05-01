const translateArray = [
                            {
                                'lang' : 'ru'
                            },
                            //1
                            {'ru' : 'Сохранить',
                             'ua' : 'Зберегти',
                             'pl' : 'Zapisz',
                             'en' : 'Save'},
                            //2
                            {'ru' : 'Выйти',
                             'ua' : 'Вийти',
                             'pl' : 'Wyjdź',
                             'en' : 'Exit'},
                            //3
                            {'ru' : 'Английский',
                             'ua' : 'Англійська',
                             'pl' : 'Angielski',
                             'en' : 'English'},
                            //4
                            {'ru' : 'Польский',
                             'ua' : 'Польська',
                             'pl' : 'Polski',
                             'en' : 'Polish'},
                            //5
                            {'ru' : 'Украинский',
                             'ua' : 'Український',
                             'pl' : 'Ukraiński',
                             'en' : 'Ukrainian'},
                            //6
                            {'ru' : 'Русский',
                             'ua' : 'Російська',
                             'pl' : 'Rosyjski',
                             'en' : 'Russian'},
                            //7
                            {'ru' : 'Выбор языка',
                             'ua' : 'Вибір мови',
                             'pl' : 'Wybór języka',
                             'en' : 'Language selection'},
                            //8
                            {'ru' : 'Добавить',
                             'ua' : 'Додати',
                             'pl' : 'Dodać',
                             'en' : 'Add'},
                       ];

export {translateArray};

// Чтобы запустить функционал переводчика нужно подключить функцию:
// import getLang from '../controller/getLang.js';
// Нужна обёртка :
    // function translateHelp(el)
    // {
    //     return props.clonTranslateArray[el][getLang()];
    // }
// обёртка должна быть внутри компонента, в который приходит 
// через Пропс состояние clonTranslateArray = {clonTranslateArray}
