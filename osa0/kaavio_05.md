```mermaid
sequenceDiagram
participant browser
participant server
browser ->>+ server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server -->>- browser: HTML document
browser ->>+ server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server -->>- browser: the css file
browser ->>+ server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server -->>- browser: the Javascript file
browser ->>+ server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server -->>- browser: content of the json

```
