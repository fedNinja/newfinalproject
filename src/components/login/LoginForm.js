import React, { Component } from 'react';
import {store} from '../../index';
import { userLoginRequest } from '../../actions/loginActions';

class LoginForm extends Component{

    constructor(props){
      super(props);
      this.state={
        userName:'',
        password:'',
        error: {
          message:''
        }
      }
    }


    onChange(e) {
      this.setState({[e.nativeEvent.target.name]: e.nativeEvent.target.value});
    }

    onSubmit(e) {
      e.preventDefault();
      console.log(this.state);
        store.dispatch(userLoginRequest(this.state));
    }

    render(){
    return(
        <form onSubmit={(e) => this.onSubmit(e) }>
          <div className="form-group">
            <label className="control-label">UserName</label>
            <input
              onChange={(e) => this.onChange(e)}
              type="text"
              name="userName"
              className="form-control" />
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <input
                onChange={(e) => this.onChange(e)}
                type="password"
                name="password"
                className="form-control" />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-lg">Login</button>
              </div>
        </form>
    );
  }
}

LoginForm.propTypes = {
  userLoginRequest: React.PropTypes.func.isRequired
}

export default LoginForm;
