import React, { Fragment, useState, useMemo } from 'react';
import { Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Row } from 'reactstrap';
import { Btn, H5 } from '../../components/AbstractElements';
import { and, CustomStyles, CustomstyleText, CustomstyleText2, CustomstyleText3, CustomstyleText4, CustomstyleText5, form, invalid, novalidate, SubmitForm, TermsText, valid } from '../../Constant/index';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import InputComponent from '../../components/InputComponent';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useUpdatePasswordMutation } from '../../services/AuthServices';
import toast from 'react-hot-toast';
// import { useGetPasswordUpdateDataQuery } from '../../services/AuthServices';

function PasswordUpdate({ loading }) {

    const [UpdatePassword] = useUpdatePasswordMutation();



    const initialValues = {
        oldPassword: '',
        password: '',
        confirmPassword: ''
    };

    const validationSchema = yup.object().shape({
        oldPassword: yup.string().trim("Enter valid password").required("old password is required").strict(),
        password: yup.string().trim("Enter valid password").min(6, "minimum 6 characters required").required("password is required").strict(),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').min(6, "minimum 6 characters required").trim("Enter valid confirm password").required("confirm password is required").strict(),
    });

    const handleSubmit = (data, { resetForm }) => {

        let dataForApi = {
            "oldPassword": data?.oldPassword,
            "newPassword": data?.password,
        }
        // console.log(registerData, 'submitData')
        UpdatePassword({ data: dataForApi })
            .then((res) => {
                if (res?.error) {
                    console.log(res?.error, 'resError');
                    toast.error(res?.error?.data?.message || "Internal server error")
                }
                else {
                    toast.success("Password updated");
                    resetForm();
                }
            })
            .catch((err) => {
                console.log(err, 'catchErr')
            })
    };


    return (
        <>
            {
                loading ?
                    <>
                    </>
                    :
                    <Formik
                        enableReinitialize
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                    >
                        {
                            (profileProps) =>
                            (
                                <Form>
                                    {
                                        loading ?
                                            <div className=' w-full h-[90vh] flex items-center justify-center'>
                                                <span className=' w-full flex py-1 items-center justify-center m-auto self-center animate-spin'>
                                                    <AiOutlineLoading3Quarters />
                                                </span>
                                            </div>
                                            :
                                            <Fragment>
                                                <Card className=' w-full'>
                                                    <CardHeader className='pb-0'>
                                                        <H5>Password Update</H5>
                                                        <span>
                                                            {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, voluptatibus. */}
                                                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias enim fugiat explicabo facere vitae culpa incidunt, vel doloremque. Illo laborum nesciunt deleniti inventore impedit! */}
                                                        </span>

                                                    </CardHeader>
                                                    <CardBody>
                                                        <Row className='g-3'>
                                                            <Col md='4'>
                                                                {/* <InputControl controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter First Name *' register={{ ...register('first_name', { required: 'is Required.' }) }} /> */}
                                                                {/* InputControl Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, in! */}
                                                                <InputComponent label={"Old password"} type="text" name='oldPassword' value={profileProps.values.oldPassword} placeholder='Enter your old password ' onChange={profileProps.handleChange} />
                                                            </Col>
                                                            <Col md='4'>
                                                                {/* <InputControl controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter Last Name *' register={{ ...register('last_name', { required: 'is Required.' }) }} /> */}
                                                                {/* Inp control Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolorum. */}
                                                                <InputComponent label={"New password"} type={"text"} value={profileProps.values.password} name='password' onChange={profileProps.handleChange} placeholder={"Enter city name"} />

                                                            </Col>
                                                            <Col md='4 mb-3'>
                                                                {/* <InputControl pereFix='@' controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter Last Name *' register={{ ...register('user_name', { required: 'is Required.' }) }} /> */}
                                                                {/* InputControl Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo accusantium incidunt eum distinctio atque! */}
                                                                <InputComponent label={"Confirm password"} type={"text"} value={profileProps.values.confirmPassword} name='confirmPassword' onChange={profileProps.handleChange} placeholder={"Enter your address"} />
                                                            </Col>
                                                        </Row>

                                                        <Btn color="primary" type="submit" className="d-block mt-4  w-[120px] rounded-full">
                                                            Submit
                                                        </Btn>
                                                    </CardBody>
                                                </Card>
                                            </Fragment>

                                    }

                                </Form>
                            )
                        }
                        {/* Profile Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veniam velit porro fugit nulla eligendi iusto veritatis nemo quod! Veniam quia aperiam omnis repellendus, pariatur molestias inventore perferendis ullam magni consequuntur amet repudiandae. Porro debitis perspiciatis modi excepturi ipsa soluta odio cumque provident sapiente sint fugit temporibus, culpa, harum dolor. */}
                    </Formik>
            }
        </>
    )
}

export default PasswordUpdate;