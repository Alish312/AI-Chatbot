# AI Chatbot

A simple web-based AI chatbot built using Python, Flask, JavaScript, HTML, and CSS. The chatbot uses the Groq API to generate AI responses and maintains conversation history during the application session.

## Features

- User input and AI-generated responses
- Groq API integration
- Conversation history
- System prompt with defined AI behavior
- Loading state
- Error handling
- Input validation
- Markdown-formatted AI responses
- Clean chatbot interface
- Enter key support
- Smooth chat scrolling

## Technologies Used

- Python
- Flask
- JavaScript
- HTML5
- CSS3
- Groq API
- Marked.js
- python-dotenv

## Project Structure

```text
AI Chatbot/
│
├── app.py
├── .env
├── requirements.txt
├── README.md
│
├── templates/
│   └── Index.html
│
└── static/
    ├── style.css
    └── script.js
```

## How It Works

```text
User
  ↓
Web Interface
  ↓
JavaScript
  ↓
Flask Backend
  ↓
Groq API
  ↓
AI Model
  ↓
Flask Backend
  ↓
JavaScript
  ↓
Chat Interface
```

1. The user enters a message through the chatbot interface.
2. JavaScript sends the message to the Flask backend using a `POST` request.
3. Flask receives the message and adds it to the conversation history.
4. Flask sends the system prompt and conversation history to the Groq API.
5. The AI model generates a response.
6. The response is added to the conversation history.
7. Flask returns the response to the frontend as JSON.
8. JavaScript displays the response in the chatbot interface.
9. Markdown responses are rendered using Marked.js.

## Conversation History

The chatbot maintains conversation history using a Python list.

Each message contains a role and its content:

```python
{
    "role": "user",
    "content": "message"
}
```

and:

```python
{
    "role": "assistant",
    "content": "AI response"
}
```

This allows the AI model to receive previous messages and maintain context during the current application session.

> Note: Conversation history is stored in memory and is reset when the Flask application is restarted.

## System Prompt

The chatbot uses a system prompt to define the behavior of the AI assistant.

The assistant is instructed to:

- Be helpful and friendly
- Give clear and accurate answers
- Keep answers concise
- Use bullet points or numbered lists when useful
- Use short paragraphs for simple questions

## Error Handling

The frontend handles errors that may occur during communication with the backend.

If a request fails, the chatbot displays a user-friendly error message instead of failing silently.

## Input Validation

Before sending a message, JavaScript checks whether the input is empty or contains only whitespace.

Empty messages are not sent to the backend.

## Loading State

While waiting for the AI response, the chatbot displays:

```text
Bot: Thinking...
```

The loading message is removed when the AI response is received.

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Alish312/AI-Chatbot.git
```

### 2. Open the project folder

```bash
cd AI-Chatbot
```

### 3. Create a virtual environment

On Windows:

```powershell
python -m venv .venv
```

Activate it:

```powershell
.venv\Scripts\Activate.ps1
```

### 4. Install dependencies

```powershell
pip install -r requirements.txt
```

### 5. Configure the API key

Create a `.env` file in the project root:

```text
GROQ_API_KEY=your_api_key_here
```

Do not share your API key publicly.

### 6. Run the application

```powershell
python app.py
```

Open the local Flask address shown in the terminal in your browser.

## What I Learned

Through this project, I learned:

- How to integrate an external AI API
- How to build a backend using Flask
- How JavaScript communicates with a Python backend
- How HTTP POST requests work
- How JSON data is exchanged between frontend and backend
- How to use environment variables for API keys
- How to maintain conversation history
- How system prompts affect AI responses
- How to implement loading and error states
- How to render Markdown responses
- How to build a basic full-stack AI application

## Problems and Solutions

### API Model Error

The initially selected Groq model was not available for the API request.

**Solution:**  
I changed the model to:

```text
openai/gpt-oss-20b
```

### Connecting Frontend and Backend

The chatbot initially worked through the command line, but a web interface was required.

**Solution:**  
I used Flask as the backend and JavaScript `fetch()` to communicate with the `/chat` endpoint.

### Maintaining Conversation Context

A single API request does not automatically contain previous conversations.

**Solution:**  
I created a `conversation_history` list to store user and assistant messages and send them with subsequent requests.

### Markdown Responses

The AI returned responses containing Markdown formatting such as bullet points and numbered lists.

**Solution:**  
I integrated Marked.js to convert Markdown into formatted HTML.

### API and Network Errors

API or network problems can cause requests to fail.

**Solution:**  
I added frontend error handling using JavaScript's `.catch()` method and displayed a user-friendly error message.

## Future Improvements

- Clear chat button
- Persistent conversation storage
- User authentication
- Improved responsive design
- Voice input and output
- Database integration
- Deployment to a cloud platform

## Author

**Alisha Noor**

GitHub: https://github.com/Alish312
