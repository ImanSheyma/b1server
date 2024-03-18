//импортируем модули
const express = require('express');
const userController = require('../controllers/userController');
const departmentController = require('../controllers/departmentController');
const router = require('express').Router();


//запрос на получение записей таблицы department
router.get('/department', departmentController.getAllDepartments)

//запрос на добавление записей в таблицу department
router.post('/department', departmentController.addDepartments)

//запрос на получение записей таблицы user
router.get('/user', userController.getAllUsers)

//запрос на добавление записей в таблицу user
router.post('/user', userController.addUsers)

module.exports = router;