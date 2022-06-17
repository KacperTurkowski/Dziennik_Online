import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Loading from "../../../components/loading/Loading";
import useAuth from "../../../context/AuthContext/useAuth";
import { getStudentLatestGrade } from "../../../services/studentApi";

export const LatestGrades = (): JSX.Element => {
    const {user} = useAuth();
    const [latestGrades, setLatestGrades] = useState([]);

    useEffect(() => {
        const uuid = user?.guid || '';

        getStudentLatestGrade(uuid)
            .then(latestGrades => {
                setLatestGrades(latestGrades);
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
        <Table hover className={'latest-grades-table text-center'}>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Ocena</th>
                    <th>Rodzaj</th>
                    <th>Waga</th>
                    <th>Komentarz</th>
                </tr>
            </thead>
            <tbody>
                {latestGrades.length > 0 ? latestGrades.map((latestGrade, index) =>
                    <tr key={index}>
                        <td>{new Date(latestGrade['date']).toLocaleString()}</td>
                        <td><strong>{latestGrade['value']}</strong></td>
                        <td>{latestGrade['gradeName']}</td>
                        <td>{latestGrade['weight']}</td>
                        <td>{latestGrade['commentary']}</td>
                    </tr>
                )
                    : <tr><td>{getLoading()}</td></tr>}
            </tbody>
        </Table>

    )
}