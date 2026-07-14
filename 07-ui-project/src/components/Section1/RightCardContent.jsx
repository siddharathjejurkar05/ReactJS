const RightCardContent = (props) => {
    console.log(props);
    
  return (
   <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-bold  rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div className=''>
                <p className='text-shadow-2xs text-xl leading-normal text-white mb-4'>{props.intro}</p>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-1 rounded-full text-lg'>{props.tag}</button>
                <button className=' text-white font-medium px-3 py-1 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
  )
}

export default RightCardContent