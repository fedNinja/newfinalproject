import React, { Component } from 'react';
import { addChoresRequest } from '../../actions/addChoresActions';

class AddChoresForm extends Component{

    constructor(props){
      super(props);
      this.state={
        assignedChores:[
          {
            Chore:"Fold Laundry",
            Sun:false,
            Mon:false,
            Tue:false,
            Wed:false,
            Thu:false,
            Fri:false,
            Sat:false
          }
        ],
        childName:'kid1'
      }
    }


    onChange(e) {
      console.log(e.nativeEvent.target.value);
      console.log(this.state.assignedChores[0].Sun);
      console.log(e.nativeEvent.target.checked);
      this.setState({assignedChores:[
        {
          [e.nativeEvent.target.value]: e.nativeEvent.target.checked
        }
      ]});
    }

    onSubmit(e) {
      e.preventDefault();
      console.log(this.state);
        // store.dispatch(addChoresRequest(this.state));
    }

    render(){
    return(
        <form onSubmit={(e) => this.onSubmit(e) }>
          <div className="row">
            <div className="form-group">
              <h2>Fold Laundry</h2>
              Sun
              <input type="checkbox"
                value="Sun"
                onChange={(e) => this.onChange(e)}
                checked={this.state.assignedChores[0].Sun} />
              Mon
              <input type="checkbox"
                onChange={(e) => this.onChange(e)}
                checked={this.state.isChecked} />
              Tue
              <input type="checkbox"
                onChange={(e) => this.onChange(e)}
                checked={this.state.isChecked} />
              Wed
              <input type="checkbox"
                onChange={(e) => this.onChange(e)}
                checked={this.state.isChecked} />
              Thu
              <input type="checkbox"
                onChange={(e) => this.onChange(e)}
                checked={this.state.isChecked} />
              Fri
              <input type="checkbox"
                onChange={(e) => this.onChange(e)}
                checked={this.state.isChecked} />
              Sat
              <input type="checkbox"
                onChange={(e) => this.onChange(e)}
                checked={this.state.isChecked} />

            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-lg">Add Chore</button>
            </div>
          </div>
        </form>
    );
  }
}

AddChoresForm.propTypes = {
  addChoresRequest: React.PropTypes.func.isRequired
}

export default AddChoresForm;
