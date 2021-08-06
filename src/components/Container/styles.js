import styled from "styled-components";
import { mixins } from "../../styles/mixins";

const ContainerSM = styled.div`
	margin:180px 0;
    width:355px;
    height: 479px;
	background-color: ${mixins.colors.primary};
	align-self: flex-end;
	margin-right: 200px;
	padding: 50px;
	padding: 50px;   
`

export const Styled = {
    ContainerSM,
    ContainerLG: styled(ContainerSM)`       
		margin: 5% 0;
		width: 90%;       
		align-items: center;
		border-radius: 25px;
		flex-direction: column;
		justify-content: center;
		padding: none;
	`,
	ContainerMD: styled.div`
		margin: 5% 0;
		width: 80%;
		height: 100%;
		background-color: ${mixins.colors.foreground};
		display: flex;
		flex-direction: column;
		align-self: center;
		border-radius: 10px;
		align-items: top;
		/* justify-content: center; */
		padding: none;
	`,
	ContainerCart: styled.div`
		margin: 5% 0;
		width: 100%;
		height: 100%;
		background-color: ${mixins.colors.foreground};
		display: flex;
		flex-direction: column;
		align-self: center;
		border-radius: 10px;
		align-items: top;
		/* justify-content: center; */
		padding: none;
	`,
	Title: styled.h1`
		height: 100px;
		display: flex;        
		flex-direction: row;
		color: ${mixins.colors.foreground};
		font-family: ${mixins.fonts.bold};
		font-size: ${mixins.typograph.titleLogin};		
	`,
};
