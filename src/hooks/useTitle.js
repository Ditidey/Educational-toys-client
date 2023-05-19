import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}|CCT`
    },[title])
}

export default useTitle;