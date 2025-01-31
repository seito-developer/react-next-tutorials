import React, { useEffect, useState } from 'react'
import { collection, getDocs, DocumentData, QueryDocumentSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';
import styles from './Table.module.css'

interface Report {
    id: string;
    date: Timestamp;
    name: string;
    work: string;
    comment: string;
}

const Table: React.FC = () => {
    const [reports, setReports] = useState<Report[]>([]);

    useEffect(() => {
        console.log('hi');
        const fetchReports = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'reports'));
                const data: Report[] = [];
                querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
                    data.push({ id: doc.id, ...doc.data() } as Report);
                });
                setReports(data);
                console.log(data);
            } catch (err) {
                console.error('Error fetching reports:', err);
            }
        };
        fetchReports();
    }, []);

    return (
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Work</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {reports.map((report: Report) => (
                    <tr key={report.id}>
                        <td>{new Date(report.date.seconds * 1000).toLocaleString()}</td>
                        <td>{report.name}</td>
                        <td>{report.work}</td>
                        <td>{report.comment}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;
