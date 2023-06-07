require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai")
//request to openAI
const getThesisTitle = async (req, res) => {

    const { topic } = req.body
    if (!topic){
        return res.status(400).json({error: 'Please enter a topic.'})
    }

    const configuration = new Configuration({
        apiKey: process.env.OPEN_API
    });
    const openai = new OpenAIApi(configuration);
    
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Create a capstone thesis title based on topic ${topic}`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then((response) => {
        res.status(200).json({message: response.data.choices[0].text})
    }).catch((error) => {
        return res.status(400).json({error: error})
    });
}

const getName = async (req, res) => {

    const { name } = req.body
    if (!name){
        return res.status(400).json({error: 'Please enter a name.'})
    }

    const configuration = new Configuration({
        apiKey: process.env.OPEN_API
    });
    const openai = new OpenAIApi(configuration);
    
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Convert my ${name} Criselle to Korean Hangul`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then((response) => {
        res.status(200).json({message: response.data.choices[0].text})
    }).catch((error) => {
        return res.status(400).json({error: error})
    });
}

module.exports = {
    getThesisTitle,
    getName
}
