import React,{ useState } from "react";

const Student = () => {

    const [Student, setStudent] = useState([]);
    const [StudentName, setStudentName] = useState('')
    

    const addStudent = () => {
        if (StudentName) {
            setStudent([...Student, setStudent]);
            setStudentName('');
        }
    };

    const deleteStuendt = (index) => {
        const updatedStudent = [...Student];

        updatedStudent.splice(index, 1);
        setStudent(updatedStudent);
    };


    return (
        <div>
            <h2>Student</h2>
            <input type="test" placeholder="Student Name" value={StudentName} onChange={(e) => setStudent(e.target.value)}
            />
                
            <button onClick={addStudent}>Add Student</button>
                 
                <ul>
                    {Student.map((Student, index) => (
                    
                    
                        <li key={index}>
                            {Student}
                            <button onClick={() => deleteStuendt(index)}>button</button>
                            
                        </li>
                    ))}
                </ul>

        </div>
                );
}

export default Student;