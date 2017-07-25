const {propsEqual, elementsEqual, stylesEqual} = require('../dist/react-shallow-equal.cjs');

describe('import-bundle-cjs', () => {
    it('should export properly', () => {
        expect(typeof propsEqual).toBe('function');
        expect(typeof elementsEqual).toBe('function');
        expect(typeof stylesEqual).toBe('function');
    });
});
