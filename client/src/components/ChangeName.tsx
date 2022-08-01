import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { nameExpretion } from '../appService/RegExpr'
import ValidError from '../UI/ValidError'
import { toggleChangeNameComponent } from '../store/slices/ChangeNameSlice'
import AuthController from '../appService/AuthController'
import { changeUserName } from '../store/slices/UserNameSlice'
import { LocalUserInterface } from '../interfaces/LocalUser'

interface ChangeNameInterface {
    name: string,
    newName: string
}

export const ChangeName: FC = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, getValues, formState: {errors}} = useForm<ChangeNameInterface>()
    const onSubmit: SubmitHandler<ChangeNameInterface> = async (data) => {
        const {newName} = data;
        const controller = new AuthController();
        const respons = await controller.changeName(newName);
        if(respons) {
            dispatch(changeUserName(newName))
            const storage: Array<LocalUserInterface> | undefined = JSON.parse(localStorage.getItem('users') as string)
            storage ? storage.map(user => {if(user.isLog) user.name = newName}) : console.error('User was not authorized')
            localStorage.setItem('users', JSON.stringify(storage))
        }
    }

    const URL = 'https://raw.githubusercontent.com/AntonSheluho/midi-keyBoard-react.ts/main/src/png/x_cross_delete_remove_icon_144023.svg'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='linksWrap wrapName wrapNameActive'>
        <img src={URL} className='nameImgClose' onClick={() => dispatch(toggleChangeNameComponent())} />
        <input
            {...register('name', 
                {
                    required: '',
                    pattern: {
                        value: nameExpretion,
                        message: 'Name can use letters'
                    },
                }
            )} 
            type="text"
            placeholder='Your name'
            className='links nameCases' 
        />
        <input
            {...register('newName', 
                {
                    required: '',
                    validate: {
                        isSemular: (): boolean => {
                            return getValues('name') === getValues('newName')
                        }
                    },
                    pattern: {
                        value: nameExpretion,
                        message: 'Name can use letters'
                    },
                }
            )} 
            type="text" 
            placeholder='New name'
            className='links nameCases'
        />
        <ValidError class='textErr' errorsObject={errors.name} errorsMessage={errors.name?.message} />
        {/* <div className='textErr' >Invalid name</div> */}
        <input type="submit" value="Change" className='links caseButt' />
    </form>
  )
}
