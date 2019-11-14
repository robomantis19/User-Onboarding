import React , {useEffect, useState}from 'react'; 
import {withFormik, Field, Form, ErrorMessage} from 'formik'; 

import * as Yup from 'yup'; 
import axios from 'axios'; 

function Form1 ({values, handleChange, errors, touched, status}) { 

    const [users, setUsers] = useState([]);


    useEffect(() => { 
        status && setUsers(users => 
            [...users, status]
        )
    }, [status])






    return (
        <div style={{  backgroundColor: `rgba(200, 121, 34, 0.9)`,
            marginTop: `200px`, height: `50px` , paddingTop: `25px`}}>
            <Form style={{display: `flex`, justifyContent: `space-around`}}>
                <Field
                    
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    
                />
                
                

                <Field
                    type="text" 
                    name="email" 
                    placeholder="Email"
                    
                />


                
               
                
                <Field 
                    type="text" 
                    name="password" 
                    placeholder="Password"
                    
                />
                <label>
                    Terms of Service
                    <Field
                        type="checkbox"
                        name="TOS"
                        placeholder = "Terms"
                        checked = {values.Terms}
                    />
                </label>

                <button type="submit">Submit</button>
            </Form>
            {touched.password && errors.password && (<p className="errors"> {errors.password}</p>) ||
                touched.email && errors.email && (<p className="errors"> {errors.email}</p>) ||
                touched.name && errors.name && (<p className="errors"> {errors.name}</p>)}
            {/* <ErrorMessage name="email"  />
            <ErrorMessage name="name"  />
            <ErrorMessage name="password"  /> */}
            <div style = {{ marginLeft: `400px` ,width: `800px`,height: `1200px`,}}>
                {users.map((item, index) => { 
                    return ( 
                        <ul style={{ width: `200px` , marginLeft: `100px`, marginTop: `50px`}}key={index}>
                            <li> User: {item.name}</li>
                            <li> Email: {item.email}</li>
                            <li> Password: {item.password}</li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}
const FormikSignUpForm = withFormik({
    mapPropsToValues({name, email, password, Terms}){
        return{
            name: name || "", 
            email: email || "", 
            password: password || "",
            TOS: Terms || false
        };
    },
    validationSchema: Yup.object().shape({

        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        TOS: Yup.bool(true).required()
    }),
    handleSubmit(values, {setStatus}) {
        axios.post('https://reqres.in/api/users', values)
        .then(res => { 
            setStatus(res.data);
            console.log(res); 
        })
        .catch(err => { 
            console.log(err.res); 
        })
    }

})(Form1);
    
export default FormikSignUpForm; 