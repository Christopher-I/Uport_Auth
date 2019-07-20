import React from "react";
import { Credentials } from "uport-credentials";
import bodyParser from "body-parser";
import ngrok from "ngrok";
import express from "express";
const decodeJWT = require("did-jwt").decodeJWT;
const transports = require("uport-transports").transport;
const message = require("uport-transports").message.util;

class App extends React.Component {
	state = {
		credentials: ""
	};

	async componentDidMount() {
		let endpoint = "";
		const app = express();
		app.use(bodyParser.json({ type: "*/*" }));

		//setup Credentials object with newly created application identity.
		const credentials = new Credentials({
			appName: "Login Example",
			did: "did:ethr:0x31486054a6ad2c0b685cd89ce0ba018e210d504e",
			privateKey:
				"ef6a01d0d98ba08bd23ee8b0c650076c65d629560940de9935d0f46f00679e01"
		});

		this.setState({
			credentials: await Credentials.createIdentity()
		});
	}

	render() {
		return <div> hey </div>;
	}
}

export default App;
