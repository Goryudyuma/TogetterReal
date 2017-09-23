import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Grid, Col, Row } from 'react-bootstrap';

class Video extends Component {
	render() {
		return (
			<div className="Video">

			</div>
		)
	}
}

class VideoArea extends Component {
	render() {
		let videoContents = [];

		return (
			<Grid>
				<Row className="show-grid">
					<Col xs={6}>
						{
							this.props.videos.map(
								video => <Video video={video} />
							)
						}
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default VideoArea;




