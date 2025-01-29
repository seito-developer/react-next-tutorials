import { useState } from 'react';
import Link from 'next/link';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Home() {
  const [name, setName] = useState('');
  const [work, setWork] = useState('');
  const [comment, setComment] = useState('');

  async function submitReport(e) {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'reports'), {
        date: new Date(),
        name,
        work,
        comment
      });
      setName('');
      setWork('');
      setComment('');
    } catch (err) {
      console.error('Error adding document:', err);
    }
  }

  return (
    <>
      <form className="form" id="js-form" onSubmit={submitReport}>
        <div className="form-list">
          <label className="form-title" htmlFor="name">Name:</label>
          <div className="form-field">
            <input 
              className="input-field" 
              type="text" 
              id="name" 
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        
        <div className="form-list">
          <label className="form-title" htmlFor="work">Work:</label>
          <div className="form-field">
            <input 
              className="input-field" 
              type="text" 
              id="work" 
              name="work"
              value={work}
              onChange={(e) => setWork(e.target.value)}
            />
          </div>
        </div>

        <div className="form-list">
          <label className="form-title" htmlFor="comment">Comment:</label>
          <div className="form-field">
            <textarea 
              className="input-field" 
              id="comment" 
              name="comment" 
              rows="4" 
              cols="50"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </div>
        
        <div className="form-button">
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
      <div className="history-link">
        <Link href="/">Home</Link>
        <Link href="/history">History</Link>
      </div>
    </>
  );
}
