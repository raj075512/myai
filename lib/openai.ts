import { Configuration, OpenAIApi } from "openai-edge"

const config =new Configuration({
    apiKey:process.env.OPEN_AI_IMAGE_API_KEY,

})

const openai =new OpenAIApi(config);

export async function generateImagePrompt(name :string ){
   
   try {
     const response= await openai.createChatCompletion({
        model:'gpt-3.5-turbo',
        
        messages:[
            {
             role:"system",
             content:"you can an creative and helpful ai assistent capable generatint the intresting notes ",
          },
          {
             role:"user",
             content:`please generate the most accurate for thumbnail for my notebook title ${name} `,

          },
        ]
    
     });
     const data= await response.json();
     const image_description = data.choices[0].messages.content;
      console.log({image_description});

     return image_description as string 

   } catch (error) {
    console.log({error});
    throw error ;
   }
}

export  async function generateImage(){

}