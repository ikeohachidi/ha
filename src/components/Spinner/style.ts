import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	z-index: 4;
`

export const Spinner = styled.div`
	border-radius: 999px;
	border: 3px solid rgba(0, 0, 0, 0.5);
	border-top: 3px solid black;
	animation-name: rotate;
	animation-duration: 2s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	height: 40px;
	width: 40px;
`