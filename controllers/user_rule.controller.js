const models = require('../models');
const Validator = require('fastest-validator');

 
const schema = {
    user_id: {type:"number", optional: false},
    rule_id: {type: "number", optional: false},
}

function getObj(req){
    const obj = {
        user_id: req.body.user_id,
        rule_id: req.body.rule_id,
    }
    return obj;

}
function validateInput(obj,res){
    const v = new Validator();
    const validationResponse = v.validate(obj, schema);

    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }
}

//only need to change the Model Name
function index(req, res){
    
    models.User_Rule.findAll({
        include: [{// Notice `include` takes an ARRAY
          model: models.User,
          attributes: ['email', 'firstName'],
        }]
      }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

//only need to change the Model Name
function show(req, res){
    const id = req.params.id;

    models.User_Rule.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "user-rule not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        })
    });
}


// 1 modification 
function add(req, res){

    const obj = getObj(req);  
    validateInput(obj,res);
    // Change 1
    models.User_Rule.create(obj).then(result => {
        res.status(201).json({
            message: "User_Rule created successfully",
            obj: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}
// 1 modification 
function update(req, res){

    const id = req.params.id;
    const obj = getObj(req); 
    validateInput(obj,res);

    // Change 1
    models.User_Rule.update(obj, {where: {id:id}}).then(result => {
        res.status(200).json({
            message: "User_Rule updated successfully",
            obj: obj
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    })
}

function destroy(req, res){
   const id = req.params.id;


    models.User_Rule.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "User_Rule deleted successfully"
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    });
 }
 
 

module.exports = {
    index: index,
    show: show,
    add: add,
    //update:update,
    //destroy: destroy
}

