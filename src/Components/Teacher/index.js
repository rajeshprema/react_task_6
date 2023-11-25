import React, { useState } from "react";



const Teacher = () => {

    const [teachers, setTeacher] = useState([]);
    const [teacherName, setTeacherName] = useState('');

    const addTeacher = () => {
        if (teacherName) {
            setTeacher([...teachers, teacherName]);
            setTeacherName('');

        }
            
        
    };

    const deleteTeacher = (index) => {
        const updatedTeachers = [...teachers];
        updatedTeachers.splice(index, 1);
        setTeacher(updatedTeachers)


    };

    return (
        <div>
            <h2>Teacher</h2>
            <input type="test" placeholder="Teeacher Name" value={teacherName} onChange={(e)=>setTeacherName(e.target.value)}
            />
            <ul>
                {teachers.map((teachers, index) => {
                    <li key={index}>{teachers}
                        <button onClick={() => deleteTeacher(index)}>Delete</button>
                    
                    </li>
                    
                })}
            </ul>

        </div>
    )
};
export default Teacher;