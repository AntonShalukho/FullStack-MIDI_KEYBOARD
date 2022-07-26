import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleEntranceState } from '../store/slices/EntranceSlice'
import { disabledEye3, toggleEntranceEye } from '../store/slices/Eye3Slice'
import backSVG from '../png/backSVG.svg'
import eyeDisible from '../png/eye-disible.svg'
import eyeAbles from '../png/eye-visible.svg'
import { SubmitHandler, useForm } from 'react-hook-form'
import { selectorEnrtanceEye } from '../store'

interface EntranceInterface {
    email: string,
    password: string,
}

const Entrance = () => {
    const isDisibleEye = useSelector(selectorEnrtanceEye)
    const dispatch = useDispatch()

    const {register, handleSubmit} = useForm<EntranceInterface>()
    const onSubmit: SubmitHandler<EntranceInterface> = (data) => {console.log(data)}


  return (
    <div className="root3">
        <div className="entranceWrapperReg entranceWrapper">
            <form onSubmit={handleSubmit(onSubmit)} className="entranceForm">
                <input 
                    {...register('email')}
                    type="email" 
                    id="entranceEmail" 
                    className="formFactor"
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
                src={backSVG} 
                alt="go back" 
                className="backEntranceMark" 
                onClick={() => {dispatch(toggleEntranceState()); dispatch(disabledEye3())}}
            />
            <img 
                src={
                    isDisibleEye
                    ?   eyeAbles
                    :   eyeDisible
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