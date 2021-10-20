import React from "react";
import "../Styles/Suggestions.css";
import SuggestionImg from '../Assets/img.svg';

export default function Suggestions() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    console.log(`
	  Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `);
    
    e.preventDefault();
  }

  return (
	<div>
		<form onSubmit={handleSubmit}>
		<h1>Got Any Suggestions?</h1>
		<h3>Help us improve our website by sharing your ingeinous ideas</h3>

		<label>
			<input
			name="name"
			type="text"
			placeholder="Name"
			value={name}
			onChange={e => setName(e.target.value)}
			required />
		</label>

		<label>
			<input
			name="email"
			type="email"
			placeholder="Email"
			value={email}
			onChange={e => setEmail(e.target.value)}
			required />
		</label>
		
		<label>
			<input
			name="subject"
			type="text"
			value={subject}
			placeholder="Subject"
			onChange={e => setSubject(e.target.value)} />
		</label>

		<label>
			<input
			name="message"
			type="text"
			placeholder="Message"
			value={message}
			onChange={e => setMessage(e.target.value)}
			required />
		</label>

		<button>Send</button>
		</form>
		<img src={SuggestionImg} alt="React Logo" />
	</div>
  );
}
