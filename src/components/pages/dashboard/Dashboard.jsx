import "./dashboard.css";
import SideBar from "../../sidebar/SideBar";

export default function Dashboard() {
  return (
    <div className="dashboard-g">
      <SideBar />
      <div className="dashboard-h">
      <div className="top">
        <p className="dashboard">Dashboard<i className="notification-icon bi bi-bell-fill">
          <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span class="visually-hidden">New alerts</span>
          </span>
        </i></p>
        
      </div>
      </div>

      <div className="uploaded-books">
        <p>
          <span className="user">Welcome back Jane!</span> Your current account balance is $50. This page contain the
          list of books you've uploaded so far with
          purchased count
        </p>
        <div className="books">
          <img
            className="bookImg"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
            alt=""
          />
          <p className="purchase-count">Purchased: 23</p>
        </div>
        <div className="books">
          <img
            className="bookImg"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1594616847"
            alt=""
          />
          <p className="purchase-count">Purchased: 3</p>
        </div>

        <div className="books">
          <img
            className="bookImg"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sci-fi-book-cover-template-a1ec26573b7a71617c38ffc6e356eef9.jpg?ts=1561547637"
            alt=""
          />
          <p className="purchase-count">Purchased: 20</p>
        </div>

        <div className="books">
          <img
            className="bookImg"
            src="https://confessionsofabookgeek.files.wordpress.com/2014/04/shatter-me.jpg"
            alt=""
          />
          <p className="purchase-count">Purchased: 10</p>
        </div>
        <div className="books">
          <img
            className="bookImg"
            src="https://prodimage.images-bn.com/pimages/9780062085580_p0_v1_s550x406.jpg"
            alt=""
          />
          <p className="purchase-count">Purchased: 2</p>
        </div>

        <div className="books">
          <img
            className="bookImg"
            src="https://static-cse.canva.com/blob/142541/Yellow-Surgeon-Creative-Book-Cover.jpg"
            alt=""
          />
          <p className="purchase-count">Purchased: 0</p>
        </div>

        <div className="books">
          <img
            className="bookImg"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1602826351"
            alt=""
          />
          <p className="purchase-count">Purchased: 11</p>
        </div>

        <div className="books">
          <img
            className="bookImg"
            src="https://www.forewordreviews.com/books/covers/leadership-competencies-that-enable-results.w300.jpg"
            alt=""
          />
          <p className="purchase-count">Purchased: 1</p>
        </div>

        <div className="books">
          <img
            className="bookImg"
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/attachment_81307929-e1510349593680.jpg?auto=format&q=60&fit=max&w=930"
            alt=""
          />
          <p className="purchase-count">Purchased: 20</p>
        </div>

        <div className="books">
          <img
            className="bookImg"
            src="https://images.penguinrandomhouse.com/cover/9780307237705"
            alt=""
          />
          <p className="purchase-count">Purchased: 22</p>
        </div>

        <div className="books">
          <img
            className="bookImg"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romantic-novel-cover-design-template-1f302ee20814ee9513506d90de228af7.jpg?ts=1588747771"
            alt=""
          />
          <p className="purchase-count">Purchased: 0</p>
        </div>
      </div>
      <div className="book-sales">
        <p></p>
      </div>
      
    </div>
  );
}
