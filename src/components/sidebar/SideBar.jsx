import "./sidebar.css";
import { slide as Menu } from "react-burger-menu";

export default function SideBar() {
  const user = true;
  return (
    <div>
      <Menu>
        <p className="publisher">Publisher Id: 60e9108fafc07d11f8318414</p>
        <br />
        <a className="menu-item" href="/dashboard">
         <span class="side">Home</span> 
          <i class="bi bi-house-door"></i>
        </a>
        <br />

        <a className="menu-item" href="/upload">
         <span class="side">Upload</span> 
         <i class="bi bi-upload"></i>
        </a>
        <br />

        <a className="menu-item" href="/profile">
         <span class="side">Profile</span> 
         <i class="bi bi-person-lines-fill"></i>
        </a>
        <br />

        <a className="menu-item" href="/payment">
         <span class="side">Payment page</span> 
         <i class="bi bi-wallet"></i>
        </a>
        <br />

        <hr />
        <div class="dropdown">
          <butt
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {
              user ? (
              <img
                className="cover-pic"
                src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
                alt=""
              />
              ) : (
                <>
                </>
              )
            }
           
            <span className="user-name">Jane</span> 
          </butt>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="/profile">
                Profile
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/settings">
                settings
              </a>
            </li>
            <li>
            <a class="dropdown-item">{user && "Logout"}</a>
            </li>
          </ul>
        </div>
      </Menu>
    </div>
  );
}
