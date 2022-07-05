import React from 'react'
import {useForm} from 'react-hook-form'

function Registration() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onFormSubmit = (userData) => {
        console.log(userData)
    }
    const styles = {
        bold:{
            fontWeight : 'bold'
        }
    }
    return(
        <div className = 'row mt-5'>
            <h1 className = 'text-center'>User Registration Form</h1>
            <div className = 'col-11 col-sm-8 col-md-6 mx-auto mt-3'>
                <form onSubmit = {handleSubmit(onFormSubmit)}>
                    <div className = 'mb-3'>
                        <label htmlFor = 'username' style={styles.bold}>Username</label>
                        <input type = 'text' id = 'username' className = 'form-control' autocomplete = 'off' {... register('username', {required : true, minLength: 4, maxLength: 30})}/>
                        {errors.username?.type === 'required' && <p className = 'text-danger mt-2'>*Username is required</p>}
                        {errors.username?.type === 'minLength' && <p className = 'text-danger mt-2'>*Min length should be 4</p>}
                        {errors.username?.type === 'maxLength' && <p className = 'text-danger mt-2'>*Max length should be 30</p>}
                    </div>
                    <div className = 'mb-3'>

                        <label htmlFor = 'email'>Email</label>
                        <input type = 'email' id = 'email' className = 'form-control' {... register('email', {required: true})}/>
                        {errors.email?.type === 'required' && <p className = 'text-danger mt-2'>*Email is required</p>}
                    </div>
                    <div className = 'mb-3'>
                        <label htmlFor = 'dob'>Date Of Birth</label>
                        <input type = 'date' id = 'dob' className = 'form-control' {... register('date_of_birth', {required : true})}/>
                        {errors.date_of_birth?.type === 'required' && <p className = 'mt-2 text-danger'>*Date of birth is required</p>}
                    </div>
                    <div className = 'mb-3'>
                        <label id = 'select'>Select gender</label>
                        <div className = 'form-check'>
                            <input type = 'radio' id = 'male' className = 'form-check-input' {... register('gender')} value = 'male'/>
                            <label htmlFor = 'male' className='form-check-label'>Male</label>
                        </div>
                        <div className = 'form-check'>
                            <input type = 'radio' id = 'female' className = 'form-check-input' {... register('gender')} value = 'female'/>
                            <label htmlFor = 'female' className = 'form-check-label'>Female</label>
                        </div>
                    </div>
                    <div className = 'mb-3'>
                        <label>Select Skills</label>
                        <div className = 'form-check'>
                            <input type = 'checkbox' id = 'html' className = 'form-check-input' {... register('Skills')} value = 'HTML'/>
                            <label htmlFor = 'html' className = 'form-check-label'>HTML</label>
                        </div>
                        <div className = 'form-check'>
                            <input type = 'checkbox' id = 'css' className = 'form-check-input' {... register('Skills')} value = 'CSS'/>
                            <label htmlFor = 'css' className = 'form-check-label'>CSS</label>
                        </div>
                        <div className = 'form-check'>
                            <input type = 'checkbox' id = 'Bootstrap' className = 'form-check-input' {... register('Skills')} value = 'Bootstrap'/>
                            <label htmlFor = 'Bootstrap' className = 'form-check-label'>Bootstrap</label>
                        </div>
                        <div className = 'form-check'>
                            <input type = 'checkbox' id = 'Javascript' className = 'form-check-input' {... register('Skills')} value = 'Javascript'/>
                            <label htmlFor = 'Javascript' className = 'form-check-label'>Javascript</label>
                        </div>
                        <div className = 'form-check'>
                            <input type = 'checkbox' id = 'react' className = 'form-check-input' {... register('Skills')} value = 'React'/>
                            <label htmlFor = 'react' className = 'form-check-label'>React</label>
                        </div>
                    </div>
                    <div className = 'mb-3'>
                        <label htmlFor = 'branch'>Branch</label>
                        <select id = 'branch' className = 'form-select'>
                            <option value = '' disabled selected>Select a branch</option>
                            <option value = 'cse'>CSE</option>
                            <option value = 'ece'>ECE</option>
                            <option value = ' it'> IT</option>
                            <option value = 'eee'>EEE</option>
                        </select>
                    </div>
                    <div className = 'mb-3'>
                        <label htmlFor = 'feedback'>Feedback</label>
                        <textarea id = 'feedback' rows = '5' className = 'form-control' {... register('feedback')}></textarea>
                    </div>
                    <button type = 'submit' className = 'mb-5 btn btn-success w-100'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Registration

