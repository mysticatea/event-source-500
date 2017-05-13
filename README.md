# event-source-500

Repro code that EventSource does not reconnect after a 500 error.

## Usage

- This requires [Node.js] 4 or later.
- This requires [Google Chrome].

```bash
# Clone this repo.
$ git clone https://github.com/mysticatea/event-source-500.git
$ cd event-source-500

# Setup.
$ npm install --production

# Run.
# It starts a web server at localhost:3000 and opens Chrome.
$ npm start
```

[Node.js]: https://nodejs.org/
[Google Chrome]: https://www.google.com/chrome
