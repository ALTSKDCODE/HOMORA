const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
  res.render('static/about');
});

router.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    req.flash('error', 'Please login first!');
    return res.redirect('/login');
  }
  res.render('users/profile', { user: req.user });
});

module.exports = router;
