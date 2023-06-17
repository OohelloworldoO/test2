import { useState } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, MessageInput, Message, TypingIndicator} from "@chatscope/chat-ui-kit-react"
const API_KEY = "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"


function App() {
const [typing, setTyping] = useState(false)

const [messages, setMessages] = useState([
    {
      message: "hello I'm chatgpt",
      send: "ChatGPT"
    }
  ])

const handleSend = async(message) => {
  const newMessage = {
    message: message,
    sender: "user",
    direction: "outgoing"
  }

  //所有之前的對話紀錄 + 新的訊息
  const newMessages = [...messages, newMessage]

  //更新我們訊息的state
  setMessages(newMessages)

  //顯示ChatGPT正在輸入...
  setTyping(true)

  //傳送跟接收chatGPT的訊息
  await processMessageToChatGPT(newMessages)
}

async function processMessageToChatGPT(chatMessages){
  let apiMessages = chatMessages.map((messageObject) =>{
    let role = ""
    if(messageObject.sender === "ChatGPT"){
      role = "assistant"
    }
    else{
      role = "user"
    }
    return { role: role, content: messageObject.message }
  })
    //"system" -> 我們希望gpt如何說話
  const systemMessage = {
    role: "system",
    content: "Explain all concepts like I am 21 years old college student of Computer Science."
  }
  // role: "user" -> message from user, "assistant" -> response from gpt

  const apiRequestBody = {
    "model": "gpt-3.5-turbo",
    "messages": [
      systemMessage,
      ...apiMessages
    ]
  }

  await fetch("https://api.openai.com/v1/chat/completions",{
    method : "POST",
    headers: {
      "Authorization": "Bearer " + API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apiRequestBody)
  }).then((data) => {
    return data.json()
  }).then((data) => {
    console.log(data)
    // console.log(data.choices[0].message.content)
  })
}

  return (
    <div className='App'>
      <div style={{ position: "relative", height: "800px", width: "700px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={ typing ? <TypingIndicator content="ChatGPT正在對鍵盤強力輸出..."/> : null }
            >
            {
              messages.map((message, i) =>{
                return <Message key={i} model={message} />
              })
            }
            </MessageList>

            <MessageInput placeholder='請輸入...' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default App
