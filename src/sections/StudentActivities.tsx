import activitiesData from '@/data/student-activities.json';
import type { StudentActivity } from '@/types';
import ExpandableCard from '@/components/ExpandableCard';
import EmptyState from '@/components/EmptyState';
import styles from './StudentActivities.module.css';

export default function StudentActivities() {
    const data = activitiesData as StudentActivity[];
    const hasData = data.length > 0;

    return (
        <section id="activities" className="section">
            <div className="container">
                <h2 className="section-title">Student Activities</h2>
                {hasData ? (
                    <div className={styles.grid}>
                        {data.map((activity) => (
                            <ExpandableCard key={activity.id} data={activity} />
                        ))}
                    </div>
                ) : (
                    <EmptyState message="Campus involvement and leadership experiences" icon="🎯" />
                )}
            </div>
        </section>
    );
}
