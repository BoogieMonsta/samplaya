import { useState } from 'react';
import styled from 'styled-components';
import { Display } from './components/Display';
import { Samples } from './components/Samples';

function App() {
	const [selectedSmp, setSelectedSmp] = useState('');
	const handleTrigger = el => {
		setSelectedSmp(el);
	};
	return (
		<AppWrapper id='drum-machine'>
			<Title>SamPlaya</Title>
			<Display sample={selectedSmp} />
			<Samples display={handleTrigger} />
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
`;

const Title = styled.h1`
	position: absolute;
	top: 200px;
`;
