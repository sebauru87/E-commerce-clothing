import React from 'react';

import './signup.styles.scss';

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custon-button.component";

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
      super();

      this.state = {
        displayName: '',
        email: "",
        password: "",
        confirmPassword: "",
      };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try {
            const {user} =await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: "",
                password: "",
                confirmPassword: "",
            })
        }
        catch (error) {
            console.error(error.message);
        }
      };
    
      handleChange = (event) => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
      return (
          <div className="signup">
          <h2 className='title'>I do not have an account</h2>
          <span>Sign up with your email and password</span>
  
          <form onSubmit={this.handleSubmit}>
          <FormInput
              name="displayName"
              type="text"
              value={displayName}
              onChange={this.handleChange}
              label="Name"
              required
            />
            <FormInput
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              required
            />
  
            <FormInput
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
              label="Password"
              required
            />
            <FormInput
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={this.handleChange}
              label="Confirm Password"
              required
            />
  
            {/* <input type="submit" value="Sign in" /> */}
            <div className='buttons'>
                <CustomButton type="submit" >Sign Up</CustomButton>
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default SignUp;