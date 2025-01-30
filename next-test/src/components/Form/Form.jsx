import React, { useState } from 'react'
import styles from './Form.module.css'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';

export default function Form() {
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
        <form className={styles.form} onSubmit={submitReport}>
            <div className={styles.formList}>
                <label className={styles.formTitle} htmlFor="name">Name:</label>
                <div className={styles.formField}>
                    <input
                        className={styles.inputField}
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.formList}>
                <label className={styles.formTitle} htmlFor="work">Work:</label>
                <div className={styles.formField}>
                    <input
                        className={styles.inputField}
                        type="text"
                        id="work"
                        name="work"
                        value={work}
                        onChange={(e) => setWork(e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.formList}>
                <label className={styles.formTitle} htmlFor="comment">Comment:</label>
                <div className={styles.formField}>
                    <textarea
                        className={styles.inputField}
                        id="comment"
                        name="comment"
                        rows="4"
                        cols="50"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>
            </div>

            <div className={styles.formButton}>
                <button className={styles.button} type="submit">Submit</button>
            </div>
        </form>
    )
}
