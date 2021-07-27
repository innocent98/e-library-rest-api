import "./upload.css";
import SideBar from "../../sidebar/SideBar";

export default function Upload() {
  return (
    <div className="upload">
      <SideBar />
      <div className="head-u">
      <div className="top-u">
        <p className="upload-u">Upload<i className="not-icon bi bi-bell-fill">
          <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span class="visually-hidden">New alerts</span>
          </span>
        </i></p>
        </div>
      </div>

      <form className="upload-doc">
        <div class="mb-3">
          <label htmlFor="fileInput">Upload Book in PDF</label>
          <input
            type="file"
            class="form-control"
            aria-label="file example"
            accept="application/pdf"
            required
          />
        </div>
        <br />
        <div class="mb-3">
          <label htmlFor="fileInput">Upload Book Cover design in jpeg, jpg or png</label>
          <input
            type="file"
            id="fileInput-1"
            class="form-control"
            aria-label="file example"
            accept="image/jpeg, image/jpg, image/png"
            required
          />
        </div>

        <div className="upload-form-group">
          <label for="upload-input">Book Title:</label>
          <input
            type="text"
            placeholder="Book Title"
            className="upload-input"
            autoFocus={true}
            required
          />
        </div>

        <div className="upload-form-group">
          <label for="upload-input">Author:</label>
          <input
            type="text"
            placeholder="Author Name"
            className="upload-input"
            required
          />
        </div>

        <div className="upload-form-group mb-3">
          <label for="upload-input">Description:</label>
          <textarea
            placeholder="Add Book description"
            type="text"
            className="upload-input"
            required
          ></textarea>
        </div>

        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">
            Currency
          </label>
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>AUD</option>
            <option>CAD</option>
            <option>GBP</option>
            <option>GHC</option>
            <option>JPY</option>
            <option>NGN</option>
            <option>USD</option>
          </select>
          <div class="invalid-feedback">Please select a valid Currency.</div>
        </div>
        <div className="upload-form-group">
          <label for="upload-input">Price:</label>
          <input
            type="number"
            placeholder="Book Price"
            className="upload-input"
            required
          />
        </div>
        <div className="upload-form-group">
          <label for="upload-input">Publisher Id:</label>
          <input
            type="text"
            placeholder="Publisher Id"
            className="upload-input"
            required
          />
        </div>
        <div className="upload-form-group">
          <label for="upload-input">Email:</label>
          <input
            type="text"
            placeholder="Publisher Email"
            className="upload-input"
            required
          />
        </div>

        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <button class="submit-button" type="submit">
          Submit
        </button>
      </form>
      
    </div>
  );
}
