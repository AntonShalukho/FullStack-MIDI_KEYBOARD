const Router = require('express').Router
const userController = require('../controllers/user-controller.js')
const {body} = require('express-validator')


const router = new Router();


router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 6}), 
    userController.registration
)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.put('/changename', userController.changeName)
router.put('/changepass', userController.changePass)
router.get('/refresh', userController.refresh)
