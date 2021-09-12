import "./upload.css";
import SideBar from "../../sidebar/SideBar";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../../context/Context";

export default function Upload() {
  const [uploadBook, setUploadBook] = useState(null);
  const [bookCover, setBookCover] = useState(null);
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState("");
  const [publisherId, setPublisherId] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useContext(Context);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUpload = {
      firstName: user.firstName,
      bookTitle,
      bookDescription,
      author,
      currency,
      price,
      publisherId,
      email,
    };
    if (uploadBook) {
      const data = new FormData();
      const filename = Date.now() + uploadBook.name;
      data.append("name", filename);
      data.append("file", uploadBook);
      newUpload.uploadBook = filename;
      try {
        await axios.post("/update", data);
      } catch (err) {}
    }
    if (bookCover) {
      const data = new FormData();
      const filename = Date.now() + bookCover.name;
      data.append("name", filename);
      data.append("file", bookCover);
      newUpload.bookCover = filename;
      try {
        await axios.post("/update", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/upload", newUpload);
      setSuccess(true);
      window.location.reload("/upload" + res.data._id);
    } catch (error) {}
  };

  return (
    <div className="upload">
      <SideBar />
      <div className="head-u">
        <div className="top-u">
          <p className="upload-u">
            Upload
            <i className="not-icon bi bi-bell-fill">
              <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </i>
          </p>
        </div>
      </div>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4 mb-0">
          <label htmlFor="fileInput">Upload Book in PDF</label>
          <input
            type="file"
            className="form-control"
            aria-label="file example"
            accept="application/pdf"
            required
            onChange={(e) => setUploadBook(e.target.files[0])}
          />
        </div>
        <br />
        <div className="col-md-4 mb-4">
          <label htmlFor="fileInput">
            Upload Book Cover design in jpeg, jpg or png
          </label>
          <input
            type="file"
            id="fileInput-1"
            className="form-control"
            aria-label="file example"
            accept="image/jpeg, image/jpg, image/png"
            required
            onChange={(e) => setBookCover(e.target.files[0])}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="upload-input">Book Title:</label>
          <input
            type="text"
            placeholder="Book Title"
            className="form-control"
            autoFocus={true}
            required
            onChange={(e) => setBookTitle(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="upload-input">Author:</label>
          <input
            type="text"
            placeholder="Author Name"
            className="form-control"
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="upload-input">Description:</label>
          <textarea
            placeholder="Add Book description"
            type="text"
            className="form-control"
            required
            onChange={(e) => setBookDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom04" className="form-label">
            Currency
          </label>
          <select
            id="validationCustom04"
            className="form-control"
            required
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option defaultValue="currency">Select your currency...</option>
            <option>AUD</option>
            <option>CAD</option>
            <option>GBP</option>
            <option>GHC</option>
            <option>JPY</option>
            <option>NGN</option>
            <option>USD</option>
          </select>
          <div className="invalid-feedback">
            Please select a valid Currency.
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="upload-input">Price:</label>
          <input
            type="number"
            placeholder="Book Price"
            className="form-control"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="upload-input">Publisher Id:</label>
          <input
            type="text"
            placeholder="Publisher Id"
            className="form-control"
            required
            onChange={(e) => setPublisherId(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="upload-input">Email:</label>
          <input
            type="text"
            placeholder="Publisher Email"
            className="form-control"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <button className="submit-button" type="submit">
          Upload
        </button>
      </form>
      {success && (
        <span style={{ color: "green", textAlign: "center", margin: "10px" }}>
          Book uploaded successfully
        </span>
      )}
    </div>
  );
}
