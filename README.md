<div align="center" style="margin-bottom:10px">
  <img alt="Get Recipes"
    src="src/assets/faviconfavicon.png"
  />

</div>

<h2 align="center" style="margin:50px">
   Care Recipient API
</h2>

<div align="center">

  <img alt="language version" src="https://img.shields.io/badge/Node-v_12.13.1-339933?logo=node.js">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Fred-Reis/birdie-test-backend">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Fred-Reis/birdie-test-backend">

  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/Fred-Reis/birdie-test-backend">

</div>

<hr/>

<h3 align="center">Links:</h3>

<div align="center">

  <a href="#-about-this-project">
    <img src="https://img.shields.io/badge/About_Project-a5a5a5"/>
  </a>&nbsp;&nbsp;
  <a href="#-back-end-challenge">
    <img src="https://img.shields.io/badge/Back_End_Challenge-a5a5a5"/>
  </a>&nbsp;&nbsp;
  <a href="#-architecture">
    <img src="https://img.shields.io/badge/Architecture-a5a5a5"/>
  </a>&nbsp;&nbsp;
  <a href="-deploy">
    <img src="https://img.shields.io/badge/Deploy-a5a5a5"/>
  </a>&nbsp;&nbsp;
  <a href="-how-does-it-really-work">
    <img src="https://img.shields.io/badge/How_does_it_really_work-a5a5a5"/>
  </a>&nbsp;&nbsp;
  <a href="#-tests">
    <img src="https://img.shields.io/badge/Tests-a5a5a5"/>
  </a>&nbsp;&nbsp;
  <a href="#-api-documentation">
    <img src="https://img.shields.io/badge/API_Documentation-a5a5a5"/>
  </a>&nbsp;&nbsp;
  <a href="#-database">
    <img src="https://img.shields.io/badge/Database-a5a5a5"/>
  </a>&nbsp;&nbsp;
  <a href="#-technologies-and-libraries">
    <img src="https://img.shields.io/badge/Technologies_and_Libraries-a5a5a5"/>
  </a>&nbsp;&nbsp;
  <a href="#-running-the-project">
    <img src="https://img.shields.io/badge/Running_the_project-a5a5a5"/>
  </a>&nbsp;&nbsp;
  <a href="#author-frederico-reis">
    <img src="https://img.shields.io/badge/Author-a5a5a5"/>
  </a>

</div>

<br/>

## 💡 About this project

This project was build as a technical test.
The proposal for this project was create a small web application to allow next of kins to look observations of older adults receiving care, called care recipients.

- [Front-End Repository](https://github.com/Fred-Reis/birdie-test-frontend)

- [Try Online Application](https://dazzling-neumann-0c94b8.netlify.app/)

<br/>

## 🔙 Back End Challenge

The challenge was create an API to receive a call type GET and retrieve observations recorded on a database, each event following the bellow format:

```JSON
{
    "id": "string",
    "payload": {
      "id": "string",
      "visit_id": "string",
      "timestamp": "string",
      "event_type": "string",
      "care_recipient_id": "string",
      "caregiver_id": "string",
      "any": "string"
    },
    "alert_id": "string",
    "task_instance_id": "string",
    "visit_id": "string",
    "caregiver_id": "string",
    "payload_as_text": "string",
    "rejected_event_id": "string",
    "observation_event_id": "string",
    "timestamp": "string",
    "event_type": "string",
    "care_recipient_id": "string"
  }
```

> heads up at `payload` which at `any` key may being anything from the recording of their mood (happy, sad, bored, confused) to what they drank today (1 pint of water).

<br/>

## 📐 Architecture

The project was conceived using DDD methodology - Domain Driven Design, following the principles of SOLID.
Separating responsibilities, reducing couplings, facilitating refactoring and encouraging code reuse.

Folders structure:

```JSON
src
├── assets
|
├── modules
|  └── events
|     ├── controllers
|     |  └── EventsController.ts
|     ├── entities
|     |  └── Events.ts
|     └── services
|        ├── createEvents.spec.ts
|        └── CreateEventsService.ts
└── shared
   ├── errors
   |  └── AppError.ts
   └── infra
      ├── http
      |  ├── app.ts
      |  └── server.ts
      └── routes
          └── events.routes.ts
```

<br/>

## 🌐 Deploy

This API was hosted at [Heroku](https://dashboard.heroku.com/)  
which URL [https://test-birdie-backend.herokuapp.com](https://test-birdie-backend.herokuapp.com)

<br/>

## 🔥 How does it really work?

The API has a single endpoint, which must respect the following call

`{HOST}/events/:page*?`

Example:

`http://localhost:8000/events`

The expected return should be an array contains 100 first events, an to get the next ones 100 events just call the endpoint using the pagination:

`http://localhost:8000/events/1`

The expected return should be a list of events as below:

```JSON
[
  {
    "id": "00114a9f-00dc-4f39-a6ac-af1b7e0543e7",
    "payload": {
      "id": "00114a9f-00dc-4f39-a6ac-af1b7e0543e7",
      "fluid": "caffeinated",
      "observed": false,
      "visit_id": "5cc23bf0-8b66-f8a8-4339-688e1d43e11a",
      "timestamp": "2019-04-26T07:08:21.758Z",
      "event_type": "fluid_intake_observation",
      "caregiver_id": "220d9432-b5ed-4c81-8709-434899d2cd1b",
      "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d",
      "consumed_volume_ml": 230,
    },
    "alert_id": null,
    "task_instance_id": null,
    "visit_id": "5cc23bf0-8b66-f8a8-4339-688e1d43e11a",
    "caregiver_id": "220d9432-b5ed-4c81-8709-434899d2cd1b",
    "payload_as_text":
      "{'id': '00114a9f-00dc-4f39-a6ac-af1b7e0543e7', 'fluid': 'caffeinated', 'observed': false, 'visit_id': '5cc23bf0-8b66-f8a8-4339-688e1d43e11a', 'timestamp': '2019-04-26T07:08:21.758Z', 'event_type': 'fluid_intake_observation', 'caregiver_id': '220d9432-b5ed-4c81-8709-434899d2cd1b', 'care_recipient_id': 'df50cac5-293c-490d-a06c-ee26796f850d', 'consumed_volume_ml': 230}'",
    "rejected_event_id": null,
    "observation_event_id": null,
    "timestamp": "2019-04-26T07:08:21.758Z",
    "event_type": "fluid_intake_observation",
    "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d",
  },
]
```

<br/>

## 🧪 Tests

Unit tests were implemented using [Jest](https://jestjs.io/)

To run these tests just executing the following command at project root:

```bash
npm test
```

Details will be displayed at your console.

It's also possible to run the test with `--coverage` flag, It'll be generated a folder called `coverage` at the root of your project, into it there will be a folder called `Lcov-report`, looking for a file `index.html` open in your browser and get access further details of executed tests.

```bash
npm test --coverage
```

<br/>

## 🧾 API Documentation

Were used [Swagger](https://swagger.io/) and [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) to generate automatic documentation for the API which may be accessed using the following endpoint of our API:

`{HOST}/api-docs`

<br/>

## 💾 Database

This schema is stored in a MySQL database on a cloud.
To connect our API at database was used [typeorm](https://typeorm.io/) therefore to run this application you must have its credentials 💥

To estabilish the connection please create `.env` file at the root of the project following this model:

```.env
TYPEORM_CONNECTION = mysql
TYPEORM_HOST =
TYPEORM_PORT = 3306
TYPEORM_USERNAME =
TYPEORM_PASSWORD =
TYPEORM_DATABASE =
TYPEORM_ENTITIES = **/src/modules/events/entities/*.ts,.js
TYPEORM_SYNCHRONIZE = false
TYPEORM_LOGGING = false
#
APP_URL=http://localhost:8000
```

<br/>

## 🛠 Technologies and Libraries

Some of technologies and libraries used at this project:

- [**NodeJS**](https://nodejs.org/en/);
- [**Express**](http://expressjs.com/);
- [**typescript**](https://www.typescriptlang.org/);

<br/>

## 🏁 Running the project

1 - To run at the first time the project will be necessary creating a folder

```bash
mkdir <folder-name>
```

2 - Now within the folder

```bash
cd <folder-name>
```

3 - Let's cloning the repository

```bash
git clone https://github.com/Fred-Reis/birdie-test-backend
```

4 - Execute the following command to create `node_modules` folder

```bash
npm install
```

5 - To start the server at development mode run the following command

```bash
npm run dev
```

<br/>

If you came right here it signs that everything has gone well 🙏🏼 and then you may already make your request directly from your browser 😱 following the example below:

`http://localhost:8000/events`

<br/>

😃 Now get your events and...
**BE HAPPY!**.

<h4 align="center">
  "Stay hungry stay foolish!"
</h4>

<br/>

---

<h3 align="center">
Author: <a alt="Fred-Reis" href="https://github.com/Fred-Reis">Frederico Reis</a>
</h3>

<p align="center">

  <a alt="Frederico Reis" href="https://www.linkedin.com/in/frederico-reis-dev/">
    <img src="https://img.shields.io/badge/LinkedIn-Frederico_Reis-0077B5?logo=linkedin"/></a>
  <a alt="Frederico Reis" href="https://github.com/Fred-Reis ">
  <img src="https://img.shields.io/badge/Fred_Reis-GitHub-000?logo=github"/></a>

</p>

Made with ♥️ 2021
