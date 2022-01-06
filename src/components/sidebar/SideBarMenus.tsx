import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
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

const SideBarMenus = () => {
    const user = useSelector((state: AppState) => state.user );

    const dispatch = useDispatch()

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
                <FontAwesomeIcon icon={faUser} />
                <span className="menu-name">
                    {user?.userName}
                </span>
            </ul>
        </React.Fragment>
    );
};

export default SideBarMenus;