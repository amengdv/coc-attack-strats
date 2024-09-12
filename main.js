import { fetchHtml, getTableData } from './html_parser/parser.js'
import { filterTownhall, filterTroops, filterTrophy } from './data_handler/filter.js'
import { Command } from "commander";
import { printReport } from './data_handler/report.js';

async function main() {

    console.time('Process')

    const url = new URL('https://clashofclans.fandom.com/wiki/Clash_of_Clans_Wiki:Attack_Strategies')
    const baseUrl = `https://${url.hostname}`

    let body
    try {
        body = await fetchHtml(url.href)
    } catch(err) {
        console.log(err.message)
    }

    const data = getTableData(body)
    const program = new Command()

    program.name('Coc Attack Strategies')

    program
        .option('-th, --townhall <number>', 'Specify townhall level')
        .option('-tp, --trophies <number>', 'Specify trophies value')
        .option('-tr, --troops <string...>', 'A list of troops separated by space')
        .option('-d, --depth <number>', 'How much data to display', 5)
        .option('-p, --page <number>', 'Troop data page max=5', 1)

    program.parse(process.argv)

    const options = program.opts()

    let filteredData = data
    if (options.townhall) {
        filteredData = filterTownhall(filteredData, Number(options.townhall))
    }

    if (options.trophies) {
        filteredData = filterTrophy(filteredData, Number(options.trophies))
    }

    if (options.troops) {
        filteredData = await filterTroops(filteredData, options.troops, baseUrl, page)
    }

    printReport(filteredData, baseUrl, options.depth)

    console.timeEnd('Process')
}

await main()
