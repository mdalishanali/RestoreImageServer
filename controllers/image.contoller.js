const { replicateImage } = require("../utils/replicateImage");

const restoreImage = async (req, res) => {
  try {
    const images = req.body;
    if (!images.length) {
      throw new Error("Please add image");
    }
    const restoredImage = await Promise.all(
      images.map((item) => {
        const restorationImage = replicateImage(item.imageUrl, item.scale);
        return restorationImage;
      })
    );
    res
      .status(200)
      .json(restoredImage ? restoredImage : "Failed to restore image");
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send(error.message);
  }
};

const restoreSingleImage = async (req, res) => {
  try {
    const imageUrl = req.body.imageUrl;
    if (!imageUrl.length) {
      throw new Error("Please add image");
    }
    const restorationImage = await replicateImage(imageUrl);
    res.status(200).json({
      updateImageUrl: restorationImage
        ? restorationImage
        : "Failed to restore image",
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  restoreImage,
  restoreSingleImage,
};
