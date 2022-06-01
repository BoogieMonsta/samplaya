import styled from 'styled-components';

export const Display = (props) => {
	return <DisplayWrapper id='display'>{props.sample}</DisplayWrapper>;
};

export const DisplayWrapper = styled.div`
	padding: 33px;
	margin: 33px;
	background: lightgray;
	font-weight: bold;
	font-size: large;
	border-radius: 0.2em;
  width: 105px;
  height: 28px;
  text-align: center;
`;