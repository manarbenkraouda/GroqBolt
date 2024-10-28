import { createGroq } from '@ai-sdk/groq';

export function getGroqModel(apiKey: string) {
  const groq = createGroq({
    apiKey,
  });

  return groq('mixtral-8x7b-32768');
}