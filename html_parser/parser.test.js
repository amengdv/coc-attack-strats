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

test('test with real snippet', () => {
   const html = `<!DOCTYPE html>
<html lang="en">
<table>
<thead><tr>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Article
</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Author
</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Town Hall
</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Trophies
</th></tr></thead>
<tbody>
<tr style="background: linear-gradient(to top, Goldenrod, rgba(255,255,255,0) 8px), linear-gradient(to bottom, Goldenrod, rgba(255,255,255,0) 8px), linear-gradient(to left, Goldenrod, rgba(255,255,255,0) 8px), linear-gradient(to right, Goldenrod, rgba(255,255,255,0) 8px);">
<td style="text-align:left;padding:5px 10px;"><a href="/wiki/Attack_Strategies:Low_Level_Destruction" title="Attack Strategies:Low Level Destruction">Attack Strategies:Low Level Destruction</a>
</td>
<td style="padding:5px 10px;"><a href="/wiki/User:ChiefDrewClash" title="User:ChiefDrewClash">ChiefDrewClash</a>
</td>
<td style="padding:5px 10px;">5-7
</td>
<td style="padding:5px 10px;">800-1,200
</td></tr>
</tbody>
</table>
</html>
    `;

    expect(getTableData(html)).toStrictEqual(
        [
      {
        'Article': [
          '/wiki/Attack_Strategies:Low_Level_Destruction',
          'Attack Strategies:Low Level Destruction'
        ],
        'Author': [ '/wiki/User:ChiefDrewClash', 'ChiefDrewClash' ],
        'Town Hall': '5-7',
        'Trophies': '800-1,200'
      }
    ]

    )
});
