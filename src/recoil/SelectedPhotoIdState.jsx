import { atom } from "recoil";

const selectedPhotoIdState = atom({
  key: "selectedPhotoIdState",
  default: "",
});

export default selectedPhotoIdState;
