import React from 'react';
import s from './Login.module.css'

const LoginPage = () => {
    return (
        <section>
            <div className={s.color} ></div>
            <div className={s.color}></div>
            <div className={s.color}></div>
            <div className={s.box}>
                <div className={s.container}>
                    <div className={s.form}>
                        <h2>Login Form</h2>
                        <form >
                            <div className={s.inputBox}>
                                <input type="text" placeholder={"Username"}/>
                            </div>
                            <div className={s.inputBox}>
                                <input type="password" placeholder={"Password"}/>
                            </div>
                            <div className={s.inputBox}>
                                <input type="submit" value={"Login"}/>
                            </div>
                            <p className={s.forget}>Forgot Password?<a href={'#'}>Click here</a></p>
                            <p className={s.forget}>Don't have an account?<a href={'#'}>Sing up</a></p>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default LoginPage;
