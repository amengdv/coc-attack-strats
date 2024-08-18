import { JSDOM } from 'jsdom'

function getTableData(htmlBody) {
    const dom = new JSDOM(htmlBody);

    const ths = dom.window.document.getElementsByTagName('th');
    const tds = dom.window.document.getElementsByTagName('td');

    // Get content inside th
    const thData = [];
    for (const th of ths) {
        thData.push(th.textContent);
    }

    // Get content inside td
    const tdData = [];
    for (const td of tds) {
        if (td.querySelector('a') !== null) {
            const anchorData = [];
            const anchorHref = td.querySelector('a').getAttribute('href');
            const anchorContent = td.querySelector('a').textContent;
            anchorData.push(anchorHref);
            anchorData.push(anchorContent.trim());
            tdData.push(anchorData);
        } else {
            tdData.push(td.textContent.trim());
        }
    }


    const tableDatas = []

    for (let i = 0; i < tdData.length; i += thData.length) {
        const tableData = {};
        for (let j = 0; j < thData.length; j++) {
            tableData[thData[j].trim()] = tdData[j + i];
        }
        tableDatas.push(tableData)
    }

    return tableDatas

}

export {
    getTableData
};
