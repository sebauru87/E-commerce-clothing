import React from 'react';

import './signin-and-signout.styles.scss';

import SignIn from '../signin/signin.component';

const SignInAndSignOut = () => {
    return (
        <div className='signin-and-signout'>
            <SignIn />
        </div>
        )
}

export default SignInAndSignOut;