import User from '../models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '../middleware/auth';

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});
    return res.status(200).json({ message: 'success', data: user });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = signToken(user);

      res.send({
        token,
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    }
  } catch (error) {
    res.status(401).send({ message: 'Invalid email or password' });
  }
};

export const signUp = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
      isAdmin: false,
    });

    const user = await newUser.save();

    const token = signToken(user);

    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

export const editProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password
      ? bcrypt.hashSync(req.body.password)
      : user.password;

    await user.save();

    const token = signToken(user);

    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};
