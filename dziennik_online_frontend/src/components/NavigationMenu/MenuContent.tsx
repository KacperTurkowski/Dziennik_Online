import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './styles.css';
import { IMenuContent } from "./interfaces/IMenuContent";

const menuContent: IMenuContent[] = [
    {
        title: "Główna",
        icon: <Icon.HouseFill />,
        link: "/"
    },
    {
        title: "Oceny",
        icon: <Icon.AwardFill />,
        link: "/oceny"
    },
    {
        title: "Terminy",
        icon: <Icon.Calendar2CheckFill />,
        link: "/terminy"
    },
    {
        title: "Przedmioty",
        icon: <Icon.ListUl />,
        link: "/przedmioty"
    },
    {
        title: "Nauczyciele",
        icon: <Icon.PeopleFill />,
        link: "/nauczyciele"
    },
    {
        title: "Komunikaty",
        icon: <Icon.BellFill />,
        link: "/komunikaty"
    },
    {
        title: "Ustawienia",
        icon: <Icon.Gear />,
        link: "/ustawienia"
    }
];

export default menuContent;