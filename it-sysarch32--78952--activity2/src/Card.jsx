import List from "./List";

function Card() {
  const students = List();

  return (
    <>
      {students.map((student) => (
        <div className="card">
          <div key={student.id}>
            <img className="img" src={student.profile} alt={student.name} />
            <p className="card-title">
              {student.name}
            </p>
            <p className="card-text">{student.email}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card