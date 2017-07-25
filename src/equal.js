import stylesEqual from 'style-equal';
import {type} from './helpers';

export function elementsEqual(a, b) {
    const typeOfA = type(a);

    if (typeOfA !== type(b)) return false;

    switch (typeOfA) {
        case 'array':
            if (a.length !== b.length) return false;
            for (let i = 0; i < a.length; i++) {
                if (!elementsEqual(a[i], b[i])) return false;
            }
            return true;
        case 'object':
            if (a.type !== b.type) return false;
            if (a.key !== b.key) return false;
            if (a.ref !== b.ref) return false;
            return propsEqual(a.props, b.props); // eslint-disable-line no-use-before-define
        default:
            return a === b;
    }
}

export function propsEqual(a, b, options = {ignore: []}) {
    const aKeys = Object.keys(a);
    let aCount = 0;
    let bCount = 0;

    for (let key = 0, l = aKeys.length; key < l; key++) {
        if (options.ignore.indexOf(key) === -1) {
            if (key === 'style') {
                // NOTE: kind of risky, but i'm assuming that a `style` prop is a React Native style,
                // and using the `styleEqual` algorithm here.
                if (!stylesEqual(a[key], b[key])) return false;
            }
            else if (key === 'children') {
                // will compare children later
            }
            else if (a[key] !== b[key]) return false;
            aCount += 1;
        }
    }

    const bKeys = Object.keys(b);

    for (let key = 0, l = bKeys.length; key < l; key++) {
        if (options.ignore.indexOf(key) === -1) {
            bCount += 1;
        }
    }

    if (aCount !== bCount) return false;

    // compare children last...
    return elementsEqual(a.children, b.children);
}
