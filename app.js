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
    <style >
            body{
                text-align: center;
            }
            .box{
                line-height: 50px;
                height: 50px;
                width: 190px;
                background-color:rgb(99, 67, 180);
                color: white;
            }
            .color-text{
                    color :rgb(32, 186, 228);
            }
            .co-chu{
                font-family:  Arial, sans-serif; 
            }
            .colored-botton{
                border: dark 2px ridge;
                border-radius: 10px;
                line-height: 50px;
                height: 50px;
                width: 190px;
                background-color:black;
                color: white;
        }
        .colored-botton:hover{
            background-color: yellow ;
            transition: 0.4s background-color;
        }
        </style>
    </head>

    <body>
        <center>
            <p class="box">190 x 50</p> 
        </center>
        <h1>
             <p class="co-chu">Best <span class="color-text">Share Hosting</span> Company </p> 
            </h1>
        <h4> 
            <p class="co-chu">With this responsive landing page template, you can promote your all hosting, domain and email servers. </p>
         </h4>
        <p>
            <button type="submit" class="colored-botton">View Plan </button>
            <button type="submit" class="colored-botton">All Features </button>
        </p>
    </body>
</html>
`
