function printReport(filteredData, baseUrl, depth) {
    if (depth >= 100) {
        depth = 100
    }
    let i = 0
    console.log('=========== REPORT ============')
    for (const obj of filteredData) {
        const articleLink = new URL(obj['Article'][0], baseUrl)
        const articleTitle = obj['Article'][1]
        const authorLink = new URL(obj['Author'][0], baseUrl)
        const authorName = obj['Author'][1]
        const th = obj['Town Hall']
        const trophies = obj['Trophies']

        console.log('\n')
        console.log('==============================')
        console.log(`${articleTitle}: ${articleLink.href}`)
        console.log(`${authorName}: ${authorLink.href}`)
        console.log(`Town Hall: ${th}`)
        console.log(`Trophies: ${trophies}`)
        console.log('==============================')

        i++
        if (i >= depth) {
            break
        }
    }
}

export {
    printReport
}
