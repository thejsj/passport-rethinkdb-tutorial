/*jshint node:true */
'use strict';

var authController = {};
authController.getUser = function (req, res) {
  if (req.user && req.user.id) {
    res.json(req.user);
    return;
  }
  res.status(400).json(null);
};
authController.logout = function (req, res) {
  req.logout();
  res.redirect('/');
};

authController.login = function (req, res) {
  res.redirect('/');
};

module.exports = authController;
