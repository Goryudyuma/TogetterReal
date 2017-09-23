import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Grid, Col, Row } from 'react-bootstrap';

class VideoArea extends Component {
	render() {
		let videoContents = [];
		for(let video in videos){
			videoContents.push(<div>{data[i].text}</div>);
		}

		return (
			<Grid>
				<Row className="show-grid">
					<Col xs={6}>
						<div className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<h2>Welcome to React</h2>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default VideoArea;




