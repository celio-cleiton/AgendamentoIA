//Serviços API para Agendamento intelligent

/*import { OpenAI } from "openai"

const aiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const generateTimeSuggestions = async (userPreferences: any) => {
  const prompt = `Generate optimal time slots based on:
  - User history: ${userPreferences.history}
  - Professional availability: ${userPreferences.availability}
  - Business rules: ${userPreferences.rules}`
  
  const response = await aiClient.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }]
  })

  return parseAISuggestions(response.choices[0].message.content)
}*/