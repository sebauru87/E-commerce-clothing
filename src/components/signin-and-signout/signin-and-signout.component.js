import React from 'react';

import './signin-and-signout.styles.scss';

import SignIn from '../signin/signin.component';
import SignUp from '../signup/signup.component';

const SignInAndSignOut = () => {
    return (
        <div className='signin-and-signout'>
            <SignIn />
            <SignUp />
        </div>
        )
}

export default SignInAndSignOut;