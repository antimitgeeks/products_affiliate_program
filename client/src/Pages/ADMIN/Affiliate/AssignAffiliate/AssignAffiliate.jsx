import React, { useState } from 'react';
import './AssignAffiliate.css';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoEyeOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { useAssignAffiliateMutation } from '../../../../services/AdminService';
import toast from 'react-hot-toast';

function AssignAffiliate({ AssignedListData, Assignedlistloading, notAssignedlistloading, NotAssignedlistData }) {
    const invoices = [
        {
            id: 1,
            themeName: "Elegant Portfolio",
            domain: "elegantportfolio.com",
            date: "2024-09-01",
            commission: "$200",
            status: "Paid",
        },
        {
            id: 2,
            themeName: "Modern Blog",
            domain: "modernblog.net",
            date: "2024-08-15",
            commission: "$150",
            status: "Pending",
        },
        {
            id: 3,
            themeName: "Tech Startup",
            domain: "techstartup.io",
            date: "2024-07-30",
            commission: "$300",
            status: "Paid",
        },
        {
            id: 4,
            themeName: "ItGeeks",
            domain: "itgeeks.io",
            date: "2024-08-30",
            commission: "$100",
            status: "Paid",
        },
        {
            id: 5,
            themeName: "Krown",
            domain: "Krown.io",
            date: "2024-08-30",
            commission: "$120",
            status: "Pending",
        }
    ];

    const navigate = useNavigate();
    const [SelectedUsers, setSelectedUsers] = useState([]);
    const [AssignAffiliate] = useAssignAffiliateMutation();
    const [submitLoading, setSubmitLoading] = useState(false);

    const paramData = useParams();
    console.log(paramData, 'paramdta');



    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        const value = parseInt(e.target.value);

        if (isChecked) {
            setSelectedUsers([...SelectedUsers, value])
        }
        else {
            setSelectedUsers((prev) => {

                return prev?.filter((id) => {
                    return id !== value;
                }
                )
            })
        }
    }


    console.log(NotAssignedlistData, 'NotAssignedlistData');
    console.log(AssignedListData, 'AssignedlistData');

    const handleSubmit = () => {
        if (SelectedUsers?.length <= 0) {
            toast.error("Select at least one user")
        }
        else {

            let dataForApi = {
                "userId": SelectedUsers
            }
            AssignAffiliate({ Id: paramData?.id, data: dataForApi })
                .then((res) => {
                    if (res.error) {
                        console.log(res.error, 'res.error');
                        toast.error("Internal server error");
                        setSubmitLoading(false)
                    }
                    else {
                        console.log(res, 'res');
                        toast.success("Affiliate assigned successfull")
                        setSubmitLoading(false);
                        setSelectedUsers([])
                    }
                })
                .catch((err) => {
                    console.log(err, 'err');
                    toast.error("Internal server error");
                    setSubmitLoading(false)
                })
        }




        console.log(SelectedUsers, 'selectedUsers');

    }

    return (
        <>
            {
                notAssignedlistloading || Assignedlistloading ?
                    <div className=' w-full flex items-center justify-center'>
                        <span className=' w-fit flex  items-center justify-center animate-spin'>
                            <AiOutlineLoading3Quarters />
                        </span>
                    </div>

                    :
                    NotAssignedlistData?.length <= 0 ?
                        <div className=' w-full flex items-center justify-center'>
                            <span className=' w-fit flex  items-center justify-center'>
                                {/* <AiOutlineLoading3Quarters /> */}
                                No data found
                            </span>
                        </div>
                        :
                        <div className=' flex flex-col gap-3'>

                            <div>
                                <span className=' font-semibold text-[20px]'>

                                    Assigned Users
                                </span>
                                <div className='invoices-page'>
                                    <div className='table-container'>
                                        <table className=''>
                                            <thead>
                                                <tr>
                                                    <th>User Email</th>
                                                    <th>Country</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {

                                                    AssignedListData?.map((itm, indx) => (
                                                        <tr key={indx}>
                                                            <td>{itm?.user?.email}</td>
                                                            <td>{itm?.user?.country}</td>

                                                        </tr>
                                                    ))
                                                }
                                                <tr className="spacer-row">
                                                    <td colSpan="5"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className=' mt-2'>
                                <span className='font-semibold text-[20px]'>

                                    Not Assigned Users
                                </span>
                                <div className='invoices-page'>
                                    <div className='table-container'>
                                        <table className=''>
                                            <thead>
                                                <tr>
                                                    <th>User Email</th>
                                                    <th>Country</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {

                                                    NotAssignedlistData?.map((itm, indx) => (
                                                        <tr key={indx}>
                                                            <td>{itm?.email}</td>
                                                            <td>{itm?.country}</td>
                                                            <td className=' flex gap-2 items-center mt-1 pl-[30px]'>

                                                                <input value={itm?.id} checked={SelectedUsers?.includes(itm?.id)} onChange={handleCheckboxChange} type="checkbox" />

                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                                <tr className="spacer-row">
                                                    <td colSpan="5"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='w-full flex justify-end px-4'>
                                    <button onClick={() => handleSubmit()} className=' w-[120px] bg-black text-white rounded py-2 mt-3'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>

            }
        </>
    );
}

export default AssignAffiliate;