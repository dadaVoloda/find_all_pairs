export const shuffleArray = (arr: any[]) => {
    const shuffleArr = [...arr]
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const t = shuffleArr[i]
        shuffleArr[i] = shuffleArr[j]
        shuffleArr[j] = t
    }
    return shuffleArr
}