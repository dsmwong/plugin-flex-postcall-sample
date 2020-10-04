# Available Functions
[postCallRedirect](readmes/postCallRedirect.md)

## Setup

Copy `.env.example` to `.env`

Your `.env` file should have the following variables set:

| Config Value | Description |
| :--| :-- |
| `ACCOUNT_SID`   | Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console)|
| `AUTH_TOKEN`    | Used to authenticate - [just like the above, you'll find this here](https://www.twilio.com/console)|

## Service Name

Service Name is defined in `package.json`, value of `name`

## Run Locally

You can test function locally by running the

`$ twilio serverless:start --ngrok ""`

*Note:* this will start function locally and expose on a random ngrok domain

## Deploying Functions

Deploy by running

`$ twilio serverless:deploy`

## Twilio Serverless Toolkit

The above commands requires installation of [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) and [Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit)