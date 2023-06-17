以下是朋友遇到的問題:  
1.想找個人聊天  
2.不知道要吃甚麼  
3.遇到不會的問題找不到老師解答，或是免費的學習資源(有可能是他懶得找?)  

最近chatGPT很紅 我想試著用openAI寫一個chatbot，使用(Vite + React)  
也是第一次嘗試用react :D

```javascript
npm create vite@latest app -- --template react

cd app

npm i

npm i @chatscope/chat-ui-kit-react
```
Request:  
```
curl https://api.openai.com/v1/audio/transcriptions \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: multipart/form-data" \
  -F model="whisper-1" \
  -F file="@/path/to/file/openai.mp3"
```
