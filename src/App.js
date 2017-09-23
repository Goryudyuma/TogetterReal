import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MinutesArea from './MinutesArea.js'
import ChatArea from './ChatArea.js'
import VideoArea from './VideoArea.js'

import { Grid, Col, Row } from 'react-bootstrap';

class App extends Component {
	
	componentDidMount() {
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

		// メディアの取得
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
		
		// インスタンス化
		this.peer = new Peer({
			key: '4e91c06c-3d91-409e-8f45-faaa291227f5',
			debug: 2
		});

		//音声認識APIの使用
		this.speech = new webkitSpeechRecognition();
		this.speech.lang = "ja";
		this.speech.continuous = true;
		this.speech.addEventListener('result' , function(e) {
			console.log("認識: "+e.results[0][0].transcript);
		});
		this.recognition.start();

		// ルームに参加
		if(this.call){
			this.call.close();
		}
		this.call = this.peer.joinRoom("test", {"mode": 'sfu', "stream": this.localStream});

        call.on('stream', function(stream){
			this.videos.push({
				"id": stream.peerId,
				"stream": stream
			});
		});
		//room.send();

        call.on('data', function(data){
			data.src
			data.data
			/*
			this.videos.push({
				"id": stream.peerId,
				"stream": stream
			});
			*/
		});
		

        call.on('peerLeave', function(peerId){
            //removeVideo(peerId);
        });

        call.on('close', function(){
            //removeAllRemoteVideos();
            //setupMakeCallUI();
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
