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

		this.peer = new window.Peer({
			key: '4e91c06c-3d91-409e-8f45-faaa291227f5',
			debug: 2
		});



		// メディアの取得
		navigator.mediaDevices.getUserMedia(this.constraints)
			.then((stream) => {
				this.videos.push({
					"id": this.peer.id,
					"stream": stream
				});
				this.setState({videos: this.videos})
				this.localStream = stream
			}).catch(function (error) {
				console.error('mediaDevice.getUserMedia() error:', error);
				return;
			});
		

		//音声認識APIの使用
		this.speech = new window.webkitSpeechRecognition();
		this.speech.lang = "ja";
		this.speech.continuous = true;
		this.speech.addEventListener('result', function (e) {
			console.log("認識: " + e.results[0][0].transcript);
		});
		//this.recognition.start();

		// ルームに参加
		//		if (!this.call) {
		//			this.call.close();
		//		}
		this.setState({videos: []});

		this.peer.on('open', () => {
			this.call = this.peer.joinRoom("test", { "mode": 'sfu', "stream": this.localStream });

			console.log(this)
			this.call.on('stream', (stream) => {
				console.log(this)
				this.videos.push({
					"id": stream.peerId,
					"stream": stream
				});
				this.setState({videos: this.videos})
			});
			

			//room.send();

			this.call.on('data', function (data) {
				data.src
				data.data
				/*
				this.videos.push({
					"id": stream.peerId,
					"stream": stream
				});
				*/
			});

			this.call.on('peerLeave', function (peerId) {
				//removeVideo(peerId);
			});

			this.call.on('close', function () {
				//removeAllRemoteVideos();
				//setupMakeCallUI();
			});
		})
	}

	render() {
		return (
			<div className="App">
				<VideoArea videos={this.state.videos} />
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
