
import { useEffect, useState } from 'react'
import Pagination from './Pagination'
import axios from 'axios'

type ImageData = {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

const Page = () => {

    const [data, setdata] = useState<ImageData[]>([])
    const [pageNO, setpageNO] = useState<number>(1)
    useEffect(()=>{
        axios
        .get(`https://picsum.photos/v2/list?page=${pageNO}&limit=5`)
        .then((res)=>setdata(res.data))


    },[pageNO])
   
  return (
    <>
    <div className='container'>
       <div className="post-container">
        {data.map((item,index)=>{
            return <img key={index} src={item.download_url} alt="image" />
        })}
           
       </div>
   
    </div>
    <Pagination pageNo={pageNO} setpageNo={setpageNO} />
    </>

  )
}

export default Page