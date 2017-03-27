import mongoose, {Schema} from 'mongoose';
import User from '../users/model';

const ChildSchema = new Schema({
  parent:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User
  },
	userName:{
		type:String,
		required:true
	},
  password:{
    type:String,
		required:true
  },
	dateOfBirth:{
		type:Date,
		required:true
	},
  assignedChores:{
    type:[],
    required:false
  },
  choresForApproval:{
    type:[],
    required:false
  },
  allowance:{
    type:Number,
    required:false
  },
  spending:{
    type:Number,
    required:false
  }

});

export default mongoose.model('Child', ChildSchema);
