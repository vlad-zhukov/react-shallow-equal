import {propsEqual} from '../src/index';

describe('propsEqual(a, b, options)', () => {
    it('should compare plain objects', () => {
        expect(propsEqual({}, {})).toBeTruthy();

        expect(propsEqual({a: 'foo'}, {a: 'foo'})).toBeTruthy();
        expect(propsEqual({a: 'foo'}, {a: 'bar'})).toBeFalsy();
        expect(propsEqual({a: 'foo'}, {b: 'foo'})).toBeFalsy();

        expect(propsEqual({a: 'foo', b: 'bar'}, {a: 'foo', b: 'bar'})).toBeTruthy();
        expect(propsEqual({a: 'foo', b: 'bar'}, {a: 'foo', b: 'baz'})).toBeFalsy();
        expect(propsEqual({a: 'foo', b: 'bar'}, {a: 'foo', c: 'bar'})).toBeFalsy();
    });

    it('should compare arrays', () => {
        expect(propsEqual([], [])).toBeTruthy();

        expect(propsEqual(['foo'], ['foo'])).toBeTruthy();
        expect(propsEqual(['foo'], ['bar'])).toBeFalsy();

        expect(propsEqual(['foo', 'bar'], ['foo', 'bar'])).toBeTruthy();
        expect(propsEqual(['foo', 'bar'], ['foo', 'baz'])).toBeFalsy();
    });

    it('should ignore specified properties', () => {
        expect(propsEqual({a: 'foo', b: 'bar'}, {a: 'foo', b: 'baz'}, {ignore: ['b']})).toBeTruthy();
        expect(propsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}, {ignore: ['b']})).toBeTruthy();
    });
});
