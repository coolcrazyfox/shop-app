import React from 'react';

const LoginPage = () => {
    return (
        <section>
            <div className={'color'} ></div>
            <div className={'color'}></div>
            <div className={'color'}></div>
            <div className={'box'}>
                <div className="container">
                    <div className="form">
                        <h2>Login Form</h2>
                        <form >
                            <div className="inputBox">
                                <input type="text" placeholder={"Username"}/>
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder={"Password"}/>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value={"Login"}/>
                            </div>
                            <p className="forget">Forgot Password?<a href={'#'}>Click here</a></p>
                            <p className="forget">Don't have an account?<a href={'#'}>Sing up</a></p>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default LoginPage;
