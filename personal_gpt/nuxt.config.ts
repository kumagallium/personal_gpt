// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  	css: ['vuetify/lib/styles/main.sass'],
  	build: {
    	transpile: ['vuetify'],
  	},
  	vite: {
    	define: {
    	  	'process.env.DEBUG': false,
    	}
  	},
  	runtimeConfig: {
		basic_auth_enabled: process.env.BASIC_AUTH_ENABLED,
		basic_auth_user: process.env.BASIC_AUTH_USER,
		basic_auth_password: process.env.BASIC_AUTH_PASSWORD,
		public: {
			API_KEY: process.env.API_KEY,
		}
	},
});