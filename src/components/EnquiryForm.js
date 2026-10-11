import { useState } from "react";
import attractions from "../data/Attractions";

function EnquiryForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [visitors, setVisitors] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [destinationError, setDestinationError] = useState("");
  const [visitorsError, setVisitorsError] = useState("");
  const [dateError, setDateError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (fullName.trim() === "") {
      setNameError("Full Name is required");
      valid = false;
    } else if (fullName.trim().length < 2) {
      setNameError("Name must be at least 2 letters");
      valid = false;
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Enter a valid email address");
      valid = false;
    }

    if (phone.trim() === "") {
      setPhoneError("Phone Number is required");
      valid = false;
    } else if (phone.length < 8) {
      setPhoneError("Phone number must have at least 8 digits");
      valid = false;
    }

    if (destination === "") {
      setDestinationError("Please select a destination");
      valid = false;
    }

    if (visitors === "") {
      setVisitorsError("Number of visitors is required");
      valid = false;
    } else if (Number(visitors) < 1 || Number(visitors) > 50) {
      setVisitorsError("Enter a number between 1 and 50");
      valid = false;
    }

    if (visitDate === "") {
      setDateError("Preferred visit date is required");
      valid = false;
    } else if (visitDate < today) {
      setDateError("The visit date cannot be in the past");
      valid = false;
    }

    if (message.trim() === "") {
      setMessageError("Message is required");
      valid = false;
    } else if (message.trim().length < 10) {
      setMessageError("Message must be at least 10 characters");
      valid = false;
    }

    if (valid) {
      setSuccessMessage(
        `Thank you, ${fullName.trim()}! Your enquiry about ${destination} for ${visitors} visitor(s) on ${visitDate} was sent successfully. We will contact you at ${email.trim()}.`
      );

      setFullName("");
      setEmail("");
      setPhone("");
      setDestination("");
      setVisitors("");
      setVisitDate("");
      setMessage("");

      setNameError("");
      setEmailError("");
      setPhoneError("");
      setDestinationError("");
      setVisitorsError("");
      setDateError("");
      setMessageError("");
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          value={fullName}
          maxLength="15"
          onChange={(e) => {
            const typedValue = e.target.value;

            if (/[^a-zA-Z\s]/.test(typedValue)) {
              setNameError("Only letters are allowed");
            } else {
              setNameError("");
            }

            setFullName(typedValue.replace(/[^a-zA-Z\s]/g, ""));
            setSuccessMessage("");
          }}
        />
        <p className="error">{nameError}</p>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            const value = e.target.value;
            setEmail(value);
            setSuccessMessage("");

            if (value !== "" && !emailPattern.test(value)) {
              setEmailError("Enter a valid email address");
            } else {
              setEmailError("");
            }
          }}
        />
        <p className="error">{emailError}</p>
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          value={phone}
          maxLength="15"
          onChange={(e) => {
            const typedValue = e.target.value;

            if (/[^0-9]/.test(typedValue)) {
              setPhoneError("Only numbers are allowed");
            } else {
              setPhoneError("");
            }

            setPhone(typedValue.replace(/[^0-9]/g, ""));
            setSuccessMessage("");
          }}
        />
        <p className="error">{phoneError}</p>
      </div>

      <div className="form-group">
        <label>Selected Destination</label>
        <select
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setDestinationError("");
            setSuccessMessage("");
          }}
        >
          <option value="">Choose a destination</option>
          {attractions.map((a) => (
            <option key={a.id} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
        <p className="error">{destinationError}</p>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Number of Visitors</label>
          <input
            type="number"
            min="1"
            max="50"
            value={visitors}
            onChange={(e) => {
              setVisitors(e.target.value);
              setVisitorsError("");
              setSuccessMessage("");
            }}
          />
          <p className="error">{visitorsError}</p>
        </div>

        <div className="form-group">
          <label>Preferred Visit Date</label>
          <input
            type="date"
            min={today}
            value={visitDate}
            onChange={(e) => {
              setVisitDate(e.target.value);
              setDateError("");
              setSuccessMessage("");
            }}
          />
          <p className="error">{dateError}</p>
        </div>
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea
          rows="4"
          value={message}
          maxLength="35"
          onChange={(e) => {
            setMessage(e.target.value);
            setMessageError("");
            setSuccessMessage("");
          }}
        ></textarea>
        <p className="error">{messageError}</p>
      </div>

      <button type="submit" className="btn">
        Submit Enquiry
      </button>

      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
}

export default EnquiryForm;