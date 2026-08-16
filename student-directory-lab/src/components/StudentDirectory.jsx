import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
    return (
        <div className="directory">
            <h1 className="directory-heading">Student Directory</h1>
            <div className="directory-grid">
                {students.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </div>
    );
}