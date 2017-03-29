import Child from './model';

export const addChild = async(req,res) => {
	const{parent, userName, password, dateOfBirth} = req.body;
	const newChild = new Child({ parent, userName, password, dateOfBirth});
	try{
	return res.status(201).json({child: await newChild.save()});
	}catch(e) {
	return res.status(400).json({error:true, message:'Error with child account creation'});
 }
}

export const getChilds = async (req, res) => {
	try{
		return res.status(200).json({childs: await Child.find({})});

		}catch(e) {
		return res.status(e.status).json({error:true, message:'Error with to get child data'});
	}
}

export const getChildById = async (req, res) => {
  try{
    res.status(200).json({child: await Child.find({_id:req.params.id})});
    } catch(e) {
  return res.status(e.status).json({error:true, message:'Error with getting child data'});
  }
}

export const assignChores = function(req, res) {
	console.log(req.body);
	const childId = req.body.childId;
	const ChId =req.body.choreId;
	const day =req.body.day;
	const s =req.body.status;
	const chores = [ChId, day, s];
	console.log(childId, chores);
	Child.findOneAndUpdate({'_id':childId}, {$set: {assignedChores:[chores]}}, {new:true}, function(err, obj){
      if(err){
        res.status(500).send(err);
      }
			else{
				res.status(200).json(obj);
			}
    });
}

export const updateSpending = function(req, res) {
	console.log(req.body);
	const childId = req.body.childId;
	const spending = Number(req.body.spending);
	console.log(spending);
	Child.findOneAndUpdate({'_id':childId}, {$set: {spending:spending}}, {upsert:true}, function(err, obj){
      if(err){
        res.status(500).send(err);
      }
			else{
				res.status(200).json(obj);
			}
    });
}

export const deleteById = function(req, res) {
	console.log("inside delete");
	Child
		.findByIdAndRemove(req.params.id)
		.exec()
		.then(() => {
			res.status(204).json({message: 'successfully removed'});
		})
		.catch(err => {
			res.status(500).json({error:'something went terribly wrong'});
		});
}

/*
export const assignChores = function(req, res) {
	console.log(req.body);
	const childId = req.body.childId;
	const chores = Array(req.body.chores);
	console.log(chores);
	Child.findById(childId, function(err, child) {
		if(err) {
			res.status(500).send(err);
		} else {
			child.assignedChores.push(chores);
			child.save(function (err, child) {
				if (err) {
					res.status(500).send(err);
				}
				res.send(child);
			});
		}
	});
}

export const updateAllowance = function(req,res) {
	console.log(req.body);
	const childId = req.body.childId;
	const allowance = Number(req.body.allowance);
	console.log(childId, allowance);
	Child.findById(childId, function(err, child) {
		if(err) {
			res.status(500).send(err);
		} else {
			child.allowance = allowance;
			child.save(function (err, child) {
				if (err) {
					res.status(500).send(err)
				}
				res.send(child);
			});
		}
	});
}
*/
export const updateAllowance = function(req, res) {
	console.log(req.body);
	const childId = req.body.childId;
	const allowance = Number(req.body.allowance);
	console.log(childId, allowance);
	Child.findOneAndUpdate({'_id':childId}, {$set: {allowance:allowance}}, {upsert:false}, function(err){
      if(err){
        res.status(500).send(err);
      }
    });
}
