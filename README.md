# Personal GPT

## Table of Contents
- [Personal GPT](#personal-gpt)
	- [Table of Contents](#table-of-contents)
	- [Introduction](#introduction)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
		- [For local PC](#for-local-pc)
		- [For vercel](#for-vercel)
	- [Author](#author)
	- [License](#license)

<a name="intro"></a>
## Introduction
This application is a personal chatbot using the OpenAI API. The language model is not ChatGPT, but a GPT3 model (davinci).


<a name="install"></a>
## Prerequisites
* Docker
* Docker Compose

## Installation
### For local PC
Run the following commands in a terminal.
```sh
cd YOUR_WORKSPACE
git clone https://github.com/kumagallium/personal_gpt.git
cd personal_gpt
```
Create an environment variable file (.env) like the following and place it in the root directory.
```
API_KEY=sk-xxxxx
BASIC_AUTH_USER=xxxxx
BASIC_AUTH_PASSWORD=xxxxx
BASIC_AUTH_ENABLED=true
```
This application can be started using docker-compose.
```
docker-compose build
docker-compose up
```
You can access this application at the following URL.
http://localhost:3000/

### For vercel
This application can be deployed to a pro-at form such as Vercel.
Just import this github repository you forked with vercel and set environment variables.

<a name="author"></a>
## Author
This software was primarily written by Masaya Kumagai. 

<a name="license"></a>
## License
This codes are released under the MIT License.