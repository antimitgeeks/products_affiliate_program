import React, { Fragment, useState, useMemo, useEffect } from 'react';
import { Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Row } from 'reactstrap';
import { Btn, H5 } from '../../../components/AbstractElements';
import { and, CustomStyles, CustomstyleText, CustomstyleText2, CustomstyleText3, CustomstyleText4, CustomstyleText5, form, invalid, novalidate, SubmitForm, TermsText, valid } from '../../../Constant/index';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import InputComponent from '../../../components/InputComponent';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useAddAffiliateLinkMutation } from '../../../services/AffiliateService';
import { useNavigate } from 'react-router-dom';
// import { useGetProfileDataQuery } from '../../services/AuthServices';

function AddAffiliateLinks({ listData, loading }) {

    const options = useMemo(() => countryList().getData(), []);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [AddAffiliate] = useAddAffiliateLinkMutation();
    const navigate = useNavigate();


    console.log(submitLoading, 'SubmitLoading')

    console.log(listData, 'listDataProf');
    const previousCountryName = listData?.country;
    const previousCountryCode = useMemo(() => countryList().getValue(previousCountryName || ""));
    const PreviousCountryData = { value: previousCountryCode, label: previousCountryName }

    console.log(PreviousCountryData, 'prevData of Country')


    const initialValues = {
        name: '',
        link: '',
        dropboxLink: '',
        clickCount: '0',
        purchases: '0',
        // companyNumber: listData?.companyNumber || '',
    };

    const validationSchema = yup.object().shape({
        name: yup.string().trim("Enter valid name").required("name is required").strict(),
        link: yup.string().trim("Enter valid link").required("link is required").strict(),
        dropboxLink: yup.string().trim("Enter valid dropboxLink").required("dropboxLink is required").strict(),
        clickCount: yup.string().matches(/^\d+$/, "Click count must be a number").required("Click count is required").strict(),
        purchases: yup.string().matches(/^\d+$/, "Purchases must be a number").required("Purchases count is required").strict(),
        // companyNumber: yup.string().trim("Enter valid number").min(10, "Enter valid number").max(10, "Enter valid number").required("number is required"),
    });

    const handleSubmit = (data) => {

        setSubmitLoading(true);

        let DataForApi = {
            "name":data?.name,
            "purchases":data?.purchases,
            "link" : data?.link,
            "dropboxLink":data?.dropboxLink,
            "clickCount" : data?.clickCount
        }


        // console.log(DataForApi, 'submitData');

        // UpdateProfile({ data: DataForApi })
        //   .then((res) => {
        //     if (res.error) {
        //       console.log(res.error, 'res.error');
        //       toast.error("Internal server error");
        //       setSubmitLoading(false)
        //     }
        //     else {
        //       console.log(res, 'res');
        //       toast.success("Data updated successfully");
        //       setSubmitLoading(false)
        //     }
        //   })
        //   .catch((err) => {
        //     console.log(err, 'err');
        //     toast.error("Internal server error");
        //     setSubmitLoading(false)
        //   })

        AddAffiliate({ data: DataForApi })
            .then((res) => {
                if (res.error) {
                    console.log(res.error, 'res.error');
                    toast.error("Internal server error");
                    setSubmitLoading(false)
                }
                else {
                    console.log(res, 'res');
                    //   toast.success("Data updated successfully");
                    navigate('/dashboard/affiliate-links')
                    setSubmitLoading(false)
                }
            })
            .catch((err) => {
                console.log(err, 'err');
                toast.error("Internal server error");
                setSubmitLoading(false)
            })
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
                                    <div className=' w-full flex items-center justify-center'>
                                        <span className=' w-full flex py-1 items-center justify-center m-auto self-center animate-spin'>
                                            <AiOutlineLoading3Quarters />
                                        </span>
                                    </div>
                                    :
                                    <Fragment>
                                        <Card className=' w-full'>
                                            <CardHeader className='pb-0'>
                                                <H5>Add Links</H5>
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
                                                        <InputComponent label={"Name"} type="text" name='name' value={profileProps.values.name} placeholder='Enter affiliate name' onChange={profileProps.handleChange} />
                                                    </Col>
                                                    <Col md='4'>
                                                        {/* <InputControl controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter Last Name *' register={{ ...register('last_name', { required: 'is Required.' }) }} /> */}
                                                        {/* Inp control Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolorum. */}
                                                        <InputComponent label={"Click count"} type={"text"} value={profileProps.values.clickCount} name='clickCount' onChange={profileProps.handleChange} placeholder={"Enter Click count"} />


                                                    </Col>
                                                    <Col md='4 mb-3'>
                                                        {/* <InputControl pereFix='@' controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter Last Name *' register={{ ...register('user_name', { required: 'is Required.' }) }} /> */}
                                                        {/* InputControl Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo accusantium incidunt eum distinctio atque! */}
                                                        {/* <InputComponent label={"dropboxLink"} type={"text"} value={profileProps.values.dropboxLink} name='dropboxLink' onChange={profileProps.handleChange} placeholder={"Enter dropbox link"} /> */}
                                                        <InputComponent label={"Purchases"} type={"text"} value={profileProps.values.purchases} name='purchases' onChange={profileProps.handleChange} placeholder={"Enter purchase count"} />

                                                    </Col>
                                                </Row>
                                                <Row className='g-3'>
                                                    <Col md='6'>
                                                        {/* <InputControl controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter City Name *' register={{ ...register('city', { required: 'is Required.' }) }} /> */}
                                                        {/* City */}
                                                        {/* <InputComponent label={"Click count"} type={"text"} value={profileProps.values.clickCount} name='clickCount' onChange={profileProps.handleChange} placeholder={"Enter Click count"} /> */}
                                                        <InputComponent label={"Link"} type={"text"} value={profileProps.values.link} name='link' onChange={profileProps.handleChange} placeholder={"Enter your link"} />

                                                    </Col>
                                                    <Col md='6'>
                                                        {/* <InputControl control={control} placeholder='select...' controlInput='select' options={StateSelect} className='form-select' errors={errors} register={{ ...register('state', { required: 'is Required.' }) }} /> */}
                                                        {/* State */}
                                                        <InputComponent label={"dropboxLink"} type={"text"} value={profileProps.values.dropboxLink} name='dropboxLink' onChange={profileProps.handleChange} placeholder={"Enter dropbox link"} />


                                                    </Col>
                                                </Row>

                                                <Btn color="primary" type="submit" className="d-block mt-4  w-[120px] rounded-full">
                                                    {
                                                        submitLoading ?
                                                            <span className=' w-full flex py-1 items-center justify-center m-auto self-center animate-spin'>
                                                                <AiOutlineLoading3Quarters />
                                                            </span>
                                                            :
                                                            "Submit"
                                                    }
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
            {/* <PasswordUpdate/> */}
        </>
    )
}

export default AddAffiliateLinks;