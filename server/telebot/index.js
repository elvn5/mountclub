const BOT_TOKEN = "1332123052:AAGBYbLcUQeHYLKgxubszSB2hyxLTs2lGyM";

// Dependencies
const express = require("express");
const app = express();
const axios = require("axios");
const port = 80;
const CHAT_URL =
  "https://api.telegram.org/bot1332123052:AAGBYbLcUQeHYLKgxubszSB2hyxLTs2lGyM/sendMessage?chat_id=-1001494531170";

// Configurations

app.use(require("cors")());
app.use(express.json({ extended: true }));
app.post("/book", (req, res) => {
  console.log('test');
  const book = req.body.data;
  axios
    .post(CHAT_URL, {
      parse_mode: "html",
      text: `
<b>Имя участника:</b> ${book.name}
<b>Фамилия участника:</b> ${book.surname}
<b>Номер участника:</b> ${book.phone}
<b>Локация</b>: <a href="${book.image}">${book.location}</a>
<b>Дата</b>: ${book.date}
<strong>Место сбора</strong>: ${book.meeting}
<b>Тип похода</b> ${book.tourType}
<b>Стоимость</b> ${book.price} сом
`,
    })
    .catch((e) => console.log("err"));
});

// Listening
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
