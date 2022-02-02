import User from '../models/User';

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});
    return res.status(200).json({ message: 'success', data: user });
  } catch (error) {
    console.error(error);
  }
};
