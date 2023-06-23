import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

import { db } from "./Firebase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="display-5" style={{ marginTop: "6rem" }}>
          Leave us a message
        </h1>
        <p className="lead" style={{ marginBottom: "3rem" }}>
          Let us know your recommendations, and get them listed on our site!
        </p>
        <FormControl variant="standard" style={{ marginBottom: "1rem" }}>
          <InputLabel shrink htmlFor="name-input">
            Name
          </InputLabel>
          <BootstrapInput
            id="name-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl variant="standard" style={{ marginBottom: "1rem" }}>
          <InputLabel shrink htmlFor="email-input">
            Email
          </InputLabel>
          <BootstrapInput
            id="email-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl variant="standard" style={{ marginBottom: "0.5rem" }}>
          <InputLabel shrink htmlFor="message-input">
            Message
          </InputLabel>
          <TextField
            id="message-input"
            multiline
            rows={4}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: "400px", padding: "1.5rem 0rem" }}
          />
        </FormControl>
        <br />
        <button type="submit" className="btn btn-secondary" style={{ marginBottom: "2rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
