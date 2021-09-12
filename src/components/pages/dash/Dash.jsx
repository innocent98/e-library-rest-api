import "./dash.css";
import { format } from "timeago.js";

export default function Dash({ book }) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="dash">
      <div className="row-md">
        <div className="book">
          <img src={book.bookCover ? PF+book.bookCover : PF + "person/person3.png"} alt="" />
          <p className="sold">
            sold: {book.purchaseCount}{" "}
            <span
              className="date"
              style={{ textAlign: "right", float: "right", fontSize: "12px" }}
            >
              {format(book.createdAt)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
