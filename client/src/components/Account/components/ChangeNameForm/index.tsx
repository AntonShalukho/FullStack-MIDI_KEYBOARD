import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { toggleChangeNameComponent } from '../../../../store/slices/ChangeNameSlice'
import { changeUserName } from '../../../../store/slices/UserNameSlice'
import { ChangeNameType } from '../../types'
import { Form, Formik } from 'formik'
import { CROSS } from '../../../../assets/iconsUrls'
import { ChangeNameFormInitialValues } from '../../consts'
import { validationSchema } from '../../helpers/validationSchema'
import { Input } from '../../../../UI/Input'
import { Button } from '../../../../UI/Button/index'



export const ChangeNameForm: FC = () => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleChangeNameComponent())
  }

  const handleSubmit = (values: ChangeNameType) => {
    // const {newName} = data;
    //     // const respons = await AuthController.changeName(newName);
    //     // if(respons) {
    //     //     dispatch(changeUserName(newName))
    //     //     dispatch(toggleChangeNameComponent())
    //     // }
  }

  return (
    <Formik
      initialValues={ChangeNameFormInitialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <img src={CROSS} className='nameImgClose' onClick={handleClose} />
        <Input 
          name='name'
          placeholder='Your name'
          className='links nameCases'
        />
        <Input 
          name='newName'
          placeholder='New name'
          className='links nameCases'
        />
        <Button 
          variant='default'
          type="submit"
          className='links caseButt'
        >Change
        </Button>
      </Form>
    </Formik>
  )
}
