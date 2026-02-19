
const setDataToLocalStorage = (key: string, value: unknown[] = []): void => {
    localStorage.setItem(key, JSON.stringify(value))
}


const getDataFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key)
    if(data){
        return JSON.parse(data)
    }

    return []
}


export {
    setDataToLocalStorage,
    getDataFromLocalStorage
}
