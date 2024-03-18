const db = require('../config/db');

//класс для взаимодействия с таблицей user
class UserModel {

    //получение записей из таблицы
    static async getUsers(){
        return new Promise(resolve => {
            db.query('SELECT * FROM user', (error, result) => {
                if(!error)
                resolve(result);
            })
        })
    }

    //добавление записей в таблицу
    static async addUsers(users){
        return new Promise(resolve => {
            const fields = Object.keys(users[0]).join(',');
            const values = users.map(user => Object.values(user));

            const sql = `INSERT INTO user(${fields}) VALUES ?`;
            db.query(sql, [values], (error, result) => {
                if(!error){
                    resolve(true);
                }
                else{
                    console.log(error);
                    resolve(false);
                }
            })
        })
    }
}

module.exports = UserModel;