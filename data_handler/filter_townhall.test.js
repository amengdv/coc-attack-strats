import { test, expect } from '@jest/globals'
import {
    filterTownhall
} from './filter.js'

test('filter townhall 5', () => {
    const d1 = [
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '5',
            Trophies: '1000'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '10',
            Trophies: '1000'
        },
        {
            Article: ['testis.com', 'testis'],
            Author: ['foo.com', 'baaa'],
            'Town Hall': '5',
            Trophies: '100'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '3',
            Trophies: '10000'
        },
    ]

    const t1 = filterTownhall(d1, 5)

    expect(t1).toStrictEqual(
        [
            {
                Article: ['test.com', 'test'],
                Author: ['foo.com', 'boo'],
                'Town Hall': '5',
                Trophies: '1000'
            },

            {
                Article: ['testis.com', 'testis'],
                Author: ['foo.com', 'baaa'],
                'Town Hall': '5',
                Trophies: '100'
            },

        ]
    )
});


test('filter th5 with all', () => {
    const d1 = [
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '5',
            Trophies: '1000'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': 'All',
            Trophies: '1000'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '10',
            Trophies: '10000'
        },
    ];

    const t1 = filterTownhall(d1, 5)

    expect(t1).toStrictEqual(
        [
            {
                Article: ['test.com', 'test'],
                Author: ['foo.com', 'boo'],
                'Town Hall': '5',
                Trophies: '1000'
            },
            {
                Article: ['test.com', 'test'],
                Author: ['foo.com', 'boo'],
                'Town Hall': 'All',
                Trophies: '1000'
            },
        ]
    )
});


test('filter th5 with all', () => {
    const d1 = [
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '5',
            Trophies: '1000'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '5-6',
            Trophies: '1000'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '3-5',
            Trophies: '10000'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '6-10',
            Trophies: '10000'
        },
    ];

    const t1 = filterTownhall(d1, 5)

    expect(t1).toStrictEqual(
        [

            {
                Article: ['test.com', 'test'],
                Author: ['foo.com', 'boo'],
                'Town Hall': '5',
                Trophies: '1000'
            },
            {
                Article: ['test.com', 'test'],
                Author: ['foo.com', 'boo'],
                'Town Hall': '5-6',
                Trophies: '1000'
            },
            {
                Article: ['test.com', 'test'],
                Author: ['foo.com', 'boo'],
                'Town Hall': '3-5',
                Trophies: '10000'
            },
        ]
    )
});
