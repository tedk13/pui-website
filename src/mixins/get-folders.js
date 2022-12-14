export default function getFoldersArray(arr) {
    const folders = arr.map(item => {
        const url = item.url.split('/');
        return url.at(2)
    })
    return [... new Set(folders.sort())]
}