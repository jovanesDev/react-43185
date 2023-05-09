import  { useState } from 'react'
import useChangeColor from './useChangeColor';

const useCount = (initial=1,stock=10) => {

    const [count, setCount] = useState(initial); // initial = 5 
    const handleSumar = () => {
        if(count < stock){
            setCount( count + 1);
        }
            
    } 
    const handleRestar = () => {
        if (count >= 1){
            setCount (count - 1)
        } 
    }
    const {decideColor} = useChangeColor()

  return {
    count,
    handleSumar,
    handleRestar,
    decideColor
  }
}

export default useCount