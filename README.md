# e-library-rest-api
rest api for e-library app

This application is an e-library for storing books online/digitally. The category can be academic, comics, stories, seminars, etc... Some of the features will be that any book uploaded can be downloaded, saved and read offline. The UI will contain registration page (register as publisher or user), login page for admin, publisher, and user..
NB: UI for publishers registration and login will be totally different from the users

Admin:
* will be in charge/control of everything happening in the app, interacting with publisher and user
* he will be able to approve and upload to the general public user any book submitted and delete books
* will be able to handle error reported by the publisher or user

Publisher:
* can register and login as a publisher
* publisher can also register as a user
* will be able to upload thier book(s) in PDF format (including cover picture/design & any other available design to select from, title, category)
* will provide short  description of book when uploading
* can request for deletion of book
* will get notificationn whenever a book is sold out or will be able to access dashboard to see stat
* cover picture will be required

User:
* can register and login as a user
* can also register as a publisher
* user can access any book purchased
* user will be able to download, save purchased book and read offline
* user won't be previleged to download books on their device, copy to clipboard, screenshot or screen recording. downloaded book(s), will only be to access offline right in the application
* there will be an identifier for readers, so they'd be able to make point at eaxct point they stop reading, and they'd easily pick up from there when next they come
* color picker to highlight point(s) and note taking app embeded inside to make a quick note while reading
* user will be able to add book(s) to favorites for future use
* search box that will help users  search for book(s) by category or title
* there will be a bottom bar where user can easily make navigation to their library(my library(where downloaded books will be stored)), favorites, home, contact or report an error, notes(optional)

User UI description:
when user launch the app, it will require them to login to their account or create a new account if new user before they can proceed to home.
After successful sign in,the home will be displayed with available books, short description, rate, no of purchase

Publisher UI description:
Anybody with the URL can visit the website, read the about and how it works, will be able to access sign up and sign in. After successful login, punlisher will be able to access dashboard, statistics, payment, profile/info in homepage, will be able to upload  book(s).
* In stat page, publisher will be able to see the list of book uploaded and sales.
* payment page will contain payment information
* profile will be information about publisherr, name, address, payment info and others

NB: everyone registering must verify account with code that will be sent to their  email.


what to work on when I'm back: for publishers to view uploads, its going to a get request
