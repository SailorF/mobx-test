import sum from './func';

// test('测试sum', () => {
//     expect(sum(2,2)).toBe(4);
// })

describe('test', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
})