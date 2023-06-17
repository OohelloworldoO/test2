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
需要在PATH中新增Openai_Key，否則會顯示:  
```
{
    "error": {
        "message": "You didn't provide an API key. You need to provide your API key in an Authorization header using Bearer auth (i.e. Authorization: Bearer YOUR_KEY), or as the password field (with blank username) if you're accessing the API from your browser and are prompted for a username and password. You can obtain an API key from https://platform.openai.com/account/api-keys.",
        "type": "invalid_request_error",
        "param": null,
        "code": null
    }
}
```
