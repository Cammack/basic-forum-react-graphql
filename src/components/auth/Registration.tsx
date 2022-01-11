import React, { FC, useState, useReducer } from "react";
//import userReducer from '../../store/user/Reducer'
import ReactModal from "react-modal";
import { ModalProps } from "../types/ModalProps";
import { isPasswordValid, PasswordTestResult } from "../../common/Validators/PasswordValidator";
import "../../App.css"
import "./Registration.css"
import userReducer from "./common/UserReducer";
import { allowSubmit } from "./common/Helpers";

const Registration: FC<ModalProps> = ({isOpen, onClickToggle}) => {

    const [{userName, password, email, passwordConfirm, resultMsg, isSubmitDisabled}, dispatch] = useReducer(userReducer, {
        userName: "cammack",
        password: "",
        email: "admin@cammack.com",
        passwordConfirm: "",
        resultMsg: "",
        isSubmitDisabled: true
    })

    const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({payload: e.target.value, type: "userName"})
        if(!e.target.value) {
            allowSubmit(dispatch, "Username cannot be empty", true);
        } else {
            allowSubmit(dispatch, "", false);
        }
    }

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({payload: e.target.value, type: "email"})
        if(!e.target.value) {
            allowSubmit(dispatch, "Email cannot be empty", true)
        } else {
            allowSubmit(dispatch, "", false)
        }
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({payload: e.target.value, type: "password"});
        const passwordCheck: PasswordTestResult = isPasswordValid(e.target.value);
        if(!passwordCheck.isValid) {
            allowSubmit(dispatch, passwordCheck.message, true);
            return;
        }
        passwordsSame(password, e.target.value);
    }

    const onChangePasswordConfirm = (e:
        React.ChangeEvent<HTMLInputElement>) => {
            dispatch({ payload: e.target.value, type: "passwordConfirm" });
            passwordsSame(password, e.target.value);
    };

    const passwordsSame = (passwordValue: string, passwordConfirmValue: string) => {
        if(passwordValue !== passwordConfirmValue) {
            allowSubmit(dispatch, "Passwords do not Match", true);
            return false;
        } else {
            allowSubmit(dispatch, "", false);
            return true;
        }
    };

    const onClickRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        onClickToggle(e);
    };

    const onClickCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClickToggle(e);
    };
    

    return (
    <ReactModal
        className="modal-menu"
        isOpen={isOpen}
        onRequestClose={onClickToggle}
        shouldCloseOnOverlayClick={true}>
        <form>
            <div className="reg-inputs">
                <div>
                    <label>Username</label>
                    <input type="text" value={userName} onChange={onChangeUserName} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} onChange={onChangeEmail} />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={onChangePassword} />
                </div>
                <div>
                    <label>Password Confirmation</label>
                    <input
                        type="password"
                        placeholder="Password Confirmation"
                        value={passwordConfirm}
                        onChange={onChangePasswordConfirm}
                    />
                </div>
            </div>
            <div className="reg-buttons">
                <div>
                    <button
                        style={{ marginLeft: ".5em" }}
                        className="action-btn"
                        disabled={isSubmitDisabled}
                        onClick={onClickRegister}> Register 
                    </button>
                    <button
                        style={{ marginLeft: ".5em" }}
                        className="cancel-btn"
                        onClick={onClickCancel}> 
                        Close 
                    </button>
                    <span className="reg-btn-right">
                    <strong>{resultMsg}</strong>
                    </span>
                </div>
            </div>
        </form>
    </ReactModal>
    );
}

export default Registration