function formatDate(date: Date) : string{
    const options:Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric'}
    return new Date(date).toLocaleDateString(undefined, options)
}

function capitalize(word: string) : string{
    if (word.length === 0){
        return word
    }
    return word.charAt(0).toUpperCase() + word.slice(1)
}
export {
    formatDate,
    capitalize
}