// Get references to chat box, user input field, and send button
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Add event listeners for sending messages via button click or pressing "Enter" key
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
// Function to send a message from the user and handle bot response
function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        appendMessage(userMessage, 'user');
        userInput.value = '';
        simulateBotTyping(userMessage);
    }
}
// Function to append a new message to the chat box and auto-scroll to the latest message
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}
// Function to simulate bot typing by displaying a typing indicator
function simulateBotTyping(userMessage) {
    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('chat-message', 'bot', 'typing');
    typingIndicator.textContent = "Bot is typing...";
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom

    // Simulate a delay for the bot response
    setTimeout(() => {
        // Remove typing indicator
        chatBox.removeChild(typingIndicator);
        getBotResponse(userMessage);
    }, 1000); // Simulate a delay for the bot response
}
// Function to generate a bot response based on user input
function getBotResponse(userMessage) {
    let botResponse = "I'm not sure how to respond to that.";
    
    // Context-Free Grammar Rules
    const rules = [
     { pattern: /hello/i, response: "Hello! How can I help you today?" },
        { pattern: /hi/i, response: "Hi there! What can I do for you?" },
        { pattern: /how are you/i, response: "I'm just a bot, but thanks for asking! How about you?" },
        { pattern: /bye/i, response: "Goodbye! Have a great day!" },
        { pattern: /what is your name/i, response: "I'm a chatbot created to assist you!" },
        { pattern: /help/i, response: "Sure! What do you need help with?" },
        { pattern: /thank you/i, response: "You're welcome! If you have more questions, feel free to ask." },
        { pattern: /what can you do/i, response: "I can assist you with various queries. Just ask!" },
        { pattern: /tell me a joke/i, response: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
        { pattern: /what is the weather like/i, response: "I can't check the weather, but you can look it up online!" },
        { pattern: /who created you/i, response: "I was created by a team of developers to assist you!" },
        { pattern: /what is your purpose/i, response: "My purpose is to help you with your questions and provide information!" },
        { pattern: /i love you/i, response: "That's sweet! I'm here to help you, no matter what!" },
        { pattern: /can you chat with me/i, response: "Of course! I'm here to chat. What would you like to talk about?" },
        { pattern: /what is your favorite color/i, response: "I don't have a favorite color, but I think all colors are beautiful!" },
        { pattern: /tell me something interesting/i, response: "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!" },
        { pattern: /what time is it/i, response: "I can't tell the time, but you can check your device!" },
        { pattern: /help me with my homework/i, response: "I can try! What subject are you working on?" },
        { pattern: /what is your favorite food/i, response: "I don't eat, but I hear pizza is quite popular!" },
        { pattern: /do you have any hobbies/i, response: "I enjoy chatting with users like you!" },
        { pattern: /what is your favorite movie/i, response: "I don't watch movies, but I hear 'The Matrix' is a classic!" },
        { pattern: /tell me a fact/i, response: "Did you know that octopuses have three hearts?" }
    ];

    // Check user message against the rules
    for (const rule of rules) {
        if (rule.pattern.test(userMessage)) {
            botResponse = rule.response;
            break;
        }
    }

    // Append the bot response
    setTimeout(() => {
        appendMessage(botResponse, 'bot');
    }, 500); // Simulate a delay for the bot response
}