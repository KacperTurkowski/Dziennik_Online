import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './style.css';
import Loading from "../../../components/loading/Loading";
import useAuth from "../../../context/AuthContext/useAuth";
import {getStatisticsGradeTypeId} from "../../../services/teacherSubjects";

interface IGradeTypeStatistics {
    userGuid: string,
    gradeTypeId: number
}

const GradeTypeStatistics = (props: IGradeTypeStatistics) => {
    const [statistics, setStatistics] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        const guid = user?.guid || '';

        getStatisticsGradeTypeId('b08cf6dd-4793-482c-8eae-0d0823b678a9',1001)
            .then(statistics => {
                const preparedStatistics = statistics.map((statistic: any) => {
                    return {
                        grade: statistic['grade'],
                        count: statistic['count'],
                        students: statistic['students']
                    }
                })
                setStatistics(preparedStatistics);
            })
    }, [])

    const CustomTooltip = ({ active, payload, label }: any) => {
        const prepareStudents = (label: string) => {
            const grades: [] | undefined = statistics
                .find((statistic: any) => statistic['grade'] == label)

            return grades && (grades['students'] as [])
                .map((grade: any, index: number) => {
                    return (
                        <li key={index}>{grade['name']} {grade['surname']}</li>
                    )
                })
        }

        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    Uczniowie z ocena {label}:
                    <ul className="intro">
                        {prepareStudents(label)}
                    </ul>
                </div>
            );
        }

        return null;
    };

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
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="count" fill="#7162D9" />
                </BarChart>
                : getLoading() }
        </Container>
    );

}

export default GradeTypeStatistics;