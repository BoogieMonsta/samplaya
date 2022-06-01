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
			<SamplerWrapper>
				<Title>SamPlaya</Title>
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
`;

const SamplerWrapper = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
	width: 180px;
	height: fit-content;
	background: slategray;
	border-radius: 0.5em;
	padding: 10px;
`;

const Title = styled.h1`
	font-size: 1.5em;
  color: whitesmoke;
  margin-top: 0px;
  margin-bottom: 13px;
`;
