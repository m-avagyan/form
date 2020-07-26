import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux'
import { addUser } from '../redux/actions';

class Main extends Component { 
    render() {
        return (
            <Formik
                initialValues={{
                    fName: '',
                    lName: '',
                    gender: 'male',
                    looking: 'jobs',
                    mail: '',
                    psw: '',
                    confirmPsw: '',
                    accept: false
                }}
                validationSchema={Yup.object().shape({
                    fName: Yup.string()
                        .required('First name is required')
                        .matches(
                            '^[a-zA-Z0-9_][a-zA-Z]*$',
                            'First name must contain only letters'
                        ),
                    lName: Yup.string()
                        .required('Last name is required')
                        .matches(
                            '^[a-zA-Z0-9_][a-zA-Z]*$',
                            'Last name must contain only letters'
                        ),
                    mail: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    psw: Yup.string()
                        .min(8, 'Password must be at least 8 characters')
                        .required('Password is required')
                        .matches(
                            '^(?=.*[a-z])(?=.*[0-9])',
                            'Password must contain letters և numbers'
                        ),
                    confirmPsw: Yup.string()
                        .oneOf([Yup.ref('psw'), null], 'Passwords must match')
                        .required('Confirm Password is required'),
                    accept: Yup.bool()
                        .oneOf([true], 'Accept Ts & Cs is required')
                })}
                onSubmit={async (fields, {resetForm}) => {
                    alert(`Hello ${fields.fName}! You have registered successfully :)`)
                    this.props.addUser(fields);
                    try {
                        resetForm({})
                      } catch (error) {
                        console.log(error)
                      }
                }}
            >
                {({ errors, touched }) => (
                    <div className='form'>
                        <Form>
                            <div className='inp-group'>
                                <Field name='fName' type='text'
                                    className={'inp' + (errors.fName && touched.fName ? ' inp-err' : '')}
                                    placeholder='Enter your first name *'
                                />
                                <ErrorMessage name='fName' component='p' className='error' />                              
                            </div>
                            <div className='inp-group'>
                                <Field name='lName' type='text'
                                    className={'inp' + (errors.lName && touched.lName ? ' inp-err' : '')}
                                    placeholder='Enter your last name *'
                                />
                                <ErrorMessage name='lName' component='p' className='error' />                                   
                            </div>
                            <div className='inp-group inp-radio'>
                                <p>Gender:</p>
                                <div>
                                    <Field name='gender' id='male' type='radio' value='male' />
                                    <label htmlFor='male'>Male</label>
                                </div>
                                <div>
                                    <Field name='gender' id='female' type='radio' value='female' />
                                    <label htmlFor='female'>Female</label>
                                </div>
                            </div>
                            <div className='inp-group'>
                                <Field
                                    component='select'
                                    name='looking'
                                >
                                    <option value='jobs'>Looking for a job</option>
                                    <option value='employee'>Looking for an employee</option>
                                </Field>
                            </div>
                            <div className='inp-group'>
                                <Field name='mail' type='email'
                                    className={'inp' + (errors.mail && touched.mail ? ' inp-err' : '')}
                                    placeholder='Enter your e-mail *'
                                />
                                <ErrorMessage name='mail' component='p' className='error' />                                 
                            </div>
                            <div className='inp-group'>
                                <Field name='psw' type='password'
                                    className={'inp' + (errors.psw && touched.psw ? ' inp-err' : '')}
                                    placeholder='Create your password *'
                                />
                                <ErrorMessage name='psw' component='p' className='error' />    
                            </div>
                            <div className='inp-group'>
                                <Field name='confirmPsw' type='password'
                                    className={'inp' + (errors.confirmPsw && touched.confirmPsw ? ' inp-err' : '')}
                                    placeholder='Confirm password *'
                                />
                                <ErrorMessage name='confirmPsw' component='p' className='error' />   
                            </div>
                            <div className='inp-group'>
                                <Field type='checkbox' name='accept' id='accept' />
                                <label htmlFor='accept' className={'accept' + (errors.accept && touched.accept ? ' accept-err' : '')}>
                                    Accept Terms & Conditions *
                                </label>      
                            </div>     
                            <button type='submit' className='btn'>Register</button>
                        </Form>
                    </div>
                )}
            </Formik>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch(addUser(user))
        }
    }
}

export default connect(null, mapDispatchToProps)(Main);