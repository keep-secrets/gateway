const env = process.env.NODE_ENV;

const run = {
  server: {
    port: 3000
  },
}

const test = {
  server: {
    port: 3000
  },
}

const config = {
  run,
  test
}

module.exports = config[env]
