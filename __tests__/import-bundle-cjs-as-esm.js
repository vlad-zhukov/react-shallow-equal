import {propsEqual, elementsEqual, stylesEqual} from '../dist/react-shallow-equal.cjs';

describe('import-bundle-cjs-as-esm', () => {
    it('should export properly', () => {
        expect(typeof propsEqual).toBe('function');
        expect(typeof elementsEqual).toBe('function');
        expect(typeof stylesEqual).toBe('function');
    });
});
