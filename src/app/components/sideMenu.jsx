import React from "react";
import CSSModules from "react-css-modules";
import SideMenuCSS from "../css/sideMenu.css";

class SideMenu extends React.Component {
    render() {
        return (

                <div>
                    <ul id="sideNav" className="side-nav fixed blue lighten-5" styleName="sideNav">
                        <li><a href="#" styleName="menuItem"><i className="material-icons left" styleName="menuIcon">fast_rewind</i>Menu</a></li>
                        <li><a className="center-align" >Overview</a></li>
                        <li><a className="center-align" >Control List</a></li>
                        <li><a className="center-align" >Issues</a></li>
                    </ul>
                </div>

        );
    }
}

SideMenu = CSSModules(SideMenu, SideMenuCSS);

export default SideMenu;


