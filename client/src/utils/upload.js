import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/drixhjpsy/image/upload",
      data
    );

    // Assuming the Cloudinary response contains the URL of the uploaded image
    const imageUrl = response.data.secure_url;

    return imageUrl;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error; // Re-throw the error to be caught by the calling function
  }
};

export default upload;
