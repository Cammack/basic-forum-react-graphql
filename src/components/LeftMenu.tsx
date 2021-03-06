import React, { useEffect, useState } from "react";
import "./LeftMenu.css";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import Category from "../models/Category";
import { getCategories } from "../services/DataService";

const LeftMenu = () => {
    const { width } = useWindowDimensions();

    const [categories, setCategories] = useState<JSX.Element>(<div>Left Menu</div>);

    useEffect(() => {
        getCategories()
        .then((categories: Array<Category>) => {
            const cats = categories.map((cat) => {
                return <li key={cat.id}>{cat.name}</li>;
            });
            setCategories(<ul className="categories">{cats}</ul>);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    if(width <= 768) {
        return null;
    }
    return <div className="leftmenu">{categories}</div>
}

export default LeftMenu;