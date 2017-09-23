import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Grid, Col, Row } from 'react-bootstrap';

class VideoOne extends Component {
	render() {
		return (
			<div dangerouslySetInnerHTML={{ __html: `
    <video
      muted
      autoplay
      playsinline
      src="${window.URL.createObjectURL(this.props.video.stream)}"
    />
  ` }}
  />
		);
	}
}

class VideoArea extends Component {
	render() {
		let videoContents = [];

		console.log(this.props.videos)

		return (
			<Grid>
				<Row className="show-grid">
					<Col xs={6}>
						{
							this.props.videos.map(
								video => <VideoOne key={video.id} video={video} />
							)
						}
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default VideoArea;




