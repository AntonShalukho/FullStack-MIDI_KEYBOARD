const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');
const UserModel = require('../models/user-model.js');
const UserDto = require('../dtos/user-dto.js')
const tokenService = require('./token-service.js');
const bcryptjs = require('bcryptjs');
const tokenModel = require('../models/token-model');

class UserService {

    async getToken(person) {
        const userDto = new UserDto(person)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.savaToken(userDto.id, tokens.refreshToken);
        return  {...tokens, user: userDto}
    }

    async registration(name, email, password) {
        const candidate = await UserModel.findOne({email});
        if(candidate) {
            throw ApiError.BadRequest(`User with email ${email} has been registred`)
        }

        const hashPass = await bcryptjs.hash(password, 7)
        const user = await UserModel.create({name, email, password: hashPass})
        const tokens = await this.getToken(user)

        return tokens
    }

    async login(email, password) {
        const user = await UserModel.findOne({email});
        if(!user) {
            throw ApiError.BadRequest('User not found')
        }

        const isPassEquats = await bcryptjs.compare(password, user.password)
        if(!isPassEquats) {
            throw ApiError.BadRequest('Wrong password')
        }

        const tokens = await this.getToken(user)
        return tokens
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token
    }

    async changeName(name, newName, refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        if(!userData) {
            throw ApiError.UnauthorizedError()
        }

        const user = await UserModel.findById(userData.id);
        if(user.name !== name) {
            throw ApiError.BadRequest('Invalid name')
        }

        user.name = newName;
        await user.save()

        const tokens = await this.getToken(user);
        return tokens
    }

    async changePass(password, newPassword, refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        if(!userData) {
            throw ApiError.UnauthorizedError()
        }

        const user = await UserModel.findById(userData.id);
        if(!user) {
            throw ApiError.UnauthorizedError()
        }

        const isPassEquats = await bcryptjs.compare(password, user.password);
        if(!isPassEquats) {
            throw ApiError.BadRequest('Invalid password')
        }

        const hashNewPassword = await bcryptjs.hash(newPassword, 7);
        user.password = hashNewPassword;
        await user.save();

        const tokens = await this.getToken(user);
        return tokens
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenDB = await tokenService.findToken(refreshToken);
        if(!userData || !tokenDB) {
            throw ApiError.UnauthorizedError();
        }

        const user = await UserModel.findById(userData.id)
        const tokens = await this.getToken(user)

        return tokens
    }
}



module.exports = new UserService