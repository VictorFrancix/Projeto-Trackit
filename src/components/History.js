import styled from "styled-components";

function History(){
    return(
        <Div>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Div>
    )
}

const Div = styled.div`
    margin-top: 100px;
    margin-left: 20px;
    display: flex;
    width; 100%;
    align-item: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    
    h1{
        font-family: "Lexend Deca", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom:20px;

    }

    p {
        font-family: "Lexend Deca", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666; 
    }
`
export default History;