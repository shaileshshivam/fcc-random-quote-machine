import styled from "styled-components";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const QUOTES_API_ENDPOINT = "https://api.quotable.io/random?minLength=70&maxLength=220"

async function getRandomQuote() {
  const response = await fetch(QUOTES_API_ENDPOINT)
  return response.json();
}


const backgrounds = ["#9c476c",
  "#56ba50",
  "#b853bd",
  "#9cb835",
  "#7263cc",
  "#d1a534",
  "#6384c7",
  "#dc7634",
  "#48bbd2",
  "#cd413d",
  "#55bd94",
  "#d9488a",
  "#5a8023",
  "#c986c9",
  "#88b267",
  "#d97879",
  "#3e7b49",
  "#a06332",
  "#c8aa66",
  "#7d742d"]


const Container = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  font-family:Arial;
  background: ${(props) => `${props.background}`};
  color: #fff;

`

const QuoteBox = styled.section`
  padding:1rem;
  padding-bottom:2rem;
  margin:0;
  width:50vw;
  min-height:20rem;
  border:1px solid black;
  position:relative;
  border-radius:1rem;
  background-color:#00000077;
  box-shadow: rgba(220, 255, 255, 0.4) 0px 0px 0px 2px, rgba(220, 255, 255, 0.65) 0px 4px 6px -1px, rgba(0, 0, 0, 0.08) 0px 1px 0px inset;
`

const Text = styled.p`
  width:100%;
  padding:2rem;
  padding-bottom:0;
  font-size:1.5rem;
  height:min-content;
  font-family: 'Didact Gothic', sans-serif;
  word-spacing:0.5rem;
`

const Author = styled.span`
  width:100%;
  display:block;
  padding-right:3rem;
  padding-top:0.75rem;
  padding-bottom:2rem;
  text-transform:uppercase;
  text-align:right;
  letter-spacing:2px;
  font-family: 'Didact Gothic', sans-serif;
 `

const Button = styled.button`
  position:absolute;
  bottom:2rem;
  border-radius:10000rem;
  outline:none;
  padding:0.5rem 1rem;
  border:none;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  background:none;
  font-size:1rem;
  font-family:inherit;
  color:inherit;
  cursor:pointer;
`

const Link = styled.a`
  position:absolute;
  bottom:2rem;
  right:2rem;
  text-decoration:none;
  border-radius:10000rem;
  font-size:1rem;
  padding:0.5rem 1rem;
  border:none;
  color:inherit;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  font-family:inherit;
`

const Loader = styled.div`
  background-color:dodgerblue;
  border-radius:50%;
  height:2rem;
  width:2rem;
`

const Footer = styled.footer`
  padding:0 2rem;
  margin-top:auto;
`

const Error = styled.span`
`

function App() {

  const { isLoading, isError, data } = useQuery(["quote"], getRandomQuote);
  const queryClient = useQueryClient();

  function getNewRandomQuote() {
    queryClient.invalidateQueries();
  }

  console.log({
    data
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Error />
  }


  const { id, content, author } = data


  return (
    <Container background={backgrounds[Math.floor(Math.random() * backgrounds.length)]}>
      <QuoteBox id="quote-box">
        <Text id="text">{content}</Text>
        <Author id="author">~ {author}</Author>
        <Footer>
          <Link href={`https://www.twitter.com/intent/tweet?text=${content}`} id="tweet-quote">
            tweet quote
          </Link>
          <Button onClick={getNewRandomQuote} id="new-quote">new quote</Button>
        </Footer>
      </QuoteBox>
    </Container>
  );
}

export default App;
