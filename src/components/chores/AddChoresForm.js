import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addChoresRequest } from '../../actions/addChoresActions';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class AddChoresForm extends Component{

    onChange(e) {
      e.preventDefault();
      const category = e.target.value;
      console.log(category);
      this.props.dispatch(addChoresRequest(category));
    }

    render(){
      const { errorMessage } = this.props
    return(
      <div>
        {errorMessage ? <p>{errorMessage}</p> : null}
        <form onSubmit={(e) => this.onSubmit(e) }>
          <FormGroup controlId="category">
              <ControlLabel>Select Chore Category</ControlLabel>
              <FormControl componentClass="select" placeholder="select" onChange={(e) => this.onChange(e)}>
                <option value="select">select </option>
                <option value="Household_Chores">Household Chores</option>
                <option value="Mealtime_Chores">Mealtime Chores</option>
              </FormControl>
          </FormGroup>
        </form>
      </div>
    );
  }
}

AddChoresForm.propTypes = {
  addChoresRequest: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    category:state.chores.category
  }
}

export default connect(mapStateToProps)(AddChoresForm);
