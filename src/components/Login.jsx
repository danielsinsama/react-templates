import React from "react";
import '../style/Login.css'
import imgGoogle from '../img/logoGoogle.jpg'
import { useHistory } from "react-router-dom";
import SvgLogin from "./extras/SvgLogin";
import { Formik, Form, ErrorMessage, Field } from "formik";
const Login = () =>{
    let history = useHistory()
    const handleClick = () =>{
        history.push("Register")
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
                                    email:'',
                                    password:''
                                }}
                                validate={(valores) => {
                                    let errores = {};
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
                                            Login to curriii
                                        </h2>
                                        <h3>Lorem, ipsum dolor.</h3>
                                        <div className="notice">
                                            Notice:
                                            <div className="txtNotice">
                                                <p>Register your account and join us with this</p>
                                                <div className="linkRegister"
                                                    onClick={
                                                        handleClick
                                                    }
                                                >link</div>
                                            </div>
                                        </div>
                                        <Form className="formLogin">
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
                                            
                                            <button>
                                                Login
                                            </button>
                                            <div className="btnGoogle">
                                                <p>Login with</p>
                                                <img src={imgGoogle} alt="" />
                                            </div>
                                        </Form>
                                    </div>
                                )}
                            </Formik> 
                        </div>
                    </div>
                    
                    <div className='textoLogin'>
                        <p>LOGIN</p>
                    </div>
                    
                </section>
            </div>
        </>
    )
}

export default Login
