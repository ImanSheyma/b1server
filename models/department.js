const db = require('../config/db');

//класс для взаимодействия с таблицей department
class DepartmentModel {

    //запрос записей из таблицы
    static async getDepartments(){
        return new Promise(resolve => {
            db.query('SELECT * FROM department', (error, result) => {
                if(!error)
                    resolve(result);
            })
        })
    }

    //добавление записей в таблицу
    static async addDepartments(departments){
        return new Promise(resolve => {
            const fields = Object.keys(departments[0]).join(',');
            const values = departments.map(department => Object.values(department));

            db.query(`INSERT INTO department (${fields}) VALUES ?`, [values], (error, result) => {
                if(!error)
                    resolve(true);
                else
                    resolve(false);
            })
        })
    }
}

module.exports = DepartmentModel;