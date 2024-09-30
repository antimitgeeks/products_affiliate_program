import React from 'react';
import { ErrorMessage } from 'formik';
import { Input } from 'reactstrap';

function InputComponent(
    {
        value,
        onChange,
        placeholder,
        name,
        type,
        label,
        required,
        defaultValue,
        fileName,
        auto,
        disabled,
        id,

    }
) {
    return (

        <div className=' w-full relative'>
            {
                label && <span className=' pl-[3px] font-semibold text-[13px]'>{label}  {required && <span className='text-red-400'>*</span>} </span>
            }
            {
                type == "file" ?
                    <div className='py-2 flex gap-3 w-full form-control border h-10 rounded-[10px]'>
                        <label className='border-r-2 pr-3 text-[12px] cursor-pointer h-full w-1/4' htmlFor='filee'>Select file</label>
                        <Input
                            id='filee'
                            name={name}
                            onChange={onChange}
                            className='display-none text-[12px] hidden'
                            type='file'
                            accept='.jpg,.jpeg,.png' />


                        <span className='overflow-hidden text-[12px] truncate .. text-ellipsis w-4/5'>{fileName}</span>
                    </div>
                    :
                    <Input
                        value={value}
                        autoComplete={auto}
                        defaultValue={defaultValue}
                        name={name}
                        onChange={onChange}
                        className=' py-2 placeholder:text-[12px] w-full text-[12px] form-control border h-10 rounded-[10px]'
                        type={type}
                        placeholder={placeholder}
                        disabled={disabled}
                    />
            }

            {
                name &&
                <ErrorMessage className='text-red-400 absolute text-[14px] pl-[4px]  mt-0' name={name} component='div' />
            }
        </div>

    )
}
export default InputComponent;