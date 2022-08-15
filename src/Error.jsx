import styled from "styled-components";

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    width:100%;
    background-color:#000000;
`

const ErrorMessage = styled.h1`
    font-size:5rem;
    color:whitesmoke;
    text-align:center;
`

export default function Error() {
    return <Container>
        <ErrorMessage>Oops!<br />Something went wrong</ErrorMessage>
    </Container>
}