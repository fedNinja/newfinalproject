import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addChoresRequest, assignChoreRequest } from '../../actions/addChoresActions';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Styles from './style.css';

class AddChoresForm extends Component{

    onChange(e) {
      e.preventDefault();
      const category = e.target.value;
      console.log(category);
      this.props.dispatch(addChoresRequest(category));
    }

    onClick(e, j) {
      console.log(j);
      console.log(this.props.chores[j]._id);
      const chores = [
          {
            ChId:this.props.chores[j]._id,
            day:"Thursday",
            status:false
          }
        ]
      this.props.dispatch(assignChoreRequest("58dc6ca412570d11819ede18", chores));
    }

    render(){
      const { errorMessage } = this.props;
      const { chores } = this.props;
      const { updatedChore } = this.props;
      console.log("num of chores are: ", chores.length);
      console.log(updatedChore);
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
        <div>
          {
            (chores.length > 0)
            ?
            <div>
              <ul>
                    {chores.map((item, i) => (
                      <li className="listStyle" key={i}>
                        <span className="contentStyle">{item.choreName}</span>
                        <button className="btn btn-primary btn-md btnStyle" id={"add"+i} onClick={(e) => this.onClick(e, i)}>Add Chore</button>
                      </li>
                    ))}
              </ul>
            </div>
            :
              null
            }
            </div>
      </div>
    );
  }
}

AddChoresForm.propTypes = {
  addChoresRequest: React.PropTypes.func.isRequired
//  assignChoreRequest: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    category:state.chores.category,
    chores:state.chores.chores,
    errorMessage:state.chores.errorMessage,
    updatedChore:state.chores.updatedChore
  }
}

export default connect(mapStateToProps)(AddChoresForm);
