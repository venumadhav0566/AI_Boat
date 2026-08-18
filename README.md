# 🤖 AI Chatbot Interface

A modern and responsive **AI Chatbot Interface** built using **HTML, CSS, and JavaScript**. This project provides a clean ChatGPT-style interface with a sidebar, chat history, quick actions, typing animation, dark mode, and interactive chatbot responses.

> **Note:** This is currently a frontend/demo chatbot. The AI responses are generated locally using JavaScript. It can later be connected to a real AI API or Python Flask/FastAPI backend.

## ✨ Features

* 🤖 Modern AI chatbot interface
* 💬 Real-time message display
* ⌨️ Enter key support for sending messages
* ✍️ Animated AI typing indicator
* 🐍 Python project suggestions
* 🌐 HTML/Web development information
* 🗄️ SQL interview topics
* 🚀 Project recommendations
* 💼 Job and career guidance
* 📄 Resume tips
* 🎯 Interview preparation
* ⚡ Quick action buttons
* 🌙 Dark mode
* 🗑️ Clear chat
* ➕ New chat
* 💾 Local chat history
* 📱 Responsive mobile design
* 🔊 Text-to-speech support
* 🎤 Voice input support
* 📋 Copy AI responses
* 👍 Like / 👎 Dislike responses
* 🔄 Regenerate responses
* ⏹️ Stop AI response generation
* 🔍 Search conversation
* 📥 Export chat history
* 🟢 Online/offline status

## 🛠️ Technologies Used

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| HTML5          | Website structure              |
| CSS3           | Styling and responsive design  |
| JavaScript     | Chatbot functionality          |
| LocalStorage   | Chat history                   |
| Web Speech API | Voice input and text-to-speech |

## 📂 Project Structure

```text
AI-Chatbot/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🎨 Interface

The application contains:

```text
┌─────────────────────────────────────────────────────────┐
│ 🤖 AI Assistant                         ⋮               │
├───────────────┬─────────────────────────────────────────┤
│               │                                         │
│ + New Chat    │       🤖 AI Assistant                   │
│               │                                         │
│ Recent Chats  │       Hello! 👋                         │
│               │       How can I help you?               │
│ 💬 Python     │                                         │
│ 💬 Web Dev    │       👤 Give me Python projects        │
│ 💬 SQL        │                                         │
│ 💬 Interview  │       🤖 Here are some Python ideas...  │
│               │                                         │
│ 🌙 Dark Mode  │                                         │
│ 🗑️ Clear Chat │                                         │
├───────────────┴─────────────────────────────────────────┤
│              Message AI Assistant...             ➤      │
└─────────────────────────────────────────────────────────┘
```

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/ai-chatbot.git
```

### 2. Open the project

```bash
cd ai-chatbot
```

### 3. Run the application

Simply open:

```text
index.html
```

in your browser.

You can also use **VS Code + Live Server**.

### Using Live Server

1. Open the project in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The chatbot will open in your browser.

## 💬 Example Questions

Try asking:

```text
Give me Python project ideas
```

```text
Explain HTML
```

```text
Give me SQL interview questions
```

```text
Help me prepare for an interview
```

```text
Give me AI project ideas
```

```text
Give me resume tips
```

## 🧠 Current AI Logic

The current application uses JavaScript keyword matching.

For example:

```javascript
if (text.includes("python")) {

    return `
        🐍 Python Project Ideas
        ...
    `;

}
```

This means the chatbot can provide predefined responses without requiring a backend or API.

## 🔮 Future Improvements

The project can be upgraded into a real AI application by adding:

* 🔥 OpenAI/Gemini API integration
* 🐍 Python Flask backend
* ⚡ FastAPI backend
* 🗄️ MySQL database
* 👤 User authentication
* 💾 Persistent conversations
* 📎 File upload
* 🖼️ Image understanding
* 🎙️ Advanced voice conversation
* 🌐 Real-time streaming AI responses
* 🔐 Secure API authentication
* 📊 Chat analytics
* 👥 Multiple users
* 🧠 Conversation memory

### Future Architecture

```text
User
 │
 ▼
HTML + CSS + JavaScript
 │
 ▼
Flask / FastAPI
 │
 ▼
AI API
 │
 ▼
AI Model
 │
 ▼
Streaming Response
 │
 ▼
Chatbot UI
```

## 📱 Responsive Design

The interface is designed to work on:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

On smaller screens, the sidebar automatically hides to provide more space for the conversation.

## 🎯 Project Purpose

This project is useful for learning:

* DOM manipulation
* JavaScript events
* Async JavaScript
* LocalStorage
* Responsive CSS
* Chat UI design
* Browser APIs
* Frontend project development

## 👨‍💻 Author

**Venu Madhava Reddy**

B.Tech Computer Science Engineering

### ⭐ Support

If you find this project useful, please consider giving the repository a **⭐ Star** on GitHub.

---

## 📄 License

This project is open-source and available for educational and personal use.
