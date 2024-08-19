import { test, expect } from '@jest/globals'
import { filterTrophy } from './filter.js'

test('filter trophy 1234', () => {
    const d1 = [
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '5',
            Trophies: '1,234'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '10',
            Trophies: '1,000'
        },
        {
            Article: ['testis.com', 'testis'],
            Author: ['foo.com', 'baaa'],
            'Town Hall': '5',
            Trophies: '2,000'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '3',
            Trophies: '10,000'
        },
    ];

    const t1 = filterTrophy(d1, 1234);

    expect(t1).toStrictEqual(
        [
            {
                Article: ['test.com', 'test'],
                Author: ['foo.com', 'boo'],
                'Town Hall': '5',
                Trophies: '1,234'
            },
            {
                Article: ['test.com', 'test'],
                Author: ['foo.com', 'boo'],
                'Town Hall': '10',
                Trophies: '1,000'
            },
        ]
    )
});


test('filter trophy 1234 with All', () => {
    const d1 = [
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '5',
            Trophies: '1,234'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '10',
            Trophies: '1,000'
        },
        {
            Article: ['testis.com', 'testis'],
            Author: ['foo.com', 'baaa'],
            'Town Hall': '5',
            Trophies: 'All'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '3',
            Trophies: '10,000'
        },
    ];

    const t1 = filterTrophy(d1, 1234);

    expect(t1).toStrictEqual(
        [
            {
                Article: ['test.com', 'test'],
                Author: ['foo.com', 'boo'],
                'Town Hall': '5',
                Trophies: '1,234'
            },
            {
                Article: ['test.com', 'test'],
                Author: ['foo.com', 'boo'],
                'Town Hall': '10',
                Trophies: '1,000'
            },

            {
                Article: ['testis.com', 'testis'],
                Author: ['foo.com', 'baaa'],
                'Town Hall': '5',
                Trophies: 'All'
            },
        ]
    )
});

test('filter trophy 1234 with ranges', () => {
    const d1 = [
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '5',
            Trophies: '1,234'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '10',
            Trophies: '1,000'
        },
        {
            Article: ['testis.com', 'testis'],
            Author: ['foo.com', 'baaa'],
            'Town Hall': '5',
            Trophies: '1,000-4,000'
        },
        {
            Article: ['test.com', 'test'],
            Author: ['foo.com', 'boo'],
            'Town Hall': '3',
            Trophies: '1,235-10,000'
        },
    ];

    const t1 = filterTrophy(d1,  1234);

    expect(t1).toStrictEqual(
        [
            {
                Article: ['test.com', 'test'],
                Author: ['foo.com', 'boo'],
                'Town Hall': '5',
                Trophies: '1,234'
            },
            {
                Article: ['test.com', 'test'],
                Author: ['foo.com', 'boo'],
                'Town Hall': '10',
                Trophies: '1,000'
            },
            {
                Article: ['testis.com', 'testis'],
                Author: ['foo.com', 'baaa'],
                'Town Hall': '5',
                Trophies: '1,000-4,000'
            },
        ]
    )
})
