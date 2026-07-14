import RightCard from "./RightCard"

const RightContent = (props) => {
    console.log(props.users);
    
  return (
    <div id='right' className='h-full flex overflow-x-auto flex-nowrap gap-3 p-6 w-2/3'>
        {props.users.map((function(elem,idx){
      return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} />
        }))}  
    </div>
  )
}

export default RightContent