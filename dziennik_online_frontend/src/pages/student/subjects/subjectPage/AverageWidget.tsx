import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Widget } from "../../../../components/widget/Widget";
import { Loader } from "./Loader";

interface IAverageWidget {
    avgGrade: number;
}

export const AverageWidget = ({avgGrade}: IAverageWidget): JSX.Element => {
    return (
        <Widget header={'Średnia z przedmiotu'} icon={<Icon.MortarboardFill/>}>
            <div>{avgGrade > 0 ?
                <h1 className={'text-center'}>{avgGrade.toPrecision(3)}</h1>
                : <Loader />}</div>
        </Widget>
    )
}