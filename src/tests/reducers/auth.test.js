import { expect, test } from '@jest/globals';
import authReducer from '../../reducers/auth';

test('Should set uid', () => {
    const actionObject = {type: 'LOGIN', uid: '007'}
    const state = authReducer({}, actionObject);
    expect(state.uid).toBe(actionObject.uid);
});

test('Should clear uid', () => {
    const state = authReducer(undefined, { type: 'LOGOUT' });
    expect(state.uid).toBeFalsy();
});