import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './style.css';
import {
    getFakeStatisticsForGradeTypeId,
} from "../../../services/teacherSubjects";

interface IGradeTypeStatistics {
    userGuid: string,
    gradeTypeId: number
}

const GradeTypeStatistics = (props: IGradeTypeStatistics) => {
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        getFakeStatisticsForGradeTypeId()
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
                .map((grade: any) => {
                    return (
                        <li>{grade['name']} {grade['surname']}</li>
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

    return (
        <Container fluid={true}>
            {statistics.length > 0 ?
                <BarChart
                    data={statistics}
                    width={730} height={450}
                >
                    <CartesianGrid strokeDasharray="1 3" />
                    <XAxis dataKey="grade" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="count" fill="#7162D9" />
                </BarChart>
                : <h3>Ładowanie</h3> }
        </Container>
    );

}

export default GradeTypeStatistics;