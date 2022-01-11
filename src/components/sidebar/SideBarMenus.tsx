import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SideBarMenus.css"
import { AppState } from "../../store/AppState";
import { UserProfileSetType } from "../../store/user/Reducer";
import {
    faUser,
    faRegistered,
    faSignInAlt,
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";
import Registration from "../auth/Registration";

const SideBarMenus = () => {
    const user = useSelector((state: AppState) => state.user );
    const [showRegister, setShowRegister] = useState(false);

    const dispatch = useDispatch()

    const onClickToggleRegister = () => {
        setShowRegister(!showRegister);
      };

    useEffect(() => {
        dispatch({
            type: UserProfileSetType,
            payload: {
                id: "1",
                userName: "testUser"
            }
        })
    }, [dispatch])

    return (
        <React.Fragment>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="menu-name">
                        {user?.userName}
                    </span>
                </li>
                    <FontAwesomeIcon icon={faRegistered} />
                    <span onClick={onClickToggleRegister}>Register</span>
                    <Registration isOpen={showRegister} onClickToggle={onClickToggleRegister}>Register</Registration>
            </ul>
        </React.Fragment>
    );
};

export default SideBarMenus;