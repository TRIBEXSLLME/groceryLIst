import  { useEffect } from 'react'

const Alert = ({type, msg , removeAlert , list}) => {
  useEffect(()=>{
    const timeout = setTimeout(() => {
      console.log('Timeout expired after 3 seconds');
    }, 300);
    return ()=> clearTimeout(timeout)
  },[list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
