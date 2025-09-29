import { useEffect, useRef, useState } from "react"


const OTP = ({otplength=6}) => {
    const [otpField, setotpField] = useState(new Array(otplength).fill(""))
    const ref=useRef<(HTMLInputElement | null)[]>([])
    const handleKeyDown=(e: React.KeyboardEvent<HTMLInputElement>,index:number)=>{
        const key=e.key // key will show what is pressed
        const copyOTPFields=[...otpField]

       if(key==='ArrowLeft') {
        if(index>0)ref.current[index-1]?.focus()

       }
       if(key==='ArrowRight'){
       if(index+1 < otpField.length)ref.current[index+1]?.focus() 

       }
       if(key==="Delete" || key==="Backspace"){
        copyOTPFields[index]=""
        setotpField(copyOTPFields)
         if(index>0)ref.current[index-1]?.focus()
        return;
       }
        if(isNaN(Number(key))){
            return;
        }
       
        copyOTPFields[index]=key;
        if(index+1 < otpField.length)ref.current[index+1]?.focus() // so that after last input it will not go further
        
        setotpField(copyOTPFields)

    }
    useEffect(()=>{
        ref.current["0"]?.focus() // so that as the page load it focus on first box
    },[])

  return (
    <div className="container">
        {otpField.map((value,index)=>{
            return <input type="text" key={index} value={value} onKeyDown={(e)=>handleKeyDown(e,index)}
                ref={(currentInput)=>(ref.current[index]=currentInput)}
            />
        })}
    
    </div>
  )
}

export default OTP