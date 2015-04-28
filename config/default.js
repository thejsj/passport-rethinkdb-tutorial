module.exports = {
  github: {
    clientID: '', // Go to github.com, create an application and add clientID
    clientSecret: '' // Go to github.com, create an application and add clientSecret
  },
  twitter: {
    consumerKey: '', // Go to apps.twitter.com, create an application and add consumerKey
    consumerSecret: '' // Go to apps.twitter.com, create an application and add consumerSecret
  },
  url: '127.0.0.1',
  ports: {
    http: 8000
  },
  rethinkdb: {
    host: 'localhost',
    port: 28015,
    db: 'passport_rethinkdb_tutorial'
  }
};
