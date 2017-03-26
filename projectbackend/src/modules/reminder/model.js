import mongoose, {Schema} from 'mongoose';
import User from './users/model';

const ReminderSchema = new Schema({
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User
  },
	sentDate:{
		type:Date,
		required:true
	},
  sentTime:{
    type:String,
		required:true
  },
	sentTOUsers:{
		type:[],
		required:true
	},
  sentStatus:{
    type:String,
    required:true
  }

});

export default mongoose.model('Reminder', ReminderSchema);
