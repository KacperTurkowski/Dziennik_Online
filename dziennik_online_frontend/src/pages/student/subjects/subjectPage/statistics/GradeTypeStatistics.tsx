import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import Loading from "../../../../../components/loading/Loading";
import useAuth from "../../../../../context/AuthContext/useAuth";
import { getStudentChartData } from "../../../../../services/studentApi";
import './style.css';

interface IGradeTypeStatistics {
    gradeTypeId: number
}

const GradeTypeStatistics = (props: IGradeTypeStatistics) => {
    const [statistics, setStatistics] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        const guid = user?.guid || '';

        getStudentChartData(props.gradeTypeId, guid)
            .then(statistics => {
                const preparedStatistics = statistics.map((statistic: any) => {
                    return {
                        grade: statistic['grade'],
                        count: statistic['count'],
                    }
                })
                setStatistics(preparedStatistics);
            })
    }, [])

    const CustomTooltip = ({active, payload, label}: any) => {
        if ( active && payload && payload.length ) {
            return (
                <div className="custom-tooltip">
                    Liczba osób, które otrzymały ocene {label} : <strong>{payload[0].value}</strong>
                </div>
            );
        }

        return null;
    };

    const getLoading = () => {
        return (
            <div className={'loading'}>
                <Loading/>
            </div>
        )
    }

    return (
        <Container className={'statistics-modal-container'}>
            {statistics.length > 0 ?
                <BarChart
                    data={statistics}
                    width={930} height={500}
                >
                    <CartesianGrid strokeDasharray="1 3"/>
                    <XAxis dataKey="grade"/>
                    <YAxis/>
                    <Tooltip content={<CustomTooltip/>}/>
                    <Bar dataKey="count" fill="#7162D9"/>
                </BarChart>
                : getLoading()}
        </Container>
    );

}

export default GradeTypeStatistics;