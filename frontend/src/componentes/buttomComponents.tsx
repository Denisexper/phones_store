import type React from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Buttoms = (props : Props) => {

  return (

    <>
        <button
            className="btn btn-error hover:bg-amber-100 transition"
            {...props}
        >
            {props.children}
        </button>
    
    </>
  )
}

export default Buttoms;


