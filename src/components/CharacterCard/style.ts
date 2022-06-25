import styled from 'styled-components';

export const Card = styled.li`
	display: flex;
	flex-direction: column;
	list-style: none;
	border-radius: 8px;
	overflow: hidden;
	position: relative;

	* {
		padding; 0;
		margin: 0;
	}

	h4 {
		color: var(--text-body);

		:not(:first-of-type) {
			margin-top: 20px;
		}
	}

	> div:first-of-type {
		position: relative;

		img {
			height: 100%;
			width: 100%;
		}
	}

	&:hover > div:last-of-type {
		transform: translateY(0);
	}
`
export const Description = styled.div`
	box-sizing: border-box;
	padding: 20px;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	color: #fff;
	background-color: red;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background: rgb(2,0,36);
	background: linear-gradient(0deg, rgba(2,0,36,0.9037815809917717) 4%, rgba(249,254,255,0) 38%); 

	h2 {
		margin-bottom: 10px;
	}

	.quick-info {
		display: flex;
		justify-content: space-between;

		p {
			display: flex;
			align-items: center;
		}
	}
`

export const Metadata = styled.div`
	padding: 10px;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: rgba(255, 255, 255, 0.9);
	border: 1px solid #ecf0f1;
	transform: translateY(100%);
	transition: .5s;

	h4 {
		color: var(--text-body);
	}

	h3 {
		display: flex;
		align-items: center;
		i {
			margin-left: 20px;
		}
	}
}
`

const Status = `
	height: 10px;
	width: 10px;
	border-radius: 999px;
	margin-right: 5px;
` 

export const Dead = styled.div`
	${Status}
	background-color: #e74c3c;
`
export const Alive = styled.div`
	${Status}
	background-color: #2ecc71;
`