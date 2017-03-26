import React, { Component} from 'react';
import AddChoresForm from './AddChoresForm';
import { connect } from 'react-redux';
import { addChoresRequest } from '../../actions/addChoresActions';

class AddChoresPage extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-12 col-md-offset-4">
          <AddChoresForm addChoresRequest={addChoresRequest} />
        </div>
      </div>

    );
  }
}

AddChoresPage.propTypes = {
  addChoresRequest: React.PropTypes.func.isRequired
}
export default connect(null, { addChoresRequest })(AddChoresPage);
