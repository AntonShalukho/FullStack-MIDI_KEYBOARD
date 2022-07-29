import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleEntranceEye } from '../store/slices/Eye3Slice'
import { SubmitHandler, useForm } from 'react-hook-form'
import { selectorEnrtanceEye } from '../store'
import { useNavigate } from 'react-router-dom'
import ImgService from '../appService/ImgService'
import AuthController from '../appService/AuthController'

interface EntranceInterface {
    email: string,
    password: string,
}

const Entrance: FC = () => {
    const isDisibleEye = useSelector(selectorEnrtanceEye)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {register, handleSubmit} = useForm<EntranceInterface>()
    const onSubmit: SubmitHandler<EntranceInterface> = async (data) => {
        const {email, password} = data;
        const controller = new AuthController()
        const respons = await controller.login(email, password)
        if(respons) {
            navigate('/piano')
        }
    }

  return (
    <div className="root3">
        <div className="entranceWrapperReg entranceWrapper">
            <form onSubmit={handleSubmit(onSubmit)} className="entranceForm">
                <input 
                    {...register('email')}
                    type="email" 
                    id="entranceEmail" 
                    className="formFactor"
                    placeholder='Email'
                />
                <input 
                    {...register('password')} 
                    type={
                        isDisibleEye
                        ?   'text'
                        :   'password'
                    } 
                    id="entrancePassword" 
                    className="formFactor"
                    placeholder='Password'
                />
                <div className="errorEntranceText">Invalid email or password</div>
                <div className="entranceButtons">
                    <input 
                        type="submit" 
                        value="Entrance" 
                        className="butt" 
                    />
                </div>
            </form>
            <img 
                src={ImgService.backSVG} 
                alt="go back" 
                className="backEntranceMark" 
                onClick={() => navigate(-1)}
            />
            <img 
                src={
                    isDisibleEye
                    ?   ImgService.eyeAbles
                    :   ImgService.eyeDisible
                } 
                alt="check password" 
                className="eye3" 
                onClick={() => dispatch(toggleEntranceEye())}
            />
        </div>
    </div>
  )
}

export default Entrance