import awardsData from '@/data/awards.json';
import type { Award } from '@/types';
import ExpandableCard from '@/components/ExpandableCard';
import EmptyState from '@/components/EmptyState';
import styles from './Awards.module.css';

export default function Awards() {
    const data = awardsData as Award[];
    const hasData = data.length > 0;

    return (
        <section id="awards" className="section">
            <div className="container">
                <h2 className="section-title">Awards & Recognition</h2>
                {hasData ? (
                    <div className={styles.grid}>
                        {data.map((award) => (
                            <ExpandableCard key={award.id} data={award} />
                        ))}
                    </div>
                ) : (
                    <EmptyState message="Recognition and achievements to be added" icon="🏆" />
                )}
            </div>
        </section>
    );
}
