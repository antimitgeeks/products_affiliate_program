import React, { Fragment, useState, useMemo } from 'react';
import { Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Row } from 'reactstrap';
import { Btn, H5 } from '../../../../components/AbstractElements';
import { and, CustomStyles, CustomstyleText, CustomstyleText2, CustomstyleText3, CustomstyleText4, CustomstyleText5, form, invalid, novalidate, SubmitForm, TermsText, valid } from '../../../../Constant/index';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import InputComponent from '../../../../components/InputComponent';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
// import { useUpdatePasswordMutation } from '../../services/AuthServices';
import toast from 'react-hot-toast';
import { useAddInvoiceMutation } from '../../../../services/AdminService';
import { useNavigate } from 'react-router-dom';
// import { useGetPasswordUpdateDataQuery } from '../../services/AuthServices';

function AddInvoice({ id, email }) {

    // const [UpdatePassword] = useUpdatePasswordMutation();
    const navigate = useNavigate();
    const [AddInvoice] = useAddInvoiceMutation();


    const initialValues = {
        themeName: '',
        domain: '',
        commission: ''
    };

    const validationSchema = yup.object().shape({
        themeName: yup.string().trim("Enter valid theme name").required("theme name is required").strict(),
        domain: yup.string().trim("Enter valid domain").required("domain is required").strict(),
        commission: yup.string().matches(/^\d+$/, "Click count must be a number").trim("Enter valid commission").required("commission is required").strict(),
    });

    const handleSubmit = (data, { resetForm }) => {
        let dataForApi = {
            "userId": id,
            "themeName": data?.themeName,
            "domain": data?.domain,
            "commission": data?.commission
        }
        console.log(dataForApi, 'dataforAPI')
        AddInvoice({ data: dataForApi })
            .then((res) => {
                if (res?.error) {
                    console.log(res?.error, 'resError');
                    toast.error(res?.error?.data?.message || "Internal server error")
                }
                else {
                    toast.success("Invoice added");
                    navigate('/dashboard')
                }
            })
            .catch((err) => {
                console.log(err, 'catchErr')
            })
    };


    return (
        <>
            {
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

                                <Fragment>
                                    <Card className=' w-full'>
                                        <div className='pb-0 pt-4 w-full flex justify-between px-[26px]'>
                                            <span className='text-[20px]'>
                                                Add Invoice
                                            </span>
                                            <span className='font-semibold'>
                                                {email || ''}
                                            </span>
                                        </div>
                                        <CardBody>
                                            <Row className='g-3'>
                                                <Col md='4'>
                                                    {/* <InputControl controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter First Name *' register={{ ...register('first_name', { required: 'is Required.' }) }} /> */}
                                                    {/* InputControl Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, in! */}
                                                    <InputComponent label={"Theme name"} type="text" name='themeName' value={profileProps.values.themeName} placeholder='Enter theme name' onChange={profileProps.handleChange} />
                                                </Col>
                                                <Col md='4'>
                                                    {/* <InputControl controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter Last Name *' register={{ ...register('last_name', { required: 'is Required.' }) }} /> */}
                                                    {/* Inp control Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolorum. */}
                                                    <InputComponent label={"Domain"} type={"text"} value={profileProps.values.domain} name='domain' onChange={profileProps.handleChange} placeholder={"Enter domain"} />

                                                </Col>
                                                <Col md='4 mb-3'>
                                                    {/* <InputControl pereFix='@' controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter Last Name *' register={{ ...register('user_name', { required: 'is Required.' }) }} /> */}
                                                    {/* InputControl Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo accusantium incidunt eum distinctio atque! */}
                                                    <InputComponent label={"Commission"} type={"text"} value={profileProps.values.commission} name='commission' onChange={profileProps.handleChange} placeholder={"Enter commission"} />
                                                </Col>
                                            </Row>

                                            {/* <Btn color="primary" type="submit" className="d-block mt-4  w-[120px] rounded-full">
                                                Submit
                                            </Btn> */}
                                            <div className=' w-[120px] mt-3'>
                                                <button className=" bg-black text-white w-fit py-[6.5px] border w-100 mt-2 rounded-full" type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Fragment>


                            </Form>
                        )
                    }
                    {/* Profile Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veniam velit porro fugit nulla eligendi iusto veritatis nemo quod! Veniam quia aperiam omnis repellendus, pariatur molestias inventore perferendis ullam magni consequuntur amet repudiandae. Porro debitis perspiciatis modi excepturi ipsa soluta odio cumque provident sapiente sint fugit temporibus, culpa, harum dolor. */}
                </Formik>
            }
        </>
    )
}

export default AddInvoice;