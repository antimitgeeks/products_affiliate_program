import React, { Fragment, useState, useEffect, useMemo } from 'react';
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
import { useGetAffiliateListQuery } from '../../../../services/AffiliateService';

import { useNavigate } from 'react-router-dom';
// import { useGetPasswordUpdateDataQuery } from '../../services/AuthServices';
import Select from 'react-select';

function AddInvoice({ id, email }) {

    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(false);

    // const [UpdatePassword] = useUpdatePasswordMutation();
    const navigate = useNavigate();
    const [AddInvoice] = useAddInvoiceMutation();
    const { data, isLoading: listLoading, isFetching: listFetching } = useGetAffiliateListQuery({})

    useEffect(() => {
        if (listLoading || listFetching) {
            setLoading(true)
        }
        else {
            setLoading(false);
            const transformedData = data?.result?.map(item => ({
                value: item.id,
                label: item.name,
            }));
            setListData(transformedData);
        }
    }, [listLoading, data, listFetching])
    console.log(listData, '----------------------------------------------listData');



    const initialValues = {
        themeName: null,
        domain: '',
        commission: '',
        sourceId: ''
    };

    const validationSchema = yup.object().shape({
        // themeName: yup.string().trim("Enter valid theme name").required("theme name is required").strict(),
        themeName: yup.object().shape({
            label: yup.string().required("themeName is required"),
            value: yup.string().required("themeName is required")
        }).nullable().required("themeName is required"),
        domain: yup.string().trim("Enter valid domain").required("domain is required").strict(),
        commission: yup.string().matches(/^\d+$/, "Click count must be a number").trim("Enter valid commission").required("commission is required").strict(),
    });

    const handleSubmit = (data, { resetForm }) => {
        let dataForApi = {
            "userId": id,
            "themeName": data?.themeName?.label,
            "domain": data?.domain,
            "commission": data?.commission,
            "sourceId": data?.sourceId
        }
        console.log(dataForApi, 'dataforAPI')
        AddInvoice({ data: dataForApi })
            .then((res) => {
                if (res?.error?.status == 400) {
                    console.log(res?.error, 'resError');
                    toast.error(res?.error?.data?.error)
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
                                                <Col md='6'>
                                                    {/* <InputControl controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter First Name *' register={{ ...register('first_name', { required: 'is Required.' }) }} /> */}
                                                    {/* InputControl Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, in! */}

                                                    {/* <Col md="12"> */}
                                                    <div className=' relative'>
                                                        <span className=' pl-[3px] font-semibold text-[13px]'>{"Theme name"}</span>
                                                        <Select
                                                            placeholder="Select Theme"
                                                            options={listData}
                                                            name="themeName"
                                                            value={profileProps.values.themeName}
                                                            // value={[{value:"IN",label:'India'}]}
                                                            onChange={value => profileProps.setFieldValue('themeName', value)}
                                                        />
                                                        <ErrorMessage className='text-red-400 absolute text-[14px] pl-[4px]  mt-0' name={"themeName"} component='div' />
                                                    </div>
                                                    {/* </Col> */}


                                                    {/* <InputComponent label={"Theme name"} type="text" name='themeName' value={profileProps.values.themeName} placeholder='Enter theme name' onChange={profileProps.handleChange} /> */}





                                                </Col>
                                                <Col md='6'>
                                                    {/* <InputControl controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter Last Name *' register={{ ...register('last_name', { required: 'is Required.' }) }} /> */}
                                                    {/* Inp control Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolorum. */}
                                                    <InputComponent label={"Domain"} type={"text"} value={profileProps.values.domain} name='domain' onChange={profileProps.handleChange} placeholder={"Enter domain"} />

                                                </Col>
                                            </Row >
                                            <br></br>
                                            <Row className='g-3'>
                                                <Col md='6'>
                                                    {/* <InputControl pereFix='@' controlInput='input' className='form-control' type='text' errors={errors} placeholder='Enter Last Name *' register={{ ...register('user_name', { required: 'is Required.' }) }} /> */}
                                                    {/* InputControl Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo accusantium incidunt eum distinctio atque! */}
                                                    <InputComponent label={"Pay Pal Source Id"} type={"text"} value={profileProps.values.sourceId} name='sourceId' onChange={profileProps.handleChange} placeholder={"Enter Source Id"} />
                                                </Col>
                                                <Col md='6'>
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
                </Formik >
            }
        </>
    )
}

export default AddInvoice;