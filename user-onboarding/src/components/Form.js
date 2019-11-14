import React from 'react'; 
import {withFormik} from 'formik'; 

function Form ({values, handleChange}) { 


    return (
        <div style={{ marginTop: `200px`, backgroundColor: `brown`, height: `50px` , paddingTop: `25px`}}>
            <form style={{display: `flex`, justifyContent: `space-around`}}>
                <label>
                    Name: 
                    <input 
                    type="text" 
                    name="name" 
                    value={values.name}
                    onChange={handleChange}/>
                </label>
                <label>
                    Email: 
                    <input 
                    type="text" 
                    name="email" 
                    value={values.email}
                    onChange={handleChange}/>
                </label>
                <label>
                    Password: 
                    <input 
                    type="text" 
                    name="password" 
                    value={values.password}
                    onChange={handleChange}/>
                </label>
            </form>
        </div>
    )
}
const FormikSignUpForm = withFormik({
    mapPropsToValues(){
        return{
            name: "Test", 
            email: "emailTest", 
            password: "passwordTest"
        };
    }

})(Form);
    
export default FormikSignUpForm; 