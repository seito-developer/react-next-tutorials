import { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function History() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchReports() {
      try {
        const querySnapshot = await getDocs(collection(db, 'reports'));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setReports(data);
      } catch (err) {
        console.error('Error fetching reports:', err);
      }
    }
    fetchReports();
  }, []);

  return (
    <>
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Work</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody className="table-body" id="js-history">
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
      <div className="history-link">
        <Link href="/">Home</Link>
        <Link href="/history">History</Link>
      </div>
    </>
  );
}
