# AI Chatbot

A simple command-line AI chatbot built as part of my AI Internship Day 1 practical task.

## What I Built

I built a basic AI chatbot that:

- Accepts a message from the user through the command line
- Sends the message to the Gemini AI API
- Receives an AI-generated response
- Displays the response in the terminal
- Allows the user to exit the chatbot by typing `exit`

## Technologies Used

- Python
- Google Gemini API
- Google GenAI Python SDK
- python-dotenv
- Git & GitHub

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/Alish312/AI-Chatbot.git
cd AI-Chatbot
```

### 2. Create and activate a virtual environment

```bash
python -m venv .venv
```

On Windows:

```powershell
.venv\Scripts\Activate.ps1
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Create a `.env` file

Add your Gemini API key:

```env
GEMINI_API_KEY=your_api_key_here
```

### 5. Run the chatbot

```bash
python app.py
```

Type a message and press Enter.

To exit:

```text
exit
```

## API Integration Approach

The chatbot uses the Google GenAI Python SDK to connect to the Gemini API.

The user's input is sent to the Gemini model, and the generated response is returned and displayed in the terminal.

The API key is stored in a `.env` file and is excluded from Git using `.gitignore`.

## What I Learned

Through this project, I learned:

- How to create a basic Python AI application
- How to work with an AI API
- How to store API keys securely using environment variables
- How to use a Python virtual environment
- How to manage project dependencies using `requirements.txt`
- How to use Git and GitHub for version control

## What I Would Improve Next

If I continue developing this project, I would add:

- Conversation history
- Error handling
- A simple web interface
- Markdown-formatted responses

## Project Structure

```text
AI Chatbot/
│
├── app.py
├── requirements.txt
├── .gitignore
├── .env
└── README.md
```
