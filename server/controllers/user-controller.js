const ApiError = require("../exceptions/api-error");
const userService = require("../services/user-service");
const {validationResult} = require('express-validator')

class UserController {
    
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validations Error', errors.array()))
            }

            const {name, email, password} = req.body;
            const userData = await userService.registration(name, email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 90 * 24 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body

        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            
        } catch (e) {
            console.log(e)
        }
    }

    async changeName(req, res, next) {
        try {
            
        } catch (e) {
            console.log(e)
        }
    }

    async changePass(req, res, next) {
        try {
            
        } catch (e) {
            console.log(e)
        }
    }
    
    async refresh(req, res, next) {
        try {
            
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserController()