import React,{useState} from 'react';

const Form = () => {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
    return (<>
        <div className="relative ">
            <div className='min-h-screen bg-pink-100 flex flex-col justify-center'>
                <div className='max-w-md w-full mx-auto'>
                    <div className='text-3xl font-bold text-gray-900 mt-2 text-center'>For Patient</div>
                    <div className='max-m-md w-full mx-auto mt-4 bg-white p-8 pr-6 border border-gray-300'>
                        <form action="" className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="" className='text-sm font-bold text-black block'>Name</label>
                                <input 
                               onChange={handleChange}
                                 type="text" name='name' value={inputs.name}  className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div>
                                <label htmlFor="" className='text-sm font-bold text-black block'>Email</label>
                                <input onChange={handleChange} value={inputs.email}  type="email" name='email' className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div>
                                <label htmlFor="" className='text-sm font-bold text-black block'>Phone Number</label>
                                <input onChange={handleChange} value={inputs.number}  type="number" name='number' className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div className='text-xl font-bold text-gray-900'>Appointment Request</div>
                            <div>
                                <label htmlFor="" className='text-[16px]  text-black block'>Date</label>
                                <input type="date" onChange={handleChange} value={inputs.Appointmentrequest} name="Appointmentrequest" className='rounded' required  />
                                <div className='py-4 ml-0'>
                                    <label>
                                     <input onChange={handleChange}  type="hidden" name="Morning desired" value="no" />
                                    <input onChange={handleChange}  type="checkbox" name="Morning desiredd" value="yes" />
                                        <label className='pl-2 pr-2'>Morning</label>
                                    </label>
                                    <label className='ml-2'>
                                        <input onChange={handleChange}  defaultChecked type="hidden" name="Afternoondesired" value="no" />
                                            <input onChange={handleChange}  type="checkbox" name="Afternoondesired" value="yes" />
                                                <label className='pl-2 pr-2'>Afternoon</label>
                                            </label>
                                 </div>
                                 <label htmlFor="" className='text-[15px] font-bold text-black block pb-2'>Confirmation requested by</label>
                                    <div className='inline' >
                                        <label >
                                            <input onChange={handleChange} type="radio" name="Confirmation requested by" value="email" checked/>
                                                <label className='pl-2 pr-2'>Email</label>
                                        </label>
                                        <label className='pl-2 '>
                                            <input onChange={handleChange} type="radio" name="Confirmation requested by" value="phone" />
                                            <label className='pl-2 '>Phone Call</label>
                                        </label>
                                    </div>
                            
                                <div className='mt-2' >
                                    <button  className="w-[50%] py-2 rounded-md text-white  bg-pink-400">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
         

            </div>
            
        </div>
    
        </>
    )
}
export default Form;