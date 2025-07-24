import type React from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Buttoms = (props : Props) => {

  return (

    <>
        <button
            className="btn hover:bg-gray-600 transition"
            {...props}
        >
            {props.children}
        </button>
    
    </>
  )
}

export default Buttoms;


