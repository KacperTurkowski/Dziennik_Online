import React from 'react';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import './styles.css';
import * as Icon from 'react-bootstrap-icons';

export const MenuContent = [
    {
        title: "Główna",
        icon: <Icon.HouseFill/>,
        link: "/"
    },
    {
        title: "Oceny",
        icon: <Icon.AwardFill/>,
        link: "/oceny"
    },
    {
        title: "Terminy",
        icon: <Icon.Calendar2CheckFill/>,
        link: "/terminy"
    },
    {
        title: "Przedmioty",
        icon: <Icon.ListUl/>,
        link: "/przedmioty"
    },
    {
        title: "Nauczyciele",
        icon: <Icon.PeopleFill/>,
        link: "/nauczyciele"
    },
    {
        title: "Komunikaty",
        icon: <Icon.BellFill/>,
        link: "/komunikaty"
    },
    {
        title: "Ustawienia",
        icon: <Icon.Gear/>,
        link: "/ustawienia"
    },
    {
        title: "Pomoc",
        icon: <Icon.QuestionCircleFill/>,
        link: "/pomoc"
    },

];

export default MenuContent;