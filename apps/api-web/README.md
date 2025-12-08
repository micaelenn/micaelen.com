# Api Web Overview

A simple API designed to demonstrate **Backend for Frontend (BFF)** principles by orchestrating and integrating three different services for a personal website.
This project serves as a practical example of how a BFF layer can centralize business logic, reduce frontend complexity, and provide a tailored API interface optimized for a specific client application.

<div align="center">
  <img src="./doc/image.png" alt="Api Web diagram"/>
</div>

## Usage

```bash
# install via npm
npm install

# generate .env with variable names
lazyenv

# development mode
npm run dev

# production build
npm run build
```

## Development Tool

To ensure consistency and speed up development, this project uses [Plop.js](https://plopjs.com/) as a code generator to create the initial structure for custom blocks.

**1. Install plop globally**

```
$ npm install -g plop
```

**2. Generate structure**

Run the `plop` command at the root of the directory and enter the name of the new endpoint.
