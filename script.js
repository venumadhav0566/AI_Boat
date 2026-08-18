/* =========================================================
   AI CHATBOT - script.js
   Features:
   ✅ Real-time typing effect
   ✅ Thinking animation
   ✅ Stop generation
   ✅ Regenerate response
   ✅ Voice input
   ✅ Text-to-speech
   ✅ Copy response
   ✅ Like / Dislike
   ✅ Dark mode
   ✅ Chat history
   ✅ Export chat
   ✅ Search chat
   ✅ Online / Offline status
   ✅ Message timestamps
   ✅ Character counter
   ✅ Quick messages
========================================================= */


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const typing = document.getElementById("typing");

let isGenerating = false;
let stopGeneration = false;
let lastUserMessage = "";


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadChatHistory();

    loadDarkMode();

    updateCharacterCount();

    updateOnlineStatus();

});


/* =========================================================
   SEND MESSAGE
========================================================= */

async function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    if (isGenerating) {
        return;
    }

    lastUserMessage = message;

    addUserMessage(message);

    userInput.value = "";

    updateCharacterCount();

    isGenerating = true;

    stopGeneration = false;

    showTyping();

    await sleep(700);

    if (stopGeneration) {
        hideTyping();
        isGenerating = false;
        return;
    }

    hideTyping();

    const response = generateAIResponse(message);

    await typeBotMessage(response);

    isGenerating = false;

    saveChatHistory();

}


/* =========================================================
   ADD USER MESSAGE
========================================================= */

function addUserMessage(message) {

    const div = document.createElement("div");

    div.className = "message user-message";

    div.innerHTML = `

        <div class="message-content">

            <p>
                ${escapeHTML(message)}
            </p>

            <small class="time">

                ${getCurrentTime()}

                <span class="seen">
                    ✓✓
                </span>

            </small>

        </div>

        <div class="avatar">
            👤
        </div>

    `;

    chatBox.appendChild(div);

    scrollToBottom();

}


/* =========================================================
   REAL-TIME BOT MESSAGE
========================================================= */

async function typeBotMessage(message) {

    const div = document.createElement("div");

    div.className = "message bot-message";

    div.innerHTML = `

        <div class="avatar">
            🤖
        </div>

        <div class="message-content">

            <strong>AI Assistant</strong>

            <p class="bot-text"></p>

            <small class="time">
                ${getCurrentTime()}
            </small>

            <div class="message-actions">

                <button
                    onclick="copyMessage(this)"
                    title="Copy">
                    📋
                </button>

                <button
                    onclick="likeMessage(this)"
                    title="Like">
                    👍
                </button>

                <button
                    onclick="dislikeMessage(this)"
                    title="Dislike">
                    👎
                </button>

                <button
                    onclick="speakMessage(this)"
                    title="Read aloud">
                    🔊
                </button>

                <button
                    onclick="regenerateResponse(this)"
                    title="Regenerate">
                    🔄
                </button>

            </div>

        </div>

    `;

    chatBox.appendChild(div);

    const output =
        div.querySelector(".bot-text");

    /*
       Type HTML response in real time.

       We use small chunks instead of one huge
       response so the chatbot feels alive.
    */

    let index = 0;

    const speed = 18;

    while (index < message.length) {

        if (stopGeneration) {

            output.innerHTML +=
                `<br><br>
                <em>⏹ Response stopped.</em>`;

            break;
        }

        const chunk =
            message.substring(index, index + 3);

        output.innerHTML += chunk;

        index += 3;

        scrollToBottom();

        await sleep(speed);

    }

    saveChatHistory();

}


/* =========================================================
   AI RESPONSE ENGINE
========================================================= */

function generateAIResponse(message) {

    const text =
        message.toLowerCase().trim();


    /* GREETING */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey") ||
        text.includes("hai") ||
        text.includes("good morning") ||
        text.includes("good evening")
    ) {

        return `
            👋 <strong>Hello!</strong>

            <br><br>

            I'm your AI Assistant 🤖

            <br><br>

            I can help you with:

            <br><br>

            🐍 Python<br>
            🌐 HTML / CSS / JavaScript<br>
            🗄️ SQL / MySQL<br>
            🤖 AI & Machine Learning<br>
            🚀 Projects<br>
            💼 Jobs & Career<br>
            📄 Resume<br>
            🎓 Interview Preparation
        `;

    }


    /* PYTHON */

    if (text.includes("python")) {

        return `
            🐍 <strong>Python</strong>

            <br><br>

            Python is widely used for:

            <br><br>

            • Web Development<br>
            • AI & Machine Learning<br>
            • Automation<br>
            • Data Science<br>
            • APIs<br>
            • Desktop Applications

            <br><br>

            <strong>Project Ideas:</strong>

            <br><br>

            1️⃣ AI Chatbot<br>
            2️⃣ Face Recognition<br>
            3️⃣ Weather App<br>
            4️⃣ Expense Tracker<br>
            5️⃣ Job Portal<br>
            6️⃣ E-Commerce Website
        `;

    }


    /* HTML */

    if (
        text.includes("html") ||
        text.includes("web development")
    ) {

        return `
            🌐 <strong>Web Development</strong>

            <br><br>

            HTML → Structure 🧱

            <br>

            CSS → Design 🎨

            <br>

            JavaScript → Functionality ⚡

            <br><br>

            You can build:

            <br><br>

            • Portfolio Websites<br>
            • Chatbots<br>
            • Dashboards<br>
            • E-Commerce Websites<br>
            • Job Portals<br>
            • Hospital Systems
        `;

    }


    /* CSS */

    if (text.includes("css")) {

        return `
            🎨 <strong>CSS</strong>

            <br><br>

            CSS is used to style websites.

            <br><br>

            Important topics:

            <br><br>

            • Flexbox<br>
            • Grid<br>
            • Animations<br>
            • Responsive Design<br>
            • Media Queries<br>
            • Transitions<br>
            • Gradients
        `;

    }


    /* JAVASCRIPT */

    if (
        text.includes("javascript") ||
        text === "js" ||
        text.includes(" javascript ")
    ) {

        return `
            ⚡ <strong>JavaScript</strong>

            <br><br>

            JavaScript adds functionality
            and interactivity to websites.

            <br><br>

            You can create:

            <br><br>

            • Chatbots<br>
            • Games<br>
            • Dashboards<br>
            • Web Apps<br>
            • API Applications<br>
            • Real-time Applications
        `;

    }


    /* SQL */

    if (
        text.includes("sql") ||
        text.includes("mysql")
    ) {

        return `
            🗄️ <strong>SQL / MySQL</strong>

            <br><br>

            Important interview topics:

            <br><br>

            • SELECT<br>
            • WHERE<br>
            • JOIN<br>
            • GROUP BY<br>
            • HAVING<br>
            • Subqueries<br>
            • Window Functions<br>
            • Views<br>
            • Triggers<br>
            • Stored Procedures
        `;

    }


    /* PROJECTS */

    if (
        text.includes("project") ||
        text.includes("projects")
    ) {

        return `
            🚀 <strong>Project Ideas</strong>

            <br><br>

            1️⃣ AI Resume Analyzer

            <br>

            2️⃣ AI Job Portal

            <br>

            3️⃣ E-Commerce Website

            <br>

            4️⃣ Hospital Management System

            <br>

            5️⃣ Online Exam System

            <br>

            6️⃣ Food Delivery App

            <br>

            7️⃣ Expense Management System

            <br>

            8️⃣ AI Chatbot

            <br>

            9️⃣ Attendance System

            <br>

            🔟 Weather Application
        `;

    }


    /* RESUME */

    if (
        text.includes("resume") ||
        text.includes("cv")
    ) {

        return `
            📄 <strong>Resume Tips for Freshers</strong>

            <br><br>

            Your resume should contain:

            <br><br>

            ✅ Career Objective<br>
            ✅ Technical Skills<br>
            ✅ Projects<br>
            ✅ Education<br>
            ✅ Certifications<br>
            ✅ Internship<br>
            ✅ GitHub<br>
            ✅ LinkedIn

            <br><br>

            Keep your resume clean,
            simple and ATS-friendly.
        `;

    }


    /* JOB */

    if (
        text.includes("job") ||
        text.includes("career")
    ) {

        return `
            💼 <strong>Fresher Job Preparation</strong>

            <br><br>

            Focus on:

            <br><br>

            🐍 Python<br>
            🗄️ SQL<br>
            🧠 OOP<br>
            🌐 HTML/CSS/JS<br>
            💻 Data Structures<br>
            🎯 Aptitude<br>
            🗣️ Communication

            <br><br>

            Build 2–3 strong projects
            and keep your GitHub updated.
        `;

    }


    /* AI */

    if (
        text.includes("artificial intelligence") ||
        text.includes("machine learning") ||
        text.includes("ai")
    ) {

        return `
            🤖 <strong>AI & Machine Learning</strong>

            <br><br>

            Important technologies:

            <br><br>

            • Python<br>
            • NumPy<br>
            • Pandas<br>
            • Matplotlib<br>
            • Scikit-learn<br>
            • Neural Networks<br>
            • CNN<br>
            • NLP<br>
            • Generative AI
        `;

    }


    /* INTERVIEW */

    if (
        text.includes("interview") ||
        text.includes("interview questions")
    ) {

        return `
            🎯 <strong>Interview Preparation</strong>

            <br><br>

            Prepare these areas:

            <br><br>

            1️⃣ Python<br>
            2️⃣ SQL<br>
            3️⃣ OOP<br>
            4️⃣ Data Structures<br>
            5️⃣ HTML/CSS/JS<br>
            6️⃣ Projects<br>
            7️⃣ HR Questions

            <br><br>

            I can also conduct a
            <strong>mock interview</strong>.
        `;

    }


    /* TIME */

    if (
        text.includes("time") ||
        text.includes("date")
    ) {

        return `
            🕒 <strong>Current Date & Time</strong>

            <br><br>

            ${new Date().toLocaleString()}
        `;

    }


    /* HELP */

    if (
        text.includes("help") ||
        text.includes("what can you do")
    ) {

        return `
            🤖 <strong>What I Can Do</strong>

            <br><br>

            🐍 Python Help<br>
            🌐 Web Development<br>
            🗄️ SQL Help<br>
            🤖 AI / ML<br>
            🚀 Project Ideas<br>
            💼 Career Guidance<br>
            📄 Resume Tips<br>
            🎯 Interview Preparation
        `;

    }


    /* THANK YOU */

    if (
        text.includes("thank you") ||
        text.includes("thanks")
    ) {

        return `
            😊 You're welcome!

            <br><br>

            Feel free to ask me anything.
            🚀
        `;

    }


    /* DEFAULT */

    return `
        🤖 <strong>I received your message.</strong>

        <br><br>

        You said:

        <br><br>

        <em>
            "${escapeHTML(message)}"
        </em>

        <br><br>

        I'm currently running in
        <strong>Demo Mode</strong>.

        <br><br>

        Try asking me about:

        <br><br>

        🐍 Python<br>
        🌐 HTML<br>
        ⚡ JavaScript<br>
        🗄️ SQL<br>
        🤖 AI<br>
        🚀 Projects<br>
        💼 Jobs<br>
        📄 Resume
    `;

}


/* =========================================================
   TYPING INDICATOR
========================================================= */

function showTyping() {

    if (typing) {

        typing.classList.remove("hidden");

    }

    scrollToBottom();

}


function hideTyping() {

    if (typing) {

        typing.classList.add("hidden");

    }

}


/* =========================================================
   STOP GENERATION
========================================================= */

function stopAIResponse() {

    stopGeneration = true;

    isGenerating = false;

    hideTyping();

}


/* =========================================================
   QUICK MESSAGE
========================================================= */

function quickMessage(message) {

    if (isGenerating) {
        return;
    }

    userInput.value = message;

    updateCharacterCount();

    sendMessage();

}


/* =========================================================
   NEW CHAT
========================================================= */

function newChat() {

    if (isGenerating) {
        stopAIResponse();
    }

    chatBox.innerHTML = `

        <div class="message bot-message">

            <div class="avatar">
                🤖
            </div>

            <div class="message-content">

                <strong>AI Assistant</strong>

                <p>
                    New conversation started! 🚀
                    <br><br>
                    How can I help you?
                </p>

                <small class="time">
                    ${getCurrentTime()}
                </small>

            </div>

        </div>

    `;

    saveChatHistory();

}


/* =========================================================
   CLEAR CHAT
========================================================= */

function clearChat() {

    if (
        confirm(
            "Are you sure you want to clear the chat?"
        )
    ) {

        chatBox.innerHTML = "";

        localStorage.removeItem(
            "aiChatHistory"
        );

    }

}


/* =========================================================
   DARK MODE
========================================================= */

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const enabled =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "darkMode",
        enabled
    );

}


function loadDarkMode() {

    const enabled =
        localStorage.getItem("darkMode");

    if (enabled === "true") {

        document.body.classList.add("dark");

    }

}


/* =========================================================
   ENTER KEY
========================================================= */

function handleKey(event) {

    if (
        event.key === "Enter" &&
        !event.shiftKey
    ) {

        event.preventDefault();

        sendMessage();

    }

}


/* =========================================================
   SCROLL
========================================================= */

function scrollToBottom() {

    setTimeout(() => {

        if (chatBox) {

            chatBox.scrollTo({

                top: chatBox.scrollHeight,

                behavior: "smooth"

            });

        }

    }, 30);

}


/* =========================================================
   CHARACTER COUNTER
========================================================= */

function updateCharacterCount() {

    const counter =
        document.getElementById("charCount");

    if (!counter || !userInput) {
        return;
    }

    counter.innerText =
        `${userInput.value.length}/1000`;

}


/* =========================================================
   COPY MESSAGE
========================================================= */

function copyMessage(button) {

    const content =
        button.closest(".message-content");

    if (!content) {
        return;
    }

    const paragraph =
        content.querySelector("p");

    if (!paragraph) {
        return;
    }

    navigator.clipboard
        .writeText(paragraph.innerText)
        .then(() => {

            const oldText =
                button.innerText;

            button.innerText = "✅";

            setTimeout(() => {

                button.innerText = oldText;

            }, 1200);

        });

}


/* =========================================================
   LIKE
========================================================= */

function likeMessage(button) {

    button.classList.toggle("active");

    const dislike =
        button.parentElement
            .querySelector(
                'button[onclick*="dislikeMessage"]'
            );

    if (dislike) {

        dislike.classList.remove("active");

    }

}


/* =========================================================
   DISLIKE
========================================================= */

function dislikeMessage(button) {

    button.classList.toggle("active");

    const like =
        button.parentElement
            .querySelector(
                'button[onclick*="likeMessage"]'
            );

    if (like) {

        like.classList.remove("active");

    }

}


/* =========================================================
   TEXT TO SPEECH
========================================================= */

function speakMessage(button) {

    if (!("speechSynthesis" in window)) {

        alert(
            "Text-to-speech is not supported."
        );

        return;

    }

    const content =
        button.closest(".message-content");

    if (!content) {
        return;
    }

    const paragraph =
        content.querySelector("p");

    if (!paragraph) {
        return;
    }

    const text =
        paragraph.innerText;

    speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "en-IN";

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    speechSynthesis.speak(speech);

}


/* =========================================================
   VOICE INPUT
========================================================= */

function startVoiceInput() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

        alert(
            "Voice recognition is not supported. Try Chrome."
        );

        return;

    }

    const recognition =
        new SpeechRecognition();

    recognition.lang = "en-IN";

    recognition.continuous = false;

    recognition.interimResults = true;

    recognition.maxAlternatives = 1;


    recognition.onstart = function () {

        userInput.placeholder =
            "🎤 Listening...";

    };


    recognition.onresult =
        function(event) {

            let transcript = "";

            for (
                let i = event.resultIndex;
                i < event.results.length;
                i++
            ) {

                transcript +=
                    event.results[i][0].transcript;

            }

            userInput.value =
                transcript;

            updateCharacterCount();

        };


    recognition.onend = function() {

        userInput.placeholder =
            "Type your message...";

    };


    recognition.onerror =
        function() {

            userInput.placeholder =
                "Type your message...";

            alert(
                "Could not understand your voice."
            );

        };


    recognition.start();

}


/* =========================================================
   CHAT HISTORY
========================================================= */

function saveChatHistory() {

    if (!chatBox) {
        return;
    }

    localStorage.setItem(
        "aiChatHistory",
        chatBox.innerHTML
    );

}


function loadChatHistory() {

    const history =
        localStorage.getItem(
            "aiChatHistory"
        );

    if (
        history &&
        chatBox
    ) {

        chatBox.innerHTML =
            history;

        scrollToBottom();

    }

}


/* =========================================================
   EXPORT CHAT
========================================================= */

function exportChat() {

    const messages =
        chatBox.querySelectorAll(
            ".message"
        );

    let text =
        "AI ASSISTANT CHAT HISTORY\n";

    text +=
        "============================\n\n";


    messages.forEach(message => {

        const content =
            message.querySelector(
                ".message-content"
            );

        if (!content) {
            return;
        }

        const name =
            message.classList.contains(
                "user-message"
            )
                ? "You"
                : "AI Assistant";

        const paragraph =
            content.querySelector("p");

        if (paragraph) {

            text +=
                `${name}: ` +
                `${paragraph.innerText}\n\n`;

        }

    });


    const blob =
        new Blob(
            [text],
            {
                type: "text/plain"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        "ai-chat-history.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

}


/* =========================================================
   SEARCH CHAT
========================================================= */

function searchChat() {

    const search =
        prompt(
            "Search your conversation:"
        );

    if (!search) {
        return;
    }

    const messages =
        chatBox.querySelectorAll(
            ".message"
        );

    let found = false;


    messages.forEach(message => {

        const text =
            message.innerText
                .toLowerCase();

        if (
            text.includes(
                search.toLowerCase()
            )
        ) {

            message.style.display =
                "flex";

            message.style.border =
                "2px solid #6366f1";

            found = true;

        } else {

            message.style.display =
                "none";

        }

    });


    if (!found) {

        alert(
            "No matching message found."
        );

        resetSearch();

    }

}


/* =========================================================
   RESET SEARCH
========================================================= */

function resetSearch() {

    const messages =
        chatBox.querySelectorAll(
            ".message"
        );

    messages.forEach(message => {

        message.style.display =
            "flex";

        message.style.border =
            "";

    });

}


/* =========================================================
   REGENERATE RESPONSE
========================================================= */

async function regenerateResponse(button) {

    if (isGenerating) {
        return;
    }

    const message =
        button.closest(".message");

    if (message) {

        message.remove();

    }

    if (!lastUserMessage) {

        const userMessages =
            chatBox.querySelectorAll(
                ".user-message"
            );

        if (userMessages.length) {

            const last =
                userMessages[
                    userMessages.length - 1
                ];

            lastUserMessage =
                last.querySelector(
                    "p"
                ).innerText;

        }

    }

    if (!lastUserMessage) {
        return;
    }

    isGenerating = true;

    stopGeneration = false;

    showTyping();

    await sleep(500);

    hideTyping();

    const response =
        generateAIResponse(
            lastUserMessage
        );

    await typeBotMessage(response);

    isGenerating = false;

    saveChatHistory();

}


/* =========================================================
   ONLINE / OFFLINE STATUS
========================================================= */

function updateOnlineStatus() {

    const statusText =
        document.getElementById(
            "statusText"
        );

    const statusDot =
        document.getElementById(
            "statusDot"
        );


    if (!statusText) {
        return;
    }


    if (navigator.onLine) {

        statusText.innerText =
            "Online";

        if (statusDot) {

            statusDot.classList.add(
                "online"
            );

        }

    } else {

        statusText.innerText =
            "Offline";

        if (statusDot) {

            statusDot.classList.remove(
                "online"
            );

        }

    }

}


window.addEventListener(
    "online",
    updateOnlineStatus
);


window.addEventListener(
    "offline",
    updateOnlineStatus
);


/* =========================================================
   SLEEP
========================================================= */

function sleep(milliseconds) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                milliseconds
            )
    );

}


/* =========================================================
   SECURITY
========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================================================
   CURRENT TIME
========================================================= */

function getCurrentTime() {

    return new Date()
        .toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

}


/* =========================================================
   WINDOW EXPORTS
   Makes functions available to HTML onclick=""
========================================================= */

window.sendMessage = sendMessage;
window.quickMessage = quickMessage;
window.newChat = newChat;
window.clearChat = clearChat;
window.toggleDarkMode = toggleDarkMode;
window.handleKey = handleKey;
window.startVoiceInput = startVoiceInput;
window.copyMessage = copyMessage;
window.likeMessage = likeMessage;
window.dislikeMessage = dislikeMessage;
window.speakMessage = speakMessage;
window.exportChat = exportChat;
window.searchChat = searchChat;
window.resetSearch = resetSearch;
window.regenerateResponse = regenerateResponse;
window.stopAIResponse = stopAIResponse;
window.updateCharacterCount = updateCharacterCount;