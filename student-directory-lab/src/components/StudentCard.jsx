import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
    const { name, course, yearLevel, status, gwa } = student;
    const isOnProbation = status === 'On Probation';
    const isDeansLister = gwa <= 1.75;

    const cardClassName = isOnProbation
        ? `${styles.card} ${styles.probation}`
        : styles.card;

    return (
        <div className={cardClassName}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.meta}>{course} - Year {yearLevel}</p>
            <p className={styles.meta}>GWA: {gwa}</p>
            <p className={styles.status}>{isOnProbation ? 'On Probation' : status}</p>
            {isDeansLister && <span className={styles.badge}>Dean's Lister</span>}
        </div>
    );
}