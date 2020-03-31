<h1 align="center">
  <img src=".github/logo.png" alt="Be The Hero API" width="200px"><br>
  Be The Hero - Web App
</h1>

## Contents
* [Semana OmniStack 11.0](#semana-omnistack-11.0)
* [The Project](#the-project)
* [This repo](#this-repo)
  * [Layout](#layout)
  * [Techs and libs](#techs-and-libs)
  * [Requirements](#requirements)
  * [Download & Installation](#download--installation)
  * [Running](#running)
* [Backend App (API)](https://github.com/alande-amorim/be-the-hero-backend)
* [Mobile App](https://github.com/alande-amorim/be-the-hero-mobile)

---
## Semana OmniStack 11.0
<a href="https://rocketseat.com.br/"><img align="center" alt="RocketSeat" src=".github/rocketseat.svg" width="120px" /></a>

Semana OmniStack 11.0 is the 11th edition of the one week long time limited web course hosted by RocketSeat that took place from March 23, 2020 to March 29, 2020.
The goal of these series of lessons is to present a solid and complete stack based on Javascript (Node.js, ReactJS and React Native) and to build a cool little project.

## The Project
The proposed project for the Semana Omnistack 11.0 is a web app to help NGOs (non governmental organizations) finding people willing fund their social projects.
After signing up, the NGOs will be able to register social projects they are currently seeking help to fund.
Those projects will be available for the general audience on the mobile app.
A backend piece will serve both apps.

---
## This repo

This repo holds the source code for the ReactJS web application. It's integrated with the [restful API](https://github.com/alande-amorim/be-the-hero-backend).

### Layout
![screenshots](.github/screenshots.gif)

The UI for this app was provided by Rocketseat and is available at [Figma](http://figma.com/file/2C2yvw7jsCOGmaNUDftX9n/Be-The-Hero---OmniStack-11).

### Techs and libs
- Node.js
- ReactJS
- Axios

### Requirements
  - Node v12+
  - Npm 6+

### Download & Installation

Clone this repo, install and migrate the database.

```bash
$ git clone https://github.com/alande-amorim/be-the-hero-web.git
$ cd be-the-hero-web
$ npm install
```

### Running
You can now run the app:
```bash
$ npm start
```
This will automatically open the web app on a browser tab. In case the app is not launched, access http://localhost:3000.
