const express = require("express");
const linkPreview = require("link-preview-js");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

app.post("/", async (req, res) => {
  const { link } = req.body;

  try {
    const response = await axios.get(link, {
      headers: {
        "User-Agent": "Googlebot/2.1 (+http://www.google.com/bot.html)",
      },
    });

    const data = await linkPreview.getLinkPreview(link, {
      html: response.data,
    });

    res.json({
      link: link,
      data: data,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error fetching link preview" });
  }
});

app.listen(5000, () => {
  console.log(`Server running on PORT 5000`);
});