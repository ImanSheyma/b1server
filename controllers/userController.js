const UserModel = require('../models/user');

//контроллер для работы с user табл
class UserController{
    //получение записей
    static async getAllUsers(req, res){
        var result = await UserModel.getUsers();
        if(result)
            res.send(result);
    }

    //добавление записей
    static async addUsers(req, res){     
        try{
            var result = await UserModel.addUsers(req.body);
            if(result)
                res.status(200).send('success');
            else
                res.status(400).send('record creation failed');
        } 
        catch (err){
            res.status(400).send('record creation failed');
        }
    }
}

module.exports = UserController;