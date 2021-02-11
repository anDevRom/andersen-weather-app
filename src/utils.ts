export async function fetchData(url: string) {
    const response = await fetch(url)
    return await response.json()
}

export function transformQuery(query: string) {
    return query.split(' ').join('_')
}

export function addDays(days: number) {
    const date = new Date()
    const nowDate = date.getDate()

    date.setDate(nowDate + days)

    return date
}

export function upperFirstLetter(str: string) {
    const arr = str.split(' ')
    const result = arr.map(word => {
        const wordArr = word.split('')
        wordArr[0] = wordArr[0].toUpperCase()
        return wordArr.join('')
    })
    return result.join(' ')
}

export function timeValueTransform(value: string) {
    return Number(value) > 9 ? value : `0${value}`
}
