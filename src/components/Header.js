import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Header = ({ startLogout, displayName, photoURL }) => {
    return (
        <div className='bg-dark text-light'>
            <div className='content-container d-flex justify-content-between py-2 px-3'>
                <Link className='font-weight-bold text-light h2 mb-0' to="/dashboard">boilerplate</Link>
                <div className="justify-content-end text-light">
                    <span>Signed in as: </span><span className='font-weight-bold'>{displayName}</span>
                    <img className='profile_pic mx-3' src={photoURL} alt='Profile picture'></img>
                    <Button type='button' id='signout' className='btn btn-dark btn-outline-light' onClick={startLogout}>Sign Out</Button>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});


export default connect(undefined, mapDispatchToProps)(Header);