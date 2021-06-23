import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';


export const PrivateRoute = ({
    isAuthenticated,
    displayName,
    photoURL,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header displayName={displayName} photoURL={photoURL} />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to='/' />
        )
    )} />
);

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid,
        displayName: state.auth.displayName,
        photoURL: state.auth.photoURL
    }
};

export default connect(mapStateToProps)(PrivateRoute);