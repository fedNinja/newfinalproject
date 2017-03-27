import Child from './model';

export const addChild = async(req,res) => {
  console.log(`I am inside child api ${JSON.stringify(req.body)}`);
	const{userName, password, dateOfBirth} = req.body;
	const newChild = new Child({ userName, password, dateOfBirth});
	try{
	return res.status(201).json({child: await newChild.save()});
	}catch(e) {
	return res.status(400).json({error:true, message:'Error with child account creation'});
 }
}
