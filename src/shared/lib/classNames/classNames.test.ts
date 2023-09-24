import { classNames } from './classNames';

describe('classNames', () => {
    test('correct class no mods or additional classes are provided', () => {
        expect(classNames('foo')).toBe('foo');
    });

    test('correct class name with additional classes', () => {
        expect(classNames('foo', {}, ['bar', 'baz'])).toBe('foo bar baz');
    });

    test('correct class name with mods', () => {
        const mods: any = {
            'foo--active': true,
            'foo--hidden': false,
            'foo--large': 'yes',
            'foo--red': null,
            'foo--blue': undefined,
        };
        expect(classNames('foo', mods)).toBe('foo foo--active foo--large');
    });

    test('correct class name with mixed input', () => {
        const mods: any = {
            'foo--active': true,
            'foo--hidden': false,
            'foo--large': 'yes',
            'foo--red': null,
            'foo--blue': undefined,
        };
        expect(classNames('foo', mods, ['bar', 'baz'])).toBe(
            'foo bar baz foo--active foo--large',
        );
    });
});
