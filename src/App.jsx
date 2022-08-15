import styled from "styled-components";
import { useQueryClient } from "@tanstack/react-query";

import { useRandomQuote } from "./useRandomQuote";

import Loader from "./Loader";
import Error from "./Error";


const backgrounds = [
  "#9c476c",
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
  "#7d742d"
]


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

  @media screen and (max-width: 60rem) {
    padding:1rem;
    min-width:22rem;
  }
`

const QuoteBox = styled.section`
  min-width:36rem;
  padding:1rem;
  padding-bottom:2rem;
  margin:0;
  width:50vw;
  min-height:26rem;
  border:1px solid black;
  position:relative;
  border-radius:1rem;
  background-color:#00000077;
  box-shadow: rgba(220, 255, 255, 0.4) 0px 0px 0px 2px, rgba(220, 255, 255, 0.65) 0px 4px 6px -1px, rgba(0, 0, 0, 0.08) 0px 1px 0px inset;

  @media screen and (max-width: 40rem) {
    width: 100%;
    min-width:unset;
    min-width:20rem;
  }
`

const Text = styled.p`
  width:100%;
  padding:2rem;
  padding-bottom:0;
  font-size:1.75rem;
  height:min-content;
  font-family: 'Didact Gothic', sans-serif;
  line-height:2.5rem;

  &::first-letter {
    font-size:4rem;
  }

  @media screen and (max-width: 40rem) {
    font-size: 1.5rem;
  }
`

const Author = styled.span`
  width:100%;
  display:block;
  padding-right:3rem;
  padding-top:1.25rem;
  padding-bottom:2rem;
  text-transform:uppercase;
  text-align:right;
  letter-spacing:2px;
  font-family: 'Didact Gothic', sans-serif;
  font-size:1.4rem;

  @media screen and (max-width: 40rem) {
    font-size: 0.95rem;
    text-align:center;
    padding:2rem 0;
  }
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
  font-size:1.25rem;
  font-family:inherit;
  color:inherit;
  cursor:pointer;

  @media screen and (max-width: 40rem) {
    left:1.5rem;
    bottom:1.5rem;
    font-size:0.9rem;
  }
`

const Link = styled.a`
  position:absolute;
  bottom:2rem;
  right:2rem;
  text-decoration:none;
  border-radius:10000rem;
  font-size:1.25rem;
  padding:0.5rem 1rem;
  border:none;
  color:inherit;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  font-family:inherit;

  @media screen and (max-width: 40rem) {
    right:1.5rem;
    bottom:1.5rem;
    font-size:0.9rem;
  }

`

const Footer = styled.footer`
  padding:0 2rem;
  margin-top:auto;
`

function App() {

  const { isLoading, isError, data } = useRandomQuote();
  const queryClient = useQueryClient();

  function getNewRandomQuote() {
    queryClient.invalidateQueries();
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Error />
  }

  const { content, author } = data
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)]
  const tweetLink = `https://www.twitter.com/intent/tweet?text=${content}`

  return (
    <Container background={randomBackground}>
      <QuoteBox id="quote-box">
        <Text id="text">{content}</Text>
        <Author id="author">~ {author}</Author>
        <Footer>
          <Link href={tweetLink} id="tweet-quote">
            tweet quote
          </Link>
          <Button onClick={getNewRandomQuote} id="new-quote">new quote</Button>
        </Footer>
      </QuoteBox>
    </Container>
  );

}

export default App;
