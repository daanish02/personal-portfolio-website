import educationData from '@/data/education.json';
import type { Education } from '@/types';
import EmptyState from '@/components/EmptyState';
import styles from './Education.module.css';

export default function Education() {
    const data = educationData as Education[];
    const hasData = data.length > 0;

    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                {hasData ? (
                    <div className={styles.educationList}>
                        {data.map((edu, index) => (
                            <div key={index} className={styles.educationItem}>
                                <h3 className={styles.degree}>{edu.degree}</h3>
                                <p className={styles.institution}>{edu.institution}</p>
                                <p className={styles.period}>{edu.period}</p>
                                {edu.gpa && <p className={styles.gpa}>GPA: {edu.gpa}</p>}
                                {edu.highlights && edu.highlights.length > 0 && (
                                    <ul className={styles.highlights}>
                                        {edu.highlights.map((highlight, i) => (
                                            <li key={i}>{highlight}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <EmptyState message="Academic journey details coming soon" icon="🎓" />
                )}
            </div>
        </section>
    );
}
