import React from 'react'

const Form = (props) => {
  return (
    <form className={props.className} onSubmit={props.onSubmit}>
        {props.children}
    </form>
  )
}

Form.defaultProps = {
    className: "w-50 my-5 mx-auto shadow p-2",
    onSubmit: (e) => {
        e.preventDefault();
    }
}

export default Form