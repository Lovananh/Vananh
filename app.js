const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
   <style> 
        table { 
            border: 1px solid black; 
            margin-left: auto; 
            margin-right: auto; 
        } 
          
        input[type="button"] { 
            width: 100%; 
            padding: 20px 40px; 
            background-color: green; 
            color: white; 
            font-size: 24px; 
            font-weight: bold; 
            border: none; 
            border-radius: 5px; 
        } 
          
        input[type="text"] { 
            padding: 20px 30px; 
            font-size: 24px; 
            font-weight: bold; 
            border: none; 
            border-radius: 5px; 
            border: 2px solid black; 
        } 
    </style> 
</head> 
  
<body> 
  
    <!-- Create table -->
    <table id="calcu"> 
        <tr> 
            <td colspan="3"> 
                <input type="text" id="result"> 
            </td> 
            <td><input type="button" value="c"></td> 
        </tr> 
  
        <tr> 
            <td><input type="button" value="1"></td> 
            <td><input type="button" value="2"></td> 
            <td><input type="button" value="3"></td> 
            <td><input type="button" value="/"></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="4"></td> 
            <td><input type="button" value="5"></td> 
            <td><input type="button" value="6"></td> 
            <td><input type="button" value="*"></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="7"></td> 
            <td><input type="button" value="8"></td> 
            <td><input type="button" value="9"></td> 
            <td><input type="button" value="-"></td> 
        </tr> 
        <tr> 
            <td><input type="button" value="0"></td> 
            <td><input type="button" value="."></td> 
            <td><input type="button" value="="></td> 
            <td><input type="button" value="+"></td> 
        </tr> 
    </table> 
</body> 
</html>
`
