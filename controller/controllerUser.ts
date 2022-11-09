const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret =
  'b3c3edce64ea5bb02c7e19c7960faf2b0f5b9b88659441a1a25584e28c803566d632f2';

export class ControllerUser {
  public static signup = async (req, res, next) => {
    const { username, password, country, role, phone, email, address } =
      req.body;

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: 'Password less than 6 characters' });
    }

    bcrypt.hash(password, 10).then(async (hash) => {
      await User.create({
        username,
        password: hash,
        role: role,
        phone: phone,
        email: email,
        address: address,
        country: country,
      })
        .then((user) => {
          const maxAge = 3 * 60 * 60;
          const token = jwt.sign(
            { id: user._id, username, role: user.role },
            jwtSecret,
            {
              expiresIn: maxAge, // 3hrs in sec
            }
          );
          res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // 3hrs in ms
          });
          res.status(201).json({
            message: 'User successfully created',
            user: user._id,
          });
        })
        .catch((error) =>
          res.status(400).json({
            message: 'User not successful created',
            error: error.message,
          })
        );
    });
  };

  public static update = async (req, res, next) => {
    const { role, id, email, username, phone, address, country } = req.body;
    // First - Verifying if role and id is presnt
    if (role && id) {
      await User.findById(id)
        .then((user) => {
          user.username = username;
          user.role = role;
          user.phone = phone;
          user.email = email;
          user.address = address;
          user.country = country;
          user.save((err) => {
            //Monogodb error checker
            if (err) {
              res
                .status('400')
                .json({ message: 'An error occurred', error: err.message });
              process.exit(1);
            }
            res.status('201').json({ message: 'Update successful', user });
          });
        })
        .catch((error) => {
          res
            .status(400)
            .json({ message: 'An error occurred', error: error.message });
        });
    }
  };

  public static login = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        message: 'Identifiant ou mot de passe incorrecte',
      });
    }

    try {
      const user = await User.findOne({ username });
      if (!user) {
        res.status(401).json({
          message: 'Echec de connection',
          error: 'Utilisateur non trouvé',
        });
      } else {
        bcrypt.compare(password, user.password).then(function (result) {
          if (result) {
            const maxAge = 3 * 60 * 60;
            const token = jwt.sign(
              { id: user._id, username, role: user.role },
              jwtSecret,
              {
                expiresIn: maxAge, // 3hrs in sec
              }
            );
            res.cookie('jwt', token, {
              httpOnly: true,
              maxAge: maxAge * 1000, // 3hrs in ms
            });
            res.status(201).json({
              message: '',
              user: user._id,
              token: token,
            });
          } else {
            res.status(400).json({ message: 'Echec de connection' });
          }
        });
      }
    } catch (error) {
      res.status(400).json({
        message: 'An error occurred',
        error: error.message,
      });
    }
  };

  public static delete = async (req, res, next) => {
    let userId: string = req.params.id;

    await User.findById(userId)
      .then((user) => user.remove())
      .then((user) =>
        res.status(201).json({ message: 'User successfully deleted', user })
      )
      .catch((error) =>
        res
          .status(400)
          .json({ message: 'An error occurred', error: error.message })
      );
  };

  public static getUsers = async (req, res, next) => {
    await User.find({})
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) =>
        res.status(401).json({ message: 'Not successful', error: err.message })
      );
  };

  public static getUser = async (req, res, next) => {
    let userId: string = req.params.id;
    let userDetail = await User.findOne({ _id: userId });
    res.send(userDetail);
  };
}
