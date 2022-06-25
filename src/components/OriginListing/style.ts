import styled from "styled-components";

export const Info = styled.div`
	span {
		display: inline-block;
	}

	span:first-of-type {
		text-transform: uppercase;
		color: var(--text-title);
		font-weight: bold;
		font-size: 14px;
		margin-right: 15px;
	}
	span:last-of-type {
		display: inline-block;
		margin-bottom: 10px;
	}
`