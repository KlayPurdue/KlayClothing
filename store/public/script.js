
function renderNav(){
    document.write(`
    
    <nav>
    <div class="navbar">
      <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>  
        <div class="menu-items">
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html">New Releases</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
        </div>
      </div>
    </div>
  </nav>

<div class="navBar" style="text-align: center; padding-top: 40px; padding-bottom: 40px;">
    <nav>
        <ul style="list-style-type: none; margin: 0; padding: 0; display: inline-block;">
            <li style="display: inline;">
                <a class="navElem" href="index.html">Shop All</a>
            </li>
            <li style="display: inline;">
                <a class="navElem">|</a>
            </li>
            <li class="dropdown1">
                <a href="index.html" class="navElem">New Releases</a>
                <div class="dropdown-content">
                    <a href="index.html">Boilermaker</a>
                </div>
            </li>
            <li style="display: inline;">
                <a class="navElem">|</a>
            </li>
            <li style="display: inline;">
                <a class="navElem" href="about.html">About Us</a>
            </li>
            <li style="display: inline;">
                <a class="navElem">|</a>
            </li>
            <li class="dropdown1">
                <a class="navElem" href="contact.html">Contact</a>
            </li>
        </ul>
    </nav>
 </div>
 `);
}

