import StudentClass from './Student.ts'

function Student(student:StudentClass){
    return(
        <div className='student'>
            <p>Nome: {student.name || "Anônimo"}</p>
            <p>Idade: {student.age || 0}</p>
        </div>
    );
};

export default Student;