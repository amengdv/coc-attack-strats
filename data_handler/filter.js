import { fetchHtml, getContentWithDataType } from '../html_parser/parser.js'
import pLimit from 'p-limit'
const limit = pLimit(5)

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
        const trophyData = obj['Trophies'].replace(/,/g, '')
        if (trophyData === 'All') {
            filtered.push(obj)
        } else if (trophyData.includes('-')) {
            const ranges = trophyData.split('-')
            if (trophy >= Number(ranges[0]) && trophy <= Number(ranges[1])) {
                filtered.push(obj)
            }         
        } else if (trophyData.includes('+')) {
            const num = Number(trophyData.trim('+'))
            if (num <= trophy) {
                filtered.push(obj)
            }
        } else if (trophyData <= trophy) {
            filtered.push(obj)
        } else {
            continue
        }
        

    }
    return filtered
}


async function filterTroops(data, troops=[], baseUrl) {
    const filtered = []
    let troopsData = []

    console.log('Fetching HTML and extracting troops data...')
    console.time()
    try {
        troopsData = await Promise.all(
            data.slice(0, 25).map(obj => limit(async () => {
                const body = await fetchHtml( new URL(obj.Article[0], baseUrl) ) 
                return getContentWithDataType(body, "troop type", 'Spells')
            }))
        )

    } catch(err) {
        console.log(err.message)
    }
    console.timeEnd()
    console.log(`Done fetching HTML and extracting troops data`)


    console.log('Starting filtering')
    troopsData.forEach((troopData, index) => {
        const troopSet = new Set(troopData)
        const isSubset = troops.every(troop => {
            return troopSet.has(troop)
        })

        // console.log(troopSet)
        // console.log(isSubset)

        if (isSubset) {
            const dataObj = data[index]
            filtered.push(dataObj)
        }
    })

    return filtered
}

export {
    filterTownhall,
    filterTrophy,
    filterTroops
};
