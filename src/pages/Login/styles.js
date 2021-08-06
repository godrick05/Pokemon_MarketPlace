import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import bg from "../../assets/loginPage.png";
import { Form, FormControl } from "react-bootstrap";
import { device } from "../../styles/device";




export const Styled = {
  
  Container: styled.div`
    width: 110%;
    height: 110%;
    background-size: center;
    background: ${mixins.styles.gradiente};
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;

    @media ${device.tablet} {
      background: url(${bg}) no-repeat;
      background-size: cover;
    }
  `,

  Error: styled.span`
    align-self: center;
    justify-self: left;
    color: ${mixins.colors.primary};
    font-family: ${mixins.fonts.semi_bold};
    font-size: ${mixins.typograph.normal};
    padding: 10px;
  `,
  
  LoginBox: styled.div`
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
    box-shadow: none;
    border-radius: none;
    justify-content: center;
    background: none;
    height: 520px;
    width: 100%;
    margin-right: 200px;

    @media ${device.tablet} {
      background-color: ${mixins.colors.foreground};
      width: 450px;
      justify-content: center;
      border-radius: 10px;
      box-shadow: ${mixins.styles.shadowBox};
    }
  `,

  LoginInput: styled(FormControl)`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    width: 300px;

    &:focus {
      outline: none;
    }
  `,

  LoginForm: styled(Form)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 80%;
    text-align: center;
  `,

  LgTitle: styled.h1`
    font-family: ${mixins.fonts.bold};
    color: ${mixins.colors.dark};
    margin-bottom: 20px;
  `,

  LgText: styled.p`
    font-family: ${mixins.fonts.normal};
    font-size: ${mixins.typograph.campoObrigatorio};
    color: ${mixins.colors.dark};
    margin-bottom: 10px;

    a {
      color: ${mixins.colors.dark};
      transition: 0.3s;
    }
    a:hover {
      color: ${mixins.colors.secondary};
    }
  `,
};
