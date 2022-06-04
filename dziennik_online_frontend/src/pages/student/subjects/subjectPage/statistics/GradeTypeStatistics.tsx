import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './style.css';
import Loading from "../../../../../components/loading/Loading";
import useAuth from "../../../../../context/AuthContext/useAuth";
import { getStudentChartData } from "../../../../../services/studentApi";
import {getStatisticsGradeTypeId} from "../../../../../services/teacherSubjects";

interface IGradeTypeStatistics {
    gradeTypeId: number
}

const GradeTypeStatistics = (props: IGradeTypeStatistics) => {
    const [statistics, setStatistics] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        const guid = user?.guid || '';

        getStudentChartData(props.gradeTypeId ,guid)
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

    const getLoading = () => {
        return (
            <div className={'loading'}>
                <Loading />
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
                    <CartesianGrid strokeDasharray="1 3" />
                    <XAxis dataKey="grade" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#7162D9" />
                </BarChart>
                : getLoading() }
        </Container>
    );

}

export default GradeTypeStatistics;