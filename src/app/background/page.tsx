import Education from '@/sections/Education';
import Research from '@/sections/Research';
import Awards from '@/sections/Awards';

export default function BackgroundPage() {
    return (
        <div className="page-wrapper">
            {/* 1. Education */}
            <Education />

            {/* 2. Research and Publication */}
            <Research />

            {/* 3. Awards and Recognition */}
            <Awards />
        </div>
    );
}
