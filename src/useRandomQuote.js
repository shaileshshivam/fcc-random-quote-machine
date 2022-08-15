import { useQuery } from "@tanstack/react-query";

const QUOTES_API_ENDPOINT = "https://api.quotable.io/random?minLength=70&maxLength=220"

async function getRandomQuote() {
    const response = await fetch(QUOTES_API_ENDPOINT)
    return response.json();
}

export function useRandomQuote() {
    return useQuery(["quote"], getRandomQuote);
}
