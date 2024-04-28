function getLang()
{
    return localStorage.getItem('lang') || 'ru';
}

export default getLang;
