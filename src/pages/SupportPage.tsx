import React from 'react';
import s from "../styles/Login.module.css";

const SupportPage = () => {
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
                <div className={s.container}>
                    <div className={s.form}>
                        <h2 data-text="&nbsp;Support Form">&nbsp;Support Form</h2>
                        <form >
                            <div className={s.inputBox}>
                                <input type="text" placeholder={"Username"}/>
                            </div>
                            <div className={s.inputBox}>
                                <input type="text" placeholder={"Your text "}/>
                            </div>
                            <div className={s.inputBox}>
                                <input type="submit" value={"Send"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SupportPage;
