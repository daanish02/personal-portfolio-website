import researchData from '@/data/research.json';
import type { Research } from '@/types';
import ExpandableCard from '@/components/ExpandableCard';
import EmptyState from '@/components/EmptyState';
import styles from './Research.module.css';

export default function Research() {
    const data = researchData as Research[];
    const hasData = data.length > 0;

    return (
        <section id="research" className="section">
            <div className="container">
                <h2 className="section-title">Research & Publications</h2>
                {hasData ? (
                    <div className={styles.grid}>
                        {data.map((paper) => (
                            <ExpandableCard key={paper.id} data={paper} />
                        ))}
                    </div>
                ) : (
                    <EmptyState message="Research work and publications in progress" icon="📚" />
                )}
            </div>
        </section>
    );
}
