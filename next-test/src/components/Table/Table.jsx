import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';
import styles from './Table.module.css'

export default function Table() {
    const [reports, setReports] = useState([]);
    useEffect(() => {
        console.log('hi');
        async function fetchReports() {
            try {
                const querySnapshot = await getDocs(collection(db, 'reports'));
                const data = [];
                querySnapshot.forEach((doc) => {
                    data.push({ id: doc.id, ...doc.data() });
                });
                setReports(data);
                console.log(data);
            } catch (err) {
                console.error('Error fetching reports:', err);
            }
        }
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
                {reports.map(report => (
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
