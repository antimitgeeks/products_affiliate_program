import React, { Fragment, useState, useMemo } from 'react';
import { Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Row } from 'reactstrap';
import { Btn, H5 } from '../../components/AbstractElements';
import { and, CustomStyles, CustomstyleText, CustomstyleText2, CustomstyleText3, CustomstyleText4, CustomstyleText5, form, invalid, novalidate, SubmitForm, TermsText, valid } from '../../Constant/index';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import InputComponent from '../../components/InputComponent';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
// import { useGetPasswordUpdateDataQuery } from '../../services/AuthServices';

function PasswordUpdate({ listData, loading }) {

    const options = useMemo(() => countryList().getData(), []);
    console.log(listData, 'listDataProf');


    const previousCountryName = listData?.country;
    const previousCountryCode = useMemo(() => countryList().getValue(previousCountryName || ""));
    const PreviousCountryData = { value: previousCountryCode, label: previousCountryName }

    console.log(PreviousCountryData, 'prevData of Country')


    const initialValues = {
        payPalAddress: listData?.paypalAddress,
        country: PreviousCountryData || null,
        city: listData?.city || '',
        address: listData?.address || '',
        companyName: listData?.companyName || '',
        companyNumber: listData?.companyNumber || '',
        companyUrl: listData?.companyUrl || '',
    };

    const validationSchema = yup.object().shape({
        payPalAddress: yup.string().trim("Enter valid address").required("address is required").strict(),
        country: yup.object().shape({
            label: yup.string().required("Country is required"),
            value: yup.string().required("Country is required")
        }).nullable().required("Country is required"),
        city: yup.string().trim("Enter valid city").required("city is required").strict(),
        address: yup.string().trim("Enter valid address").required("address is required").strict(),
        companyName: yup.string().trim("Enter valid companyName").required("company name is required").strict(),
        companyUrl: yup.string().trim("Enter valid company url").required("company url is required").strict(),
        companyNumber: yup.string().trim("Enter valid number").min(10, "Enter valid number").max(10, "Enter valid number").required("number is required"),
    });

    const handleSubmit = (data) => {

        let registerData = {
            "paypalAddress": data?.payPalAddress,
            "country": data?.country?.label,
            "city": data?.city,
            "address": data?.address,
            "companyName": data?.companyName,
            "companyNumber": data?.companyNumber,
            "companyUrl": data?.companyUrl,
            "password": data?.password,
        }

        console.log(registerData, 'submitData')

    };


    return (
        <>
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
                                                <H5>Profile Update</H5>
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
                                                        <InputComponent label={"PayPal address"} type="text" name='payPalAddress' value={profileProps.values.payPalAddress} placeholder='Enter your paypal address' onChange={profileProps.handleChange} />
                                                    </Col>
                                                    <Col md='4'>
                                                        {/* <InputControl controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter Last Name *' register={{ ...register('last_name', { required: 'is Required.' }) }} /> */}
                                                        {/* Inp control Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolorum. */}
                                                        <InputComponent label={"City"} type={"text"} value={profileProps.values.city} name='city' onChange={profileProps.handleChange} placeholder={"Enter city name"} />

                                                    </Col>
                                                    <Col md='4 mb-3'>
                                                        {/* <InputControl pereFix='@' controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter Last Name *' register={{ ...register('user_name', { required: 'is Required.' }) }} /> */}
                                                        {/* InputControl Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo accusantium incidunt eum distinctio atque! */}
                                                        <InputComponent label={"Address"} type={"text"} value={profileProps.values.address} name='address' onChange={profileProps.handleChange} placeholder={"Enter your address"} />
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
        </>
    )
}

export default PasswordUpdate;