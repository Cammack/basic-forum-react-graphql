import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import "./Nav.css"
import ReactModal from "react-modal";
import SideBarMenus from "./sidebar/SideBarMenus";

const Nav = () => {
    const { width } = useWindowDimensions();
    const [showMenu, setShowMenu ] = useState(false);

    const getMobileMenu = () => {
        if (width <= 768) {
            return (
                <FontAwesomeIcon
                    onClick={onClickToggle}
                    icon = {faBars} 
                    size="lg" 
                    className="nav-mobile-menu" />
            )
        }
        return null;
    }

    const onClickToggle = (event: React.MouseEvent<SVGSVGElement>) => {
        setShowMenu(!showMenu);
      };
    
    const onRequestClose = (event: React.MouseEvent<Element, globalThis.MouseEvent> | React.KeyboardEvent<Element>) => {
    setShowMenu(false);
    };

    return (
        <React.Fragment>
            <ReactModal
                className= "modal-menu"
                isOpen={showMenu}
                onRequestClose={onRequestClose}
                shouldCloseOnOverlayClick={true}>
                    <SideBarMenus />
            </ReactModal>
            <nav className="nav">
                {getMobileMenu()}
                <strong>SuperForum</strong>
            </nav>
        </React.Fragment>
    )
}

export default Nav;