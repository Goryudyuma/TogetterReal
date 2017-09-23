import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './Video.js'

import { Grid, Col, Row } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Video />
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

export default App;
