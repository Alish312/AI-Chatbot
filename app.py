import os
from dotenv import load_dotenv
from groq import Groq
from flask import Flask, render_template, request, jsonify


app = Flask(__name__)
conversation_history = []

load_dotenv()
client =Groq(api_key=os.getenv("GEMINI_API_KEY"))


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])

def chat():
    data = request.get_json()
    message = data["message"]
    conversation_history.append({
    "role": "user",
    "content": message
})
    
    response = client.chat.completions.create(
        model="openai/gpt-oss-20b",
       messages=[
    {
        "role": "system",
        "content": "You are a helpful and friendly AI assistant. Give clear, simple, consie, and accurate answers that are easily readable and dont add to many symbols. Use correct punctuation marks.  Use bullet points or numbered lists when they make the answer easier to understand. Use short paragraphs for simple questions."
    },
        *conversation_history
],
    )
    ai_response = response.choices[0].message.content
    conversation_history.append({
    "role": "assistant",
    "content": ai_response
})
    return jsonify({"response":ai_response})

if __name__ == "__main__":
    app.run(debug=True)