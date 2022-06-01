import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
	return (
		<div
			id='drum-machine'
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				width: '100vw',
			}}
		>
			<Title>Samplaya</Title>
			<DisplayWrapper>
				<Display />
			</DisplayWrapper>
			<SmpBankWrapper>
				<Samples />
			</SmpBankWrapper>
		</div>
	);
}

export default App;

const Title = styled.h1`
	position: absolute;
	top: 100px;
`;

const Display = () => {
	return <div id='display'>Display</div>;
};

const DisplayWrapper = styled.div`
	padding: 33px;
	margin: 33px;
	background: lightgray;
	font-weight: bold;
	font-size: large;
`;

const Samples = () => {
	const [samples, setSamples] = useState([]);

	const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

	const samplePath = element => {
		return '/assets/' + element.toLowerCase() + '.mp3';
	};

	const playSample = element => {
		const index = keys.indexOf(element.target.innerText);
		const sample = samples[index];
		sample.play();
	};

	useEffect(() => {
		let smps = [];
		keys.forEach(el => smps.push(document.getElementById(el)));
		setSamples(smps);
	}, []);

	const samplePads = keys.map((element, index) => {
		return (
			<SmpWrapper
				className='drum-pad'
				id={'pad' + element}
				key={index}
				onClick={playSample}
			>
				{element}
				<audio src={samplePath(element)} className='clip' id={element}></audio>
			</SmpWrapper>
		);
	});

	return <div>{samplePads}</div>;
};

const SmpBankWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 180px;
`;

const SmpWrapper = styled.div`
	position: relative;
	float: left;
	width: 50px;
	box-sizing: border-box;
	text-align: center;
	background: lightgray;
	margin: 5px;
	padding: 15px;
	border-radius: 0.2em;
`;
