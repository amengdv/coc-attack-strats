import { fetchHtml, getTableData } from './html_parser/parser.js'

async function main() {

    const url = 'https://clashofclans.fandom.com/wiki/Clash_of_Clans_Wiki:Attack_Strategies'

    let body
    try {
        body = await fetchHtml(url)
    } catch(err) {
        console.log(err.message)
    }

    console.log(getTableData(body))

}

main()
