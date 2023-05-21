import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { toggleRegistrationState } from '../store/slices/RegistrationSlice'
// import { selectorRegistrationEye1, selectorRegistrationEye2 } from '../store'
// import { disabledRegistrationEye1, toggleRegistrationEye1 } from '../store/slices/RegistrationEye1Slice'
// import { disabledRegistrationEye2, toggleRegistrationEye2 } from '../store/slices/RegistrationEye2Slice'
// import { SubmitHandler, useForm } from 'react-hook-form'
// import ValidError from '../UI/ValidError'
// import { nameExpretion, passwordExpretion } from '../appService/RegExpr'
import { useNavigate } from 'react-router-dom'
// import ImgService from '../appService/ImgService'
// import AuthController from '../appService/AuthController'
// import { toggleRegistrationMessage } from '../store/slices/RegistrationMessageSlice'
// import { LocalUserInterface } from '../interfaces/LocalUser';
import {Formik, Form} from "formik";
import { initialValues } from './consts';
import { InitialValuesType } from './types';
import styles from "./RegistrationForm.module.css"
import { BackButton } from '../../UI/BackButton';
import { Input } from '../../UI/Input';
import { validationSchema } from './helpers/validationSchema';
import { Button } from '../../UI/Button/index';



export const RegistrationForm = () => {
    // const isDisibledEye1 = useSelector(selectorRegistrationEye1)
    // const isDisibledEye2 = useSelector(selectorRegistrationEye2)
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const [borderColor, setBorderColor] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handelLoading = () => setIsLoading(!isLoading)

    // const {register, handleSubmit, formState: {errors}, getValues} = useForm<RegistrationInterface>({
    //     mode: 'onBlur'
    // })

    // const onSubmit: SubmitHandler<RegistrationInterface> = async (data) => {
    //     const {name, email, password} = data;
    //     const respons = await AuthController.registration(name, email, password)
    //     console.log(respons)
    //     if(respons) {
    //         // const storage: Array<LocalUserInterface> | undefined = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('user') as string) : undefined
    //         // if (storage) {
    //         //     storage.push({'name': name, 'email': email, 'isLog': false})
    //         //     localStorage.setItem('users', JSON.stringify(storage))
    //         // } else { localStorage.setItem('users', JSON.stringify([{'name': name, 'email': email, 'isLog': false}])) }
    //         navigate(-1);
    //         dispatch(toggleRegistrationMessage())
    //         setTimeout(() => {dispatch(toggleRegistrationMessage())}, 2000)
    //     }
    //     // navigate(-1);
    //     //     dispatch(toggleRegistrationMessage())
    //     //     setTimeout(() => {dispatch(toggleRegistrationMessage())}, 2000)
    // }

    const handleSubmit = (values: InitialValuesType) => {
        
    }

  return (
    <div className={styles.wrapper}>
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form className={styles.entranceWrapperReg}>
              <BackButton/>
              <div className={styles.entranceName}>
                <div className={styles.nameTitle}>Registration:</div>
                <Input
                  name='name'
                  type='text'
                  placeholder='Name'
                  title='The name should contain 1-15 letters either Latin or Cyrillic language'
                />
                <Input
                  name='email'
                  type='text'
                  placeholder='Email'
                  title='Invalid Email'
                />
                <Input
                  name='password'
                  placeholder='Password' 
                  title='The password should be min six sings. Min one number, one uppercase and lowercase letter'
                  isPasswordType={true}
                />
                <Input
                  name='repeatPassword'
                  placeholder='Repeat password'
                  title='Repeat password'
                  isPasswordType={true}
                />
                <Button type='submit' onClick={handelLoading} variant='default' isLoading={isLoading} >Sign up</Button>
              </div>
            </Form>
          </Formik>
            {/* <form className="entranceWrapperReg" onSubmit={handleSubmit(onSubmit)}>
                <img 
                    src={ImgService.backSVG} 
                    alt="go back" 
                    className="backMark" 
                    onClick={() => {
                        dispatch(disabledRegistrationEye1());
                        dispatch(disabledRegistrationEye2());
                        navigate(-1)
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
                    <div className="invalidFormText invalidFormText1">
                        User with same email has already been registered
                    </div>
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
                        onChange={(e) => setBorderColor(e.target.value)}
                        style= {
                            getValues('password') === borderColor 
                            ? {border: '2px solid green',  boxSizing: 'content-box', height: '28px'} 
                            : {border: '2px solid red',  boxSizing: 'content-box', height: '28px'}
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
                            ?   ImgService.eyeAbles
                            :   ImgService.eyeDisible
                        } 
                        alt="show password" 
                        className="eye1"
                        onClick={() => dispatch(toggleRegistrationEye1())} 
                    />
                    <img 
                        src={
                            isDisibledEye2
                            ?   ImgService.eyeAbles
                            :   ImgService.eyeDisible
                        }   
                        alt="show password" 
                        className="eye2"
                        onClick={() => dispatch(toggleRegistrationEye2())}  
                    />
                </div>
            </form> */}
        </div>
    </div>
  )
}
