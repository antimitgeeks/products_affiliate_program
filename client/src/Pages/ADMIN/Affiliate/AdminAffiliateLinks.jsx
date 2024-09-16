import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLink } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Pagination } from '@mui/material';

function AdminAffiliateLinks({ listData, loading, setCurrentPage, currentPage }) {

    console.log(listData, 'ListDataa');

    const navigate = useNavigate();

    const ManageAssignClick = (id) => {
        // console.log(id,'affiliate id')
        navigate(`assign/${id}`)
    }

    const handlePageChange = (e, page) => {
        setCurrentPage(page)
    }

    return (
        <>
            {
                loading ?
                    <>
                        <div className=' w-full flex items-center justify-center'>
                            <span className=' w-fit flex  items-center justify-center animate-spin'>
                                <AiOutlineLoading3Quarters />
                            </span>
                        </div>
                    </>
                    :
                    listData?.result?.length <= 0 ?
                        <div className=' w-full flex items-center justify-center'>
                            <span className=' border bg-white py-2 rounded w-full flex items-center justify-center'>
                                No data found
                            </span>
                        </div>
                        :
                        <div className=' w-full flex flex-col h-full items-center gap-8 '>
                            <div className=' w-full flex items-center justify-between'>
                                <span>
                                    {/* <H5 className="text-[#547f96] font-semibold">
                                  Affiliate Links
                                    </H5> */}
                                </span>
                                {/* <Btn className="bg-white text-black" onClick={() => navigate('add')}>
                                 Create Links
                                  </Btn> */}
                                <span onClick={() => navigate('add')} className=' cursor-pointer p-2 bg-black text-white rounded'>
                                    Create Links
                                </span>
                            </div>
                            <div className='w-full flex flex-col h-full items-center gap-8 mt-3 '>

                                {
                                    listData?.map((itm) => {
                                        return <>

                                            <div className=' w-full flex gap-12 py-[28px] px-4 border bg-white shadow-md rounded-2xl'>
                                                <div className='w-1/2 shadow-sm rounded-xl h-[220px] p-2 bg-slate-100 flex items-center justify-center'>
                                                    {itm?.imageUrl ? (
                                                        <img
                                                            className='w-full h-full object-fit rounded-xl'
                                                            src={`https://${itm?.imageUrl}`}
                                                            alt="Affiliate Link"
                                                        />
                                                    ) : (
                                                        <span className="text-gray-500">No Image Available</span>
                                                    )}
                                                </div>

                                                <div className=' w-full  p-1  rounded-xl mr-1 flex flex-col justify-between'>
                                                    <div className=' flex flex-col gap-5'>
                                                        <span className='font-semibold text-lg'>{itm?.name}</span>
                                                        <div className='flex flex-col gap-3'>

                                                            <span className=' flex gap-2 items-center text-[14.5px] border p-2 text-ellipsis rounded w-full flex items-center justify-center  cursor-pointer'>
                                                                <FaLink />
                                                                {console.log(itm?.shortUrl)}
                                                                <a href={itm?.link} target='_blank'>
                                                                    {/* Visit link */}
                                                                    {itm?.shortUrl}
                                                                </a>
                                                            </span>
                                                            <div className=' w-full flex justify-between gap-4'>
                                                                <span onClick={() => { navigator.clipboard.writeText(itm?.shortUrl) }} className=' border p-[6px] w-full rounded flex items-center justify-center bg-slate-200 cursor-pointer'>
                                                                    Copy link
                                                                </span>
                                                                <span className=' border p-[6px] w-full rounded flex items-center justify-center bg-slate-200 cursor-pointer'>
                                                                    <a href={itm?.link} target='_blank'>
                                                                        Visit link
                                                                    </a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=' flex gap-6'>
                                                        {/* <div className='border rounded px-2 py-1 cursor-pointer'>
                                                Assign 
                                            </div>
                                            <div className='border rounded px-2 py-1 cursor-pointer'>
                                                Assigned list
                                            </div> */}
                                                        <div onClick={() => ManageAssignClick(itm?.id)} className='border rounded px-2 py-1 cursor-pointer'>
                                                            Manage Assign
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    })
                                }
                                <div className='flex'>
                                    {/* <Pagination
                                        shape="rounded"
                                        variant="outlined"
                                        color="standard"
                                        page={currentPage}
                                        count={3}
                                        onChange={handlePageChange}
                                    /> */}
                                </div>
                            </div>
                        </div>
            }

        </>
    )
}

export default AdminAffiliateLinks;