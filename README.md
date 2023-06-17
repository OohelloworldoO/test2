# 非原創!參考資料在下方
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
一直遇到一個問題，明明有用API_KEY卻一直說我沒有提供:    
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
結果發現是這段打錯 少了一個空格
```
"Authorization": "Bearer" + API_KEY -> "Authorization": "Bearer " + API_KEY
```
但我發現還是不能正常訪問，原因是我沒注意到在Introducing原文裡面有寫到:0.006 $/per min
```
error: 
code: null
message: 
"You exceeded your current quota, please check your plan and billing details."
param: null
type: "insufficient_quota"
```
但程式碼是可以正常運行的，只差在沒有額度而已

參考: https://www.youtube.com/watch?v=Lag9Pj_33hM&list=PL2EvjydS1n0t2vvfrOJJ6OxN7HqWNqC5p&index=7&t=1137s&ab_channel=CooperCodes  
參考: https://openai.com/blog/introducing-chatgpt-and-whisper-apis  
參考: https://platform.openai.com/docs/api-reference/completions/create  
