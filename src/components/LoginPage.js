import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className='main-bg d-flex'>
        <div className='d-flex'>
            <div className='login-box mr-auto ml-auto mt-auto mb-auto text-center px-0 py-4 blur'>
                <h1 className='login-title m-0 mb-3 font-weight-bold motto'>Boilerplate</h1>
                <h6 className='motto font-italic'>tag gline</h6>
                <button className='btn btn-primary mt-2' onClick={startLogin}>Log In with Google</button>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
