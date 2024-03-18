const DepartmentModel = require('../models/department');

//контроллер для работы с department
class DepartmentController{

    //получение записей
    static async getAllDepartments(req, res){
        try{
            var result = await DepartmentModel.getDepartments();
            if(result)
                res.send(result);
        } catch (err){
            res.status(400);
        }
    }

    //добавление записей
    static async addDepartments(req, res){
        try{
            var result = await DepartmentModel.addDepartments(req.body);
            if(result)
                res.status(200).send('record added successfully');
            else
                res.status(400).send('record creation failed');
        } catch(err){
            res.status(400).send('record creation failed');
        }
    }
}

module.exports = DepartmentController;