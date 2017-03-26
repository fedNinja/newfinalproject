import User from './model';

export const createUser = async (req, res) => {
	const{userName, password, email} = req.body;
	const newUser = new User({ userName, password, email});
	try{
	return res.status(201).json({user: await newUser.save()});

	}catch(e) {
	return res.status(400).json({error:true, message:'Error with User creation'});
	}
}


export const getUsers = async (req, res) => {
	try{
		return res.status(200).json({users: await User.find({})});

		}catch(e) {
		return res.status(e.status).json({error:true, message:'Error with to get user data'});
	}
}

export const getUserById = async (req, res) => {
		console.log(`Inside user Id ${req.body.userName}`);
		const userName = req.body.userName;
	try{
		return res.status(200).json({users: await User.findOne({userName})});

		}catch(e) {
		return res.status(e.status).json({error:true, message:'Error with getting user data'});
	}

}
