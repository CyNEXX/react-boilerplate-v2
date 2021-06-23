import { expect, test } from '@jest/globals';
import { login, logout } from '../../actions/auth';

test('Should create login action object', () => {
    const uid = '007';
    const loginAction = login('007');
    expect(loginAction).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Should create logout action object', () => {
    const logoutAction = logout();
    expect(logoutAction).toEqual(
        { type: 'LOGOUT' }
    );
});