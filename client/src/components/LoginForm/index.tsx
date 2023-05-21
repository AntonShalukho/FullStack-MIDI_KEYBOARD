import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { initialValues } from './consts'
import { InitialValuesType } from './types'
import { BackButton } from '../../UI/BackButton'
import { Input } from '../../UI/Input'
import { Button } from '../../UI/Button/index'
import styles from "./LoginForm.module.css"

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
    // const isDisibleEye = useSelector(selectorEnrtanceEye)
    // const dispatch = useDispatch()
  const navigate = useNavigate()

    // const {register, handleSubmit} = useForm<EntranceInterface>()
    // const onSubmit: SubmitHandler<EntranceInterface> = async (data) => {
    //     const {email, password} = data;
    //     const respons = await AuthController.login(email, password)
    //     if(respons) {
            // let storage: Array<LocalUserInterface> | undefined = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users') as string)  : undefined
            // if(storage) {
            //     storage.map(user => {if(user.email === email) {user.isLog = true} else {user.isLog = false}} )
            //     const username: LocalUserInterface | undefined = storage.find(user => user.email === email)
            //     username ? dispatch(changeUserName(username.name)) : dispatch(changeUserName(''))
            // } else console.error('Name not found')
            // console.log(respons)
            // navigate('/piano')
            // dispatch(changeUserName(respons as string))
    //     }
    // }
  
  const handleSubmit = (values: InitialValuesType) => {
    setIsLoading(true)

  }

  return (
    <div className="root3">
        <div className="entranceWrapperReg entranceWrapper">
          <BackButton/>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <Form className={styles.entranceForm} >
              <Input
                name='email'
                placeholder='Email'
              />
              <Input
                name='password'
                placeholder='Password'
                isPasswordType={true}
              />
              <Button 
                variant='default'
                isLoading={isLoading}
                type='submit'
              >Log in</Button>
            </Form>
          </Formik>
        </div>
    </div>
  )
}