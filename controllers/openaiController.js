const dotenv = require("dotenv");
dotenv.config();
const OpenAI = require("openai");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function codeController(req, res) {
  console.log(req.body);
  try {
    const { to, from, text } = req.body;

    if (!to || !from || !text) {
      return res
        .status(400)
        .json({
          message:
            "Missing 'to', 'from', or 'text' properties in the request body.",
        });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [
        {
          role: "system",
          content: `Convert the following  code ${text} from ${from} to ${to}:`,
        },
        { role: "user", content: text },
      ],
      temperature: 0.7,
    });

    if (response) {
      return res
        .status(200)
        .json({
          message: "Code conversion successful",
          data: response.choices[0].message.content,
        });
    } else {
      return res.status(404).json({ message: "No conversion available" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function explanationController(req,res) {
  console.log(req.body);
  try {
    const {text } = req.body;

    if (!text) {
      return res
        .status(400)
        .json({
          message:
            "Missing 'text' properties in the request body.",
        });
    }
    const response1 = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [
        { role: "system", content: `Explain the following code${text}` },
        { role: "user", content: text },
      ],
      temperature: 0.7,
    });

    if (
      response1
    ) {
      return res.status(200).json({
          message: "Code conversion successful",
          data: response1.choices[0].message.content});
    } else {
      throw new Error("No explanation available.");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function optimizationController(req,res) {
  console.log(req.body);
  try {
    const {text } = req.body;

    if (!text) {
      return res
        .status(400)
        .json({
          message:
            "Missing 'text' properties in the request body.",
        });
    }
    const response1 = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [
        { role: "system", content: `you are a code optimizer,only give the code ,optimze the given code${text}` },
        { role: "user", content: text },
      ],
      temperature: 0.7,
    });

    if (
      response1
    ) {
      return res.status(200).json({
          message: "Code conversion successful",
          data: response1.choices[0].message.content});
    } else {
      throw new Error("No explanation available.");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function commentsController(req, res) {
  try {
      const { text } = req.body;
      if (!text) {
          return res.status(400).json({
              message: "Missing 'text' property in the request body"
          });
      }

      const response1 = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        messages: [
          { role: "system", content: `only give the code , add comment to the give code${text}` },
          { role: "user", content: text },
        ],
        temperature: 0.7,
      });
  
      if (
        response1
      ) {
        return res.status(200).json({
            message: "comments added  successful",
            data: response1.choices[0].message.content});
      } else {
        throw new Error("No explanation available.");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
}

async function explanationController(req,res) {
  console.log(req.body);
  try {
    const {text } = req.body;

    if (!text) {
      return res
        .status(400)
        .json({
          message:
            "Missing 'text' properties in the request body.",
        });
    }
    const response1 = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [
        { role: "system", content: `Explain the following code${text}` },
        { role: "user", content: text },
      ],
      temperature: 0.7,
    });

    if (
      response1
    ) {
      return res.status(200).json({
          message: "Code conversion successful",
          data: response1.choices[0].message.content});
    } else {
      throw new Error("No explanation available.");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function optimizationController(req,res) {
  console.log(req.body);
  try {
    const {text } = req.body;

    if (!text) {
      return res
        .status(400)
        .json({
          message:
            "Missing 'text' properties in the request body.",
        });
    }
    const response1 = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [
        { role: "system", content: `you are a code optimizer,only give the code ,optimze the given code${text}` },
        { role: "user", content: text },
      ],
      temperature: 0.7,
    });

    if (
      response1
    ) {
      return res.status(200).json({
          message: "Code conversion successful",
          data: response1.choices[0].message.content});
    } else {
      throw new Error("No explanation available.");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function refactorController(req, res) {
  try {
      const { text } = req.body;
      if (!text) {
          return res.status(400).json({
              message: "Missing 'text' property in the request body"
          });
      }

      const response1 = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        messages: [
          { role: "system", content: `only give the code,I have a function that needs refactoring. Can you help me complete it?${text}` },
          { role: "user", content: text },
        ],
        temperature: 0.7,
      });
  
      if (
        response1
      ) {
        return res.status(200).json({
            message: "comments added  successful",
            data: response1.choices[0].message.content});
      } else {
        throw new Error("No explanation available.");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { codeController, explanationController , optimizationController , commentsController , refactorController};
