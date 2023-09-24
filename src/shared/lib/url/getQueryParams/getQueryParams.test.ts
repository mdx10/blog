import { getQueryParams } from './getQueryParams';

describe('getQueryParams', () => {
    test('getQueryParams with empty params object', () => {
        const params = {};
        const result = getQueryParams(params);
        expect(result).toBe('?');
    });

    // Тест случай, когда params содержит одну пару ключ-значение
    test('getQueryParams with single key-value pair', () => {
        const params = {
            name: 'John',
        };
        const result = getQueryParams(params);
        expect(result).toBe('?name=John');
    });

    // Тест случай, когда params содержит несколько пар ключ-значение
    test('getQueryParams with multiple key-value pairs', () => {
        const params = {
            name: 'John',
            age: '25',
            city: 'NewYork',
        };
        const result = getQueryParams(params);
        expect(result).toBe('?name=John&age=25&city=NewYork');
    });

    // Тест случай, когда params содержит undefined значение
    test('getQueryParams with undefined value in params', () => {
        const params = {
            name: 'John',
            age: undefined,
            city: 'NewYork',
        };
        // @ts-ignore
        const result = getQueryParams(params);
        expect(result).toBe('?name=John&city=NewYork');
    });

    // Тест случай, когда params содержит специальные символы
    test('getQueryParams with special characters in params', () => {
        const params = {
            name: 'JohnSmith',
            age: '25',
            city: 'NewYork',
            query: 'test?param=value',
        };
        const result = getQueryParams(params);
        expect(result).toBe(
            '?name=JohnSmith&age=25&city=NewYork&query=test%3Fparam%3Dvalue',
        );
    });
});
