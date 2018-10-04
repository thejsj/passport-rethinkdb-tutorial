/*jshint node:true */
'use strict';

var r = require('rethinkdb');
require('rethinkdb-init')(r);
var config = require('config');

r.connections = [];
r.getNewConnection = function () {
  return r.connect(config.get('rethinkdb'))
    .then(function (conn) {
      conn.use(config.get('rethinkdb').db);
      r.connections.push(conn);
      return conn;
    });
};

r.getNewConnection().then(conn=> {
    r
        .dbList()
        .contains(config.get('rethinkdb').db)
        .run(conn, (err, exists)=>{
        if (!exists) {

            r.init(config.get('rethinkdb'), [
                {
                    name: 'users',
                    indexes: ['login']
                }
            ]).then(function (conn) {
                r.conn = conn;
                r.connections.push(conn);
                r.conn.use(config.get('rethinkdb').db);
            });

        } else {
            r.conn = conn;
            r.connections.push(conn);
            r.conn.use(config.get('rethinkdb').db);
        }
    })
})


module.exports = r;
