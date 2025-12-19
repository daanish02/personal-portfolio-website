import Languages from '@/sections/Languages';
import StudentActivities from '@/sections/StudentActivities';
import ExpandableCard from '@/components/ExpandableCard';
import EmptyState from '@/components/EmptyState';
import styles from './depth.module.css';
import volunteeringData from '@/data/volunteering.json';
import aboutData from '@/data/about.json';
import type { Volunteering } from '@/types';

export default function DepthPage() {
    const volunteering = volunteeringData as Volunteering[];

    return (
        <div className="page-wrapper">
            {/* 1. Interests */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Interests</h2>
                    <div className={styles.interestsGrid}>
                        <div className={styles.interestCard}>
                            <h3 className={styles.interestTitle}>Tech</h3>
                            <ul className={styles.interestList}>
                                {aboutData.interests.technical.map((interest, index) => (
                                    <li key={index}>{interest}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.interestCard}>
                            <h3 className={styles.interestTitle}>Beyond</h3>
                            <ul className={styles.interestList}>
                                {aboutData.interests.nonTechnical.map((interest, index) => (
                                    <li key={index}>{interest}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Languages */}
            <Languages />

            {/* 3. Student Activities */}
            <StudentActivities />

            {/* 4. Volunteering */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Volunteering</h2>
                    {volunteering.length > 0 ? (
                        <div className={styles.grid}>
                            {volunteering.map((vol) => (
                                <ExpandableCard key={vol.id} data={vol} />
                            ))}
                        </div>
                    ) : (
                        <EmptyState message="Looking for opportunities to give back to the community" icon="🤝" />
                    )}
                </div>
            </section>
        </div>
    );
}
