import User from "../models/user.model.js";

export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    const user = await User.findOne({ clerkId: id });

    if (!user) {
      await User.create({
        fullName: `${firstName} ${lastName}`,
        imageUrl,
        clerkId: id,
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in the callback controller: ", error.message);
    res.status(500).json({
      error: error.message,
      message: "Internal server error",
    });
  }
};
