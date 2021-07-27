import "./profile.css";
import SideBar from "../../sidebar/SideBar";

export default function Profile() {
  return (
    <div className="profile-h">
      <SideBar />
      <div className="head-pr">
        <div className="top-pr">
          <p className="dashboard-pr">
            My Profile
            <i class="icon fas fa-bell">
              <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
              </span>
            </i>
          </p>
        </div>
      </div>

      <div className="heading-pr">
        <div className="cover-pic-pr">
          <img
            src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
            alt=""
          />
          <div className="head-title">
              <div className="head-main-t">
                <span className="title-hr"><h3>Jane Alex</h3></span>
                <span className="mail-hr"><p>jane@mail.com</p></span>
              </div>
              
              <div className="sub-title-hr">
                <span className="published-count"><h5>40</h5></span>
                <span className="book-published"><p>Published</p></span>
              </div>
          </div>
        </div>
        <div className="details">
            <div className="details-title">
                Address <i class="fas fa-angle-right"></i>
                <div className="details-content">1, Kingdom street...</div>
            </div>
            <hr />
            <div className="details-title">
                Country <i class="fas fa-angle-right"></i>
                <div className="details-content">Nigeria</div>
            </div>
            <hr />
            <div className="details-title">
                Phone Number <i class="fas fa-angle-right"></i>
                <div className="details-content">+2349066...</div>
            </div>
            <hr />
            <div className="details-title">
                Account Details <i class="fas fa-angle-right"></i>
                <div className="details-content">
                    Bank: Chase <br />
                    Name: Jane  Alex <br />
                    Account: 0788........92
                </div>
            </div>
            <hr />
        </div>
      </div>
    </div>
  );
}
