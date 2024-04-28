function getLang()
{
    return localStorage.getItem('lang') || 'pl';
}

export default getLang;
