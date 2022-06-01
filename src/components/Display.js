import styled from 'styled-components';

export const Display = props => {
	return <DisplayWrapper id='display'>{props.sample}</DisplayWrapper>;
};

export const DisplayWrapper = styled.div`
	padding: 33px;
	margin-bottom: 10px;
	background: linear-gradient(#dce775, #aed581);
	font-size: 3.5em;
	width: 245px;
	height: 28px;
	text-align: center;
    font-family: 'VT323', monospace;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    color: #3c3c3c;
`;
