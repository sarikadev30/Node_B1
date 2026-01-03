# Introduction to Node JS

## Client - Server Architecture

Client => Requests => Server
Client <= Response <= Server

CLIENT SIDE =>

- Request includes:
  - HTTP Method (GET , POST, PUT , PATCH, DELETE)
  - Headers
  - Body (POST, PUT , PATCH) (optional)

SERVER SIDE =>

- Server is a computer (cloud service)
- It takes the request and process it and return the response
- Processing :

  - Static Data :
    - It returns a HTML Page
  - Dynamic Task :
    - Querying a database
    - Running Serverside script
    - Accessing other APIs
      - Ex=> Node Js Project => APIs "Love" => POST method => Connecting CHAT GPT API

- Response includes :
  - HTTP status code (200 => success , 404 => not Found, 500 => Internal Server Error)
  - Headers
  - Body (must) (HTML / JSON)

Client => after getting the response parse (JSON DATA) it and render the content.

## Evolution of Web Engines

- Layout Engine :
  - It parses the HTML/CSS and make a layout of the page.
  - IE => Trident
  - Google => Blink
  - Firefox => Gaeco
- Javascript Engine :
  - 1995 Netscape introduces javascript as client-side scripting.
  - Brendian Eich created it in 10 days
  - Used to handle logics, events and DOM Manipulation
    - Google built their on=wn JS engine => V8 engine

### DOM ()

### BOM (Browser Object Model)

    ```
        BOM
    			window
    		 ├── document (DOM)
    		 ├── location
    		 ├── history
    		 ├── navigator
    		 ├── screen
    		 ├── localStorage
    		 ├── sessionStorage
    		 ├── console
    		 └── setTimeout / setInterval
    ```

### WORE / WORA

Write Once Run Everywhere / Write Once Run Anywhere

- central repository => npm
