<template>
  <div class="d-flex justify-center mt-10">
    <div class="w-75">
      <h1 class="text-center">Personal GPT</h1>
      <v-form @submit.prevent>
        <v-textarea
          class="mt-5"
          v-model="message"
          :auto-grow="true"
          label="Enter your prompt"
        ></v-textarea>
        <v-btn @click="sendMessage">Send</v-btn>
      </v-form>

      <OpenAiResponse v-for="(response, key) in responses" :response="response" :key="key"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import OpenAiResponse from '~/components/OpenAiResponse.vue';

export default {
  data() {
    return {
      message: '',
      responses: []
    };
  },
  components: {
    OpenAiResponse,
  },
  methods: {
    async sendMessage() {
      
      var qa = {}
      qa.question = this.message

      const response = await axios({
        method: 'post',
        url: 'https://api.openai.com/v1/completions',
        headers: {
          'Authorization': "Bearer " + this.$config.public.API_KEY,
          'Content-Type': 'application/json',
        },
        data: {
					model: "text-davinci-003",
          prompt: this.message,
          max_tokens: 2048,
          temperature: 0.5
        }
      });

      qa.answer = response.data.choices[0].text
      this.responses.push(qa);
      console.log(this.responses)
      this.message = '';
    },
  },
};
</script>
