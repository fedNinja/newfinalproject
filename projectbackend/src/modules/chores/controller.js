import Chore from './model';

export const addChores = async (req, res) => {
  console.log(`I am inside chore api ${JSON.stringify(req.body)}`);
	const{choreName, category, allowance} = req.body;
	const newChore = new Chore({ choreName, category, allowance});
	try{
	return res.status(201).json({chore: await newChore.save()});
	}catch(e) {
	return res.status(400).json({error:true, message:'Error with Chore creation'});
 }
}
