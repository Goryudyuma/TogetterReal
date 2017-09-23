import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MinutesArea from './MinutesArea.js'
import ChatArea from './ChatArea.js'
import VideoArea from './VideoArea.js'

import { Grid, Col, Row } from 'react-bootstrap';

class App extends Component {
	
	componentWillMount() {
		this.localStream = null;
		this.peer = null;
		this.existingCall = null;
		this.videos = [];

		this.constraints = {
			video: {},
			audio: true
		};
		this.constraints.video.width = 320;
		this.constraints.video.height = 240;

		navigator.mediaDevices.getUserMedia(this.constraints)
			.then(function (stream) {
				this.videos.push({
					"id": this.peer.id,
					"stream": stream
				});
			}).catch(function (error) {
				console.error('mediaDevice.getUserMedia() error:', error);
				return;
			});

		this.peer = new window.Peer({
			key: '4e91c06c-3d91-409e-8f45-faaa291227f5',
			debug: 2
		});

		this.peer.on('stream', function(stream){
			this.videos.push({
				"id": stream.peerId,
				"stream": stream
			});
		});
	}

	render() {
		return (
			<div className="App">
				<VideoArea videos={this.videos} />
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
