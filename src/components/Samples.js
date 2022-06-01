import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Samples = props => {
	const [samples, setSamples] = useState([]);

	const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

	const samplePath = element => {
		return '/assets/' + element.toLowerCase() + '.mp3';
	};

	const handleClick = element => {
		playSample(element.target.innerText);
	};

	const playSample = element => {
		const index = keys.indexOf(element);
		const sample = samples[index];
		sample?.play();
		props.display(element);
	};

	const handleKeyDown = key => {
		const keyPressed = key.key.toUpperCase();
		if (keys.includes(keyPressed)) {
			playSample(keyPressed);
		}
	};

	document.addEventListener('keydown', handleKeyDown);

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
				onClick={handleClick}
			>
				<span>{element}</span>
				<audio src={samplePath(element)} className='clip' id={element}></audio>
			</SmpWrapper>
		);
	});

	return <SmpBankWrapper>{samplePads}</SmpBankWrapper>;
};

export const SmpBankWrapper = styled.div`
	/* width: 180px; */
`;

const SmpWrapper = styled.div`
	position: relative;
	float: left;
	width: 100px;
	height: 100px;
	box-sizing: border-box;
	text-align: center;
	background: linear-gradient(whitesmoke, lightgray);
	margin: 5px;
	padding: 15px;
	border-radius: 0.2em;
	font-weight: bold;
    font-size: xx-large;
	color: #c0c0c0;
	box-shadow: 0em 0.1em 0.1em 0 #333333;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
