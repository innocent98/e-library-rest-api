import "./coverPicture.css";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import { PhotoCamera } from "@material-ui/icons";

export default function CoverPicture() {
  const { user, dispatch } = useContext(Context);
  const [coverPicture, setCoverPicture] = useState(null);
  const [success, setSuccess] = useState(false);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUser = {
      publisherId: user._id,
    };
    if (coverPicture) {
      const data = new FormData();
      const filename = Date.now() + coverPicture.name;
      data.append("name", filename);
      data.append("file", coverPicture);
      updateUser.coverPicture = filename;
      try {
        await axios.post("/update", data);
      } catch (err) {
        console.log(err)
      }
    }
    dispatch({ type: "UPDATE_START" });
    try {
      const res = await axios.put("/publishers/" + user._id, updateUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      window.location.replace("/profile");
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div>
      <div className="head-pr">
        <div className="top-pr">
          <p className="dashboard-pr">
            My Profile
            <i className="icon fas fa-bell">
              <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </i>
          </p>
        </div>
      </div>

      <div className="">
        <div className="cover-pic-u">
          <form
            action=""
            className="row g-3"
            onSubmit={handleSubmit}
            style={{ left: "-3%" }}
          >
            <img src={user.coverPicture ? PF + user.coverPicture : PF + "person/person3.png"} alt="" />
            {coverPicture && (
              <img
                src={URL.createObjectURL(coverPicture)}
                alt=""
                style={{ marginTop: "-100%" }}
              />
            )}

            <label htmlFor="file">
              <span className="prf">
                <PhotoCamera className="i" />
              </span>
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              accept="image/jpeg, image/jpg, image/png"
              onChange={(e) => setCoverPicture(e.target.files[0])}
            />
            <button className="profile-button" type="submit">
              <i className="fas fa-check"></i>
            </button>
            {success && (
              <span
                className="profileSuccess"
                style={{ color: "green", textAlign: "center" }}
              >
                Profile Picture updated!
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
