
type paginationProp={
    pageNo:number,
    setpageNo: React.Dispatch<React.SetStateAction<number>>
}
const Pagination:React.FC<paginationProp> = ({pageNo,setpageNo}) => {

    const threePrevArr=Array.from(
        {length:3},
        (_,index)=>pageNo-1-index  //function 5-1-0 5-1-1 5-1-2 :4,3,2
    ).filter((value)=> value >0).reverse() //2,3,4

     const threeNextArr=Array.from(
        {length:4},
        (_,index)=>pageNo+index  //function 5+1,5+2,5+3: 6,7,8
    )
    
    const paginationArr=[...threePrevArr,...threeNextArr]


    const handlePrev=()=>{ 
        setpageNo(pageNo-1)
    }
    const handleNext=()=>{
        setpageNo(pageNo+1)
    }
 
  return (
    <div className='pagination-container'>
        {pageNo>1 &&  <div className="page-btn" onClick={()=>handlePrev()} >{"<"}</div> }
        {paginationArr.map((value)=>{
            return <div key={value} className={value==pageNo?"active-btn":"page-btn"} onClick={()=>setpageNo(value)}>{value}</div>
        })}
        

        <div className="page-btn" onClick={handleNext}>{">"}</div>
    </div>
  )
}

export default Pagination