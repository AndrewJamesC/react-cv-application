import { useState } from "react";

function Experience() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  return (
    <div>
      <label htmlFor="companyName">
        Company Name
        <input
          type="text"
          name="companyName"
          id="companyName"
          placeholder="Enter name of company"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <label htmlFor="positionTitle">
        Position Title
        <input
          type="text"
          name="positionTitle"
          id="positionTitle"
          placeholder="Enter position title"
          value={positionTitle}
          onChange={(e) => setPositionTitle(e.target.value)}
        />
      </label>
      <fieldset>
        <legend>Date of Employment</legend>
        <label htmlFor="jobStartDate">
          Start Date
          <input
            type="date"
            id="jobStartDate"
            name="jobStartDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label htmlFor="jobEndDate">
          End Date
          <input
            type="date"
            id="jobEndDate"
            name="jobEndDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </fieldset>
      <label htmlFor="jobDescription">
        Job Description
        <textarea
          id="jobDescription"
          name="jobDescription"
          placeholder="Describe the main responsibilities of your job"
          rows={5}
          cols={50}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        ></textarea>
      </label>
    </div>
  );
}

export default Experience;
