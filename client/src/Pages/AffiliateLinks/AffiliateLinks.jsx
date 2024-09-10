import React from 'react';
import { useNavigate } from 'react-router-dom';

function AffiliateLinks({ listData }) {

  console.log(listData, 'ListDataa');

  const navigate = useNavigate();


  return (
    <>
      <div className=' w-full flex flex-col h-full items-center gap-8 mt-4'>
        <div className=' w-full flex justify-end'>
          <span onClick={() => navigate('add')} className=' p-2 border cursor-pointer rounded bg-slate-100'>Create Links</span>
        </div>
        {
          listData?.map((itm) => {
            return <>

              <div className=' w-full flex gap-12 py-4 px-4 border bg-white shadow-md rounded-2xl'>
                <div className=' w-1/2 shadow-sm rounded-xl border p-2 bg-slate-100'>
                  <img src="https://partners.krownthemes.com/_next/image?url=%2Fimages%2Flocal.jpg&w=384&q=75" alt="" />
                </div>
                <div className=' w-full  p-2  rounded-xl mr-1 flex flex-col justify-between'>
                  <div className=' flex flex-col gap-6'>
                    <span className='font-semibold text-lg'>{itm?.name}</span>
                    <div className='flex flex-col gap-3'>

                      <span className=' text-[14.5px] border p-1 text-ellipsis rounded w-full flex items-center justify-center bg-slate-50 cursor-pointer'>
                        <a target='_blank' href={itm?.shortUrl}>
                          {itm?.shortUrl}
                        </a>
                      </span>
                      <div className=' w-full flex justify-between gap-4'>
                        <span className=' border p-1 w-full rounded flex items-center justify-center bg-slate-200 cursor-pointer'>Copy link</span>
                        <span className=' border p-1 w-full rounded flex items-center justify-center bg-slate-200 cursor-pointer'>
                          <a href={itm?.link} target='_blank'>
                            Visit link
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=' flex gap-5'>
                    <div className='border rounded px-2 py-1'>
                      {itm?.clickCount || '0'} Click
                    </div>
                    <div className='border rounded px-2 py-1'>
                      {itm?.purchases || '0'} Purchases
                    </div>
                  </div>
                </div>
              </div>
            </>
          })
        }
      </div>
    </>
  )
}

export default AffiliateLinks;