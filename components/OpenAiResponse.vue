<template>
	<v-card class="mx-2 mt-5" flat color="#f5f5f5">
	  <v-card-title>{{ response.question }}</v-card-title>
	  <v-card-text>{{response.answer}}</v-card-text>
	</v-card>
  </template>
  
  <script>
  export default {
	props: ['response'],
  };
  </script>