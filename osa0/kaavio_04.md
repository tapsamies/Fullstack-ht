```mermaid
sequenceDiagram
participant browser
participant server

browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
browser->>-server: data
browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->>-browser: HTML document
browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server -->>-browser: the css file
browser ->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
server -->>- browser: the Javascript file
note over server,browser: browser starts to execute Javascript, which in turn fetches the json from the server
browser ->>+ server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server -->>- browser: the contents in json format
note over server.browser: browser executes the callback function that renders the notes
```
