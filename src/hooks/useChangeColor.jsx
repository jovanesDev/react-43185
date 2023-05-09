import React from 'react'

const useChangeColor = () => {

    const decideColor = (count) => {
        if (count <= 10){
            return 'green'
        }else if (count > 10 &&  count <=20) {
            return 'orange'
        }else {
            return 'red '
        }
    }



  return {decideColor}
}

export default useChangeColor