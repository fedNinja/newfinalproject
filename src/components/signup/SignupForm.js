import React, {Component} from 'react';
import { userSignupRequest, getSignupData } from '../../actions/signupActions';
class SignupForm extends Component{
  

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.dispatch(userSignupRequest(e.target.querySelector('input').value));
    {/*this.props.userSignupRequest(this.state);*/}
  }

  getAllUsers() {
    this.props.dispatch(getSignupData())
  }

  render(){
    return(
     <div>
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
          <div className="form-group">
            <label className="control-label">UserName</label>
            <input
              onChange={this.onChange}
              type="text"
              name="userName"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Password</label>
            <input
              onChange={this.onChange}
              type="text"
              name="password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label">passwordConfirmation</label>
            <input
              onChange={this.onChange}
              type="text"
              name="passwordConfirmation"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Email</label>
            <input
              onChange={this.onChange}
              type="text"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg">Sign up</button>
          </div>

      </form>

      <button
        onClick={this.getAllUsers.bind()}>
          Press Me
        </button>
      </div>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;
