import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios'; 

const OnForm = ({values, errors, touched, status}) => { 
   const [onboard, setOnboard] = useState([]);
   console.log("onboard", onboard);
    useEffect(() => {
        if(status){
          setOnboard([...onboard, status])
        }
    }, [status]);

    return (
        <div>
            <Form>
                <Field
                    type="text" 
                    name="Name"
                    placeholder="Name Here"
                />{touched.Name && errors.Name && (<p>{errors.Name}</p>)}
                <Field
                    type="text" 
                    name="Email"
                    placeholder="Email Here"
                />{touched.Email && errors.Email&& (<p>{errors.Email}</p>)}
                <Field
                    type="text" 
                    name="Password"
                    placeholder="Password Here"
                />{touched.Password && errors.Password && (<p>{errors.Password}</p>)}
                <Field
                    type="checkbox" 
                    name="TOS"
                    placeholder="Checkbox Here"
                />{touched.TOS && errors.TOS && (<p>{errors.TOS}</p>)}
                <button>Submit</button>
            </Form>
            
            {onboard.map(item => ( 
                <ul className="square" key={item.id}>
                    <li>Name: {item.Name}</li>
                    <li>Email: {item.Email}</li>
                    <li>Password: {item.Password}</li>
                    <li>TOS: {item.TOS}</li> 
                </ul>
            ))}
        </div>
    )
}
const FormikOnboardUser = withFormik({
    mapPropsToValues({Name, Email, Password, TOS}){
        return {
            Name: Name || "",
            Email: Email || "", 
            Password: Password || "", 
            TOS: TOS || false
            
        };
    },
    validationSchema:  Yup.object().shape({
        Name: Yup.string().required("Name error"), 
        Email: Yup.string().required(),
        Password: Yup.string().required(), 
        TOS: Yup.boolean().required("TOS required")
    }),
    handleSubmit(values, {setStatus})  { 
        axios.post('https://reqres.in/api/users/', values)
        .then(res => {
            setStatus(res.data);
            console.log(res);
        })
        .catch(err => { 
            console.log('database error', err.res);
        })
    }
})(OnForm)
console.log("This hoc", FormikOnboardUser)
export default FormikOnboardUser;