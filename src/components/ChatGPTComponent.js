import React, { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const ChatGPTComponent = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: "Say Hello World!",
          temperature: 0,
          max_tokens: 64,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
          stop: ['"""'],
        });

        setResponse(completion.data.choices[0].text);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchResponse();
  }, []);

  return <h1>{response}</h1>;
};

export default ChatGPTComponent;
