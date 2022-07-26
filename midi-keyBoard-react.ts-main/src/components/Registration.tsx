import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleRegistrationState } from '../store/slices/RegistrationSlice'
import backSVG from '../png/backSVG.svg'
import eyeDisible from '../png/eye-disible.svg'
import eyeAble from '../png/eye-visible.svg'
import { selectorRegistrationEye1, selectorRegistrationEye2 } from '../store'
import { disabledRegistrationEye1, toggleRegistrationEye1 } from '../store/slices/RegistrationEye1Slice'
import { disabledRegistrationEye2, toggleRegistrationEye2 } from '../store/slices/RegistrationEye2Slice'
import { SubmitHandler, useForm } from 'react-hook-form'
import ValidError from '../UI/ValidError'
import { nameExpretion, passwordExpretion } from '../appService/RegExpr'

interface RegistrationInterface {
    name: string,
    surname: string,
    email: string,
    password: string,
    repeatPassword: string
}


const Registration = () => {
    const isDisibledEye1 = useSelector(selectorRegistrationEye1)
    const isDisibledEye2 = useSelector(selectorRegistrationEye2)
    const dispatch = useDispatch()

    const {register, handleSubmit, formState: {errors}, reset, getValues} = useForm<RegistrationInterface>({
        mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<RegistrationInterface> = (data) => {
        console.log('data: ', data)
    }


  return (
    <div className="root2">
        <div>
            <form className="entranceWrapperReg" onSubmit={handleSubmit(onSubmit)}>
                <img 
                    src={backSVG} 
                    alt="go back" 
                    className="backMark" 
                    onClick={() => {
                        dispatch(toggleRegistrationState())
                        dispatch(disabledRegistrationEye1())
                        dispatch(disabledRegistrationEye2())
                    }}
                />
                <div className="entranceName">
                    <div className="nameTitle">Registration:</div>
                    <input 
                        {...register('name', {
                            required: 'Name is require field',
                            pattern: {
                                value: nameExpretion,
                                message: 'Name can use letters'
                            },
                        })}
                        type='text'
                        title='The name should contain 1-15 letters either Latin or Cyrillic language'
                        placeholder='Name'
                        id="name"
                        className='formFactor'
                    />
                    <ValidError errorsObject={errors.name} errorsMessage={errors.name?.message} />
                    <input 
                        {...register('surname', {
                            required: 'Surname is require field',
                            pattern: {
                                value: nameExpretion,
                                message: 'Surname can use letters'
                            }
                        })}
                        type="text"
                        id="surname" 
                        placeholder='Surname'  
                        title='The surname should contain 1-15 letters either Latin or Cyrillic language'
                        className='formFactor'
                    />
                    <ValidError errorsObject={errors.surname} errorsMessage={errors.surname?.message} />
                    <input 
                        {...register('email',{
                            required: 'Email is require field',
                            pattern: {
                                value: passwordExpretion,
                                message: 'Email is not valid'
                            }
                        })}
                        id="email" 
                        placeholder='Email'
                        title='Invalid Email'
                        className='formFactor'
                    />
                    <ValidError errorsObject={errors.email} errorsMessage={errors.email?.message} />
                    {/* <div className="invalidFormText invalidFormText1">
                        User with same email has already been registered
                    </div> */}
                    <input
                        {...register('password',{
                            required: 'Password is required field',
                            pattern: {
                                value: /^[0-9A-Za-z]{6,20}$/,
                                message: 'Min six sings, one number, one uppercase and lowercase letter'
                            }
                        })}
                        type={
                            isDisibledEye1
                            ?   'text'
                            :   'password'
                        }
                        id="password" 
                        placeholder='Password'  
                        title='The password should be min six sings. Min one number, one uppercase and lowercase letter'
                        className='formFactor'
                    />
                    <ValidError errorsObject={errors.password} errorsMessage={errors.password?.message} />
                    <input
                        {...register('repeatPassword', {
                            required: '',
                            validate: {
                                isSemular: (): boolean => {
                                    return getValues('password') === getValues('repeatPassword')
                                }
                            }
                        })}
                        type={
                            isDisibledEye2
                            ?   'text'
                            :   'password'
                        }
                        id="repeatPassword"
                        placeholder='Repeat password'  
                        className='formFactor'
                        style={
                            getValues('password') !== getValues('repeatPassword')
                            ? {border: '2px solid red',  boxSizing: 'content-box', height: '28px'}
                            : {border: '2px solid green',  boxSizing: 'content-box', height: '28px'}
                        }
                    />
                    <ValidError errorsObject={errors.repeatPassword} errorsMessage={'Invalid password'} />
                    <input     // Button to registration
                        type="submit"
                        id="button"
                        value='Log in'
                        className='butt buttonRegistration'
                    />
                    <img 
                        src={
                            isDisibledEye1
                            ?   eyeAble
                            :   eyeDisible
                        } 
                        alt="show password" 
                        className="eye1"
                        onClick={() => dispatch(toggleRegistrationEye1())} 
                    />
                    <img 
                        src={
                            isDisibledEye2
                            ?   eyeAble
                            :   eyeDisible
                        }   
                        alt="show password" 
                        className="eye2"
                        onClick={() => dispatch(toggleRegistrationEye2())}  
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Registration