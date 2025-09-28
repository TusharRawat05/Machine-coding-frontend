import React, { useState } from 'react'

const Star = ({starCount=5}) => {
    const [starValue, setstarValue] = useState<number>()
  return (
    <div className='container'>
        {
            new Array(starCount).fill(0).map((value,index)=>{
                return (
              <span className={index<starValue ? "gold":"" } onClick={()=>setstarValue(index+1)} key={index}>&#9733;</span>

                )
            })
        }
    </div>
  )
}

export default Star