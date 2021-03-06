import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	z-index: 2;
`

export const Container = styled.div`
	list-style: none;
	padding: 0;
	height: 80%;
	max-height: 960px;
	min-width: 476px;
	margin: auto;
	background-color: #fff;
	border-radius: 9px;
	position: relative;
	display: flex;
	flex-direction: column;
`

export const Action = styled.div`
	display: flex;
	cursor: pointer;
	width: 100%;
	box-sizing: border-box;
	justify-content: flex-end;
	padding: 10px;
`

export const List = styled.ul`
	padding: 0 20px 0;
	overflow-y: auto;
	flex-grow: 2;
	margin: 0;
	list-style: none;
	position: relative;
`