import React from 'react'

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        return  qiymat = e.target[0].value
    }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name
            </label>
            <input id='name' type="text" placeholder='please Your name' />
            <button>Submit</button>
        </form>
        <p>{qiymat}</p>
    </div>
  )
}

export default Form