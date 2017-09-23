import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Grid, Col, Row } from 'react-bootstrap';

class Video extends Component {
	render() {
		return (
			<div className="App">
				<div className="VideoArea">
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h2>Welcome to React</h2>
					</div>
				</div>
				<div>
					<Grid>
						<Row className="show-grid">
							<Col xs={6}>
								<div className="App-header">
									<img src={logo} className="App-logo" alt="logo" />
									<h2>Welcome to React</h2>
								</div>
							</Col>
							<Col xs={6}>
								<div className="App-header">
									<img src={logo} className="App-logo" alt="logo" />
									<h2>Welcome to React</h2>
								</div>
							</Col>
						</Row>
					</Grid>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default Video;
