import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function needleInHaystack(haystack: string, needle: string): number {
    if (haystack.indexOf(needle) >= 0) {
        return haystack.indexOf(needle);
    }

    return -1;
}

consoleStart();

validateFxn(needleInHaystack('test', 't'), 0);
validateFxn(needleInHaystack('leetcode', 'leeto'), -1);

consoleEnd();

export {};
