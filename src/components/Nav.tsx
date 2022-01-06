import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import "./Nav.css"

const Nav = () => {
    const { width } = useWindowDimensions();

    const getMobileMenu = () => {
        if (width <= 768) {
            return (
                <FontAwesomeIcon icon = {faBars} size="lg" className="nav-mobile-menu" />
            )
        }
        return null;
    }


    return (
        <nav className="nav">
            {getMobileMenu()}
            <strong>SuperForum</strong>
        </nav>
    )
}

export default Nav;