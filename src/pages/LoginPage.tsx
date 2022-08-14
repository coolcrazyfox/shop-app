import React from 'react';
import s from '../styles/Login.module.css'

const LoginPage = () => {
    return (
        <section>
            <div className={s.color} ></div>
            <div className={s.color}></div>
            <div className={s.color}></div>
            <div className={s.box}>
                <div className={s.square} ></div>
                <div className={s.square} ></div>
                <div className={s.square} ></div>
                <div className={s.square} ></div>
                <div className={s.square} ></div>
                {/*<div className="square" style={{"--i:0;"}}></div>*/}
                {/*<div className="square" style="--i:1;"></div>*/}
                {/*<div className="square" style="--i:2;"></div>*/}
                {/*<div className="square" style="--i:3;"></div>*/}
                <div className={s.container}>
                    <div className={s.form}>
                        <h2 data-text="&nbsp;Login Form">&nbsp;Login Form</h2>
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
                            <p className={s.forget}>Forgot Password ? <a href={'#'}>Click here</a></p>
                            <p className={s.forget}>Don't have an account ? <a href={'#'}>Sign up</a></p>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default LoginPage;
