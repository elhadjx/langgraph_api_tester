const { Client } = await import("@langchain/langgraph-sdk");
if (process.env.NODE_ENV !== "production") {
    const dotenv = await import("dotenv");
    dotenv.config();
}

const client = new Client({ apiUrl: process.env.LANGGRAPH_API_URL });
console.log("Connecting to: ", process.env.LANGGRAPH_API_URL);
// wait 5 seconds
await new Promise(resolve => setTimeout(resolve, 5000));
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

console.log(response.messages.pop().content);