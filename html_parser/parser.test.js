import { test, expect } from '@jest/globals'
import { getTableData } from './parser.js'

test('Get normal element inside td', () => {
    const html1 = `<!DOCTYPE html>
<html lang="en">
<body>
    <table border="1" cellpadding="5">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Alice</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Bob</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`;

    const t1 = getTableData(html1);
    const obj1 = {
        'ID': '1',
        'Name': 'Alice'
    };
    const obj2 = {
        'ID': '2',
        'Name': 'Bob'
    };
    expect(t1).toStrictEqual(
        [
            obj1,
            obj2
        ]
    );

});


test('Get anchor element inside td', () => {
    const html1 = `<!DOCTYPE html>
<html lang="en">
<body>
    <table id="anchorTest" border="1" cellpadding="5">
        <thead>
            <tr>
                <th>Video</th>
                <th>Creator</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <a href="#">v1</a>
                </td>
                <td>Mr beast</td>
            </tr>
            <tr>
                <td><a href="##">v2</a></td>
                <td>Mr amin</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`;

    const t1 = getTableData(html1);
    const obj1 = {
        'Video': ['#', 'v1'],
        'Creator': 'Mr beast' 
    };
    const obj2 = {
        'Video': ['##', 'v2'],
        'Creator': 'Mr amin' 
    };
    expect(t1).toStrictEqual(
        [
            obj1,
            obj2
        ]
    );

});


