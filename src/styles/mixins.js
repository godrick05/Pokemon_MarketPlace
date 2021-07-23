//padroes de cores, tamanhos, fontes, tamanho de fontes
//Aqui é onde eu exporto um objeto
import img from "../img/red-yellow.png"

export const mixins = {

    colors:{        
        background:"#E5E5E5",
        primary: "red",
        secondary: "#F8F8FF",       
        green: "green",
        yellow: "yellow",
        red: "red"
    },
    fonts:{
        bold: "Montserrat-Bold",
        semi_bold: "Montserrat-SemiBold",
        normal: "Montserrat-Normal",
        
        
        
    },
    typograph:{
        title: "24px",
        subTitle: "16px",
        paragraph:"12px",
        
    },
    size:{
        lg:"240px",//tamanho grande
        md: "160px",// tamanho medio
        sm:"120px"  //tamanho pequeno
    }


}