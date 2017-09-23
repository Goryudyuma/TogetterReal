import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './Video.js'
import MinutesArea from './MinutesArea.js'
import ChatArea from './ChatArea.js'

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
								<ChatArea />
							</Col>
							<Col xs={6}>
								<MinutesArea />
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
}

export default App;
