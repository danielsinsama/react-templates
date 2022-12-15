import React from "react";
import '../style/Login.css'
import imgGoogle from '../img/logoGoogle.jpg'
import SvgLogin from "./extras/SvgLogin";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useHistory } from "react-router-dom";

const Register = () =>{
    let history = useHistory()
    const handleClick = () =>{
        history.push("/")
    }
    return(
        <>
            <div>
                <section className='contenedorLogin'>
                    <div className="seccionLogin">
                        <div className='tituloLogin'>
                            <h1>
                                Curriii
                            </h1>
                        </div>
                        <div className='contenidoLogin'>
                            <div className='imgLogin'>
                                <SvgLogin/>
                            </div>
                            <Formik
                                initialValues={{
                                    name:'',
                                    email:'',
                                    password:''
                                }}
                                validate={(valores) => {
                                    let errores = {};
                                    if (!valores.name) {
                                        errores.name = 'Por favor ingrese su nombre';
                                    }else if (
                                        !/^[a-zA-ZÀ-ÿ\s]{1,80}$/.test(
                                            valores.name
                                        )
                                    ) {
                                        errores.name =
                                            'El nombre sólo puede contener letras y espacios';
                                    }
                                    if (!valores.email) {
                                        errores.email = 'Por favor ingrese su email';
                                    }
                                    else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                                        errores.email =
                                            'El email tiene caracteres no válidos';
                                    }
                                    if (!valores.password) {
                                        errores.password =
                                            'Por favor ingrese su contraseña';
                                    } else if (
                                        !/^[a-zA-Z0-9_.+-]+$/.test(valores.password)
                                    ) {
                                        errores.password =
                                            'La contraseña tiene caracteres no válidos';
                                    }
                                    return errores;
                                }}
                            >
                                {({errors})=>(
                                    <div className='formularioLogin'>
                                        <h2>
                                            Sign up to Curriii
                                        </h2>
                                        <div className="linkLogin">
                                            <h3>Already have an account?.</h3>
                                            <div className="linkLogin"
                                                onClick={handleClick}
                                            >Sign in</div>
                                        </div>
                                        
                                        <Form className="formLogin">
                                            <div>
                                                <label>Name</label>
                                                <Field type="text" name='name'/>
                                                <ErrorMessage
                                                    name="name"
                                                    component={() => (
                                                        <div 
                                                        className="msjError"
                                                        >
                                                            <span>
                                                                <i className="fas fa-times-circle"></i>
                                                            </span>
                                                            <span>{errors.name}</span>
                                                        </div>
                                                    )}
                                                />
                                            </div>
                                            <div>
                                                <label>Email</label>
                                                <Field type="text" name='email'/>
                                                <ErrorMessage
                                                    name="email"
                                                    component={() => (
                                                        <div 
                                                        className="msjError"
                                                        >
                                                            <span>
                                                                <i className="fas fa-times-circle"></i>
                                                            </span>
                                                            <span>{errors.email}</span>
                                                        </div>
                                                    )}
                                                />
                                            </div>
                                            <div>
                                                <label>Password</label>
                                                <Field type="password" name="password"/>
                                                <ErrorMessage
                                                    name="password"
                                                    component={() => (
                                                        <div 
                                                        className="msjError"
                                                        >
                                                            <span>
                                                                <i className="fas fa-times-circle"></i>
                                                            </span>
                                                            <span>{errors.password}</span>
                                                        </div>
                                                    )}
                                                />
                                            </div>
                                            
                                            <button
                                                >
                                                Sign up
                                            </button>
                                            <div className="btnGoogle">
                                                <p>Create at account with</p>
                                                <img src={imgGoogle} alt="" />
                                            </div>
                                        </Form>
                                    </div>
                                )}
                            </Formik>  
                        </div>
                    </div>
                    
                    <div className='textoLogin'>
                        <p>CREATE</p>
                    </div>
                    
                </section>
            </div>
        </>
    )
}

export default Register
