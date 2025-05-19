const { Client } = await import("@langchain/langgraph-sdk");
if (process.env.NODE_ENV !== "production") {
    console.log("Loading environment variables from .env file...");
    const dotenv = await import("dotenv");
    dotenv.config();
}

const client = new Client({ apiUrl: process.env.LANGGRAPH_API_URL });

const response = await client.runs.wait(
    null, // Threadless run
    "agent", // Assistant ID
    {
        input: {
            "messages": [
                { "role": "user", "content": "What can you do?"}
            ]
        },

    }
);

console.log(streamResponse.messages.pop().content);