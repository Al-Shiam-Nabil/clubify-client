import axios from "axios";

export const uploadImage = async (photoURL) => {
  console.log(photoURL);
  if (!photoURL || photoURL.length === 0) {
    return null;
  }
  const formData = new FormData();
  formData.append("image", photoURL[0]);

  const res = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`,
    formData
  );

  return res?.data?.data?.display_url;
};
