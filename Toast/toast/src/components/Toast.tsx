import { useRef, useState } from "react"

type toastType={
id:number;
message:string,
type:string
}
const Toast = () => {

    const [toasts, settoasts] = useState<toastType[]>([])
    const Timeref=useRef<{ [key: number]: number }>({})
    const handleClose=(id:number)=>{
    clearTimeout(Timeref.current[id])
      settoasts((prevToast)=>{
        const filterarray=  prevToast.filter((toast)=>{
        return toast.id!==id;
      })
        return filterarray})

    }
    const handleAdd=(message:string,type:string)=>{
        const id=new Date().getTime();
        const newToasts=[...toasts,{id,message,type}]
        settoasts(newToasts)

       Timeref.current[id]=setTimeout(()=>handleClose(id),5000)



    }
  return (
    <div className="container">
        <div className="toast-container  fixed  top-5 right-0.5">
            {toasts.map(({id,message,type})=>{
                return(
                    <div key={id}className={`${type} toast p-2 px-2.5 w-[12rem] relative rounded m-2`} >
               
                {message} <span className="fixed right-[1rem]" onClick={()=>handleClose(id)}>X</span>
            </div>

                )
            }) 
                
            }
           
        </div>
        <div className="btn-Container">
            <button onClick={()=>handleAdd("Sucess",'success')}>Success Toast</button><br/>
            <button onClick={()=>handleAdd("Info","info")}>Info Toast</button><br/>
            <button onClick={()=>handleAdd("Warning","warning")}>Warning Toast</button><br/>
            <button onClick={()=>handleAdd("Error","error")}>Error Toast</button>
        </div>
    </div>
  )
}

export default Toast