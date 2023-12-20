import { useState } from "react";

function PersonalDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="emailAddress">Email Address</label>
      <input
        id="emailAddress"
        name="emailAddress"
        type="email"
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="phoneNum">Phone Number</label>
      <input
        id="phoneNum"
        name="phoneNum"
        type="tel"
        placeholder="(01)-234-5678"
        value={phoneNum}
        onChange={(e) => setPhoneNum(e.target.value)}
      />
    </div>
  );
}

export default PersonalDetails;
