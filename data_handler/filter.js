function filterTownhall(data, level) {
    const filtered = []
    for (const obj of data) {
        const townhallData = obj['Town Hall']
        if (townhallData === 'All') {
            filtered.push(obj)
        } else if (townhallData.includes('-')) {
            const ranges = townhallData.split('-')
            if (level >= Number(ranges[0]) && level <= Number(ranges[1])) {
                filtered.push(obj)
            }         
        } else if (townhallData == level) {
            filtered.push(obj)
        }

    }
    return filtered
}


function filterTrophy(data, trophy) {
    const filtered = []
    for (const obj of data) {
        const townhallData = obj['Trophies']
        if (townhallData === 'All') {
            filtered.push(obj)
        } else if (townhallData.includes('-')) {
            const ranges = townhallData.split('-')
            if (trophy >= ranges[0] && trophy <= ranges[1]) {
                filtered.push(obj)
            }         
        } else if (townhallData <= trophy) {
            filtered.push(obj)
        }

    }
    return filtered
}

function filterTroops(data) {
    console.log(data)
}

export {
    filterTownhall,
    filterTrophy,
    filterTroops
};
