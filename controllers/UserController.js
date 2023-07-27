const { users } = require('../models');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

exports.Login = async (req, res) => {
  try {
    let user = await users.findOne({
      where: {
        username: req.body.username,
      },
    });

    user = JSON.parse(JSON.stringify(user));

    if (!user) return res.status(400).json({ success: false, message: "Username or Password didn't match" });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ success: false, message: 'Wrong Password' });

    // Token generation
    let refreshTokens = [];

    const userId = user.id;
    const username = user.username;
  

    const tokenParams = { userId, username, };

    const accessToken = jwt.sign(tokenParams, 'access', {
      expiresIn: '1d',
    });
    const refreshToken = jwt.sign(tokenParams, 'refresh', {
      expiresIn: '30d',
    });
    refreshTokens.push(refreshToken);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    const expiresInDays = 1; // 1 day expiration for accessToken
    const refreshTokenExpiresInDays = 30; // 30 days expiration for refreshToken

    const data = {
      userId,
      username,
      accessToken,
      refreshToken,
      accessTokenExpiresIn: expiresInDays + ' day(s)',
      refreshTokenExpiresIn: refreshTokenExpiresInDays + ' day(s)',
    };

    return res.status(201).json({
      success: true,
      message: 'Login Successfully',
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: 'Login Failed' });
  }
};
