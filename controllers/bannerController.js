import Banner from '../models/Banner';

export const getAllBanner = async (req, res) => {
  try {
    const banner = await Banner.find({});
    return res.status(200).json({ message: 'success', data: banner });
  } catch (error) {
    console.error(error);
  }
};
