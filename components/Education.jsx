import { useState } from "react";

function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div>
      <label htmlFor="schoolName">
        Name of School
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          placeholder="School Name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />
      </label>
      <label htmlFor="degreeName">
        Degree
        <input
          type="text"
          name="degreeName"
          id="degreeName"
          placeholder="Bachelor of Science"
          value={degreeName}
          onChange={(e) => setDegreeName(e.target.value)}
        />
        <fieldset>
          <legend>Date of Study</legend>
          <label htmlFor="startDate">
            Start Date
            <input
              type="date"
              id="startDate"
              name="endDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label htmlFor="endDate">
            End Date
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </fieldset>
      </label>
    </div>
  );
}

export default Education;
