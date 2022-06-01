import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Display } from './components/Display';
import { Samples } from './components/Samples';

function App() {
	const [selectedSmp, setSelectedSmp] = useState('');
	const [titleColor, setTitleColor] = useState('#3c3c3c');
	const handleTrigger = el => {
		setSelectedSmp(el);
		setTitleColor('#dce775');
	};

	useEffect(() => {
		if (titleColor !== '#3c3c3c') {
			setTimeout(() => {
				setTitleColor('#3c3c3c');
			}, 500);
		}
	});

	return (
		<AppWrapper id='drum-machine'>
			<SamplerWrapper>
				<Title titleColor={titleColor}>samplaya</Title>
				<Display sample={selectedSmp} />
				<Samples display={handleTrigger} />
			</SamplerWrapper>
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background: radial-gradient(#d6d6d6, #5b5b5b);
`;

const SamplerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 330px;
	height: fit-content;
	background: linear-gradient(#51585b, #3c3c3c);
	border-radius: 0.5em;
	padding: 10px;
	box-shadow: 0em 0.5em 2em -1em #4b4b4b;
`;

const Title = styled.h1`
	font-size: 1.5em;
	color: ${props => props.titleColor};
  transition: color 0.2s ease-in-out;
	margin-top: 0px;
	margin-bottom: 13px;
`;
