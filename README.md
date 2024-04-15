# Recycle Demo for Duaal Leren

## Requirements

Make sure you have at least **Node v18** or higher installed on your machine.

## Setup

Start by copying the `.env.example` to an `.env` file. Don't forget to include your local URL for your React client to prevent CORS errors.

Next install all dependencies in the root and server folders:

```bash
npm install
cd server
npm install
```

That's it! You can go back to the root folder and simply run `npm start`, the server will be running on `http://localhost:3000`.

## API

### Status

A health-check endpoint to make sure the server is running OK.

`GET/api/status`

### Pickups

Get all pickups.

`GET /api/v1/pickups`
