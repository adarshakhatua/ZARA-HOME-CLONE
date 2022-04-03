function navbar(){
    return `<div id="header-div">
    <div id="sidebar-div">
    <div id="home">
        <i class="material-icons">menu</i>
        <p onclick="window.location.href = '../index.html'">ZARA HOME</p>
    </div>

    <div id="sidebar">
        <div id="icon-sidebar"><p onclick="window.location.href = '../index.html'">ZARA HOME</p></div>

        <div class="option1" id="id0">
            <p>NEW IN</p>
            <div class="option2" id="id00">
                <p>COLLECTION</p>
                <p>KIDS</p>
            </div>
        </div>

        <div class="option1" id="id1">
            <p>BEDROOM</p>
            <div class="option2" id="id11">
                <p onclick="window.location.href = '../Bedroom/bedroom.html'">DUVET COVERS</p>
                <p>FLAT SHEETS</p>
                <p>PILLOWCASES</p>
                <p>FITTED SHEETS</p>
                <p>QUILTS</p>
                <p>BEDSPREADS</p>
                <p>BLANKETS</p>
                <p>CUSHIONS</p>
                <p>CURTAINS</p>
            </div>
        </div>

        <div class="option1" id="id2">
            <p>CLOTHING & FOOTWEAR</p>
            <div class="option2" id="id22">
                <p>WOMEN</p>
                <p>MEN</p>
                <p onclick="window.location.href = '../footwear/footwear.html'">FOOTWEAR</p>
                <p>ACCESSORIES</p>
            </div>
        </div>

        <div class="option1" id="id3">
            <p>LIVING ROOM</p>
            <div class="option2" id="id33">
                <p onclick="window.location.href = '../Living room/livingroom.html'">FURNITURE & RUGS</p>
                <p>PHOTO FRAMES</p>
                <p>BASKETS</p>
                <p>VASES</p>
                <p>DECORATIVE CUSHIONS</p>
                <p>CURTAINS</p>
                <p>DOOR KNOBS</p>
                <p>DECOR ACCESSORIES</p>
            </div>
        </div>

        <div class="option1" id="id4">
            <p>DINING</p>
            <div class="option2" id="id44">
                <p>TABLECLOTHS</p>
                <p>NAPKINS</p>
                <p>PLACEMATS</p>
                <p>TABLE RUNNERS</p>
                <p>KITCHEN TEXTILES</p>
                <p>TABLE ACCESSORIES</p>
            </div>
        </div>

        <div class="option1" id="id5">
            <p>BATHROOM</p>
            <div class="option2" id="id55">
                <p onclick="window.location.href = '../Bathroom/bathroom.html'">TOWELS</p>
                <p>BATHROBES</p>
                <p>BATHROOM ACCESSORIES</p>
            </div>
        </div>

        <div class="option1" id="id6">
            <p>KIDS</p>
            <div class="option2" id="id66">
                <p>BEDROOM</p>
                <p>BATHROOM</p>
                <p>FOR DECORATING</p>
                <p>OFF FOR A STROLL</p>
            </div>
        </div>

        <div class="option1" id="id7"><p>STORIES</p></div>

        <div class="option1" id="id8">
            <p>+ INFO</p>
            <div class="option2" id="id88">
                <p onclick="window.location.href = '../Help/help.html'">HELP</p>
                <p onclick="window.location.href = '../Contact/contact.html'">CONTACT US</p>
                <p onclick="window.location.href = '../Guest/guest.html'">GUEST PURCHASE</p>
            </div>
        </div>
     
    </div>

</div>

<div id="search">
    <p id="SEARCH">SEARCH</p>
    <div></div>
</div>

<div id="login-div">
    <div id="login" onclick="window.location.href = '../Login/login.html'">
    <i class="fi fi-rr-user" id="login-icon"></i>
    <p id="login_text">LOG IN</p>
    </div>

    <div id="wishlist">
    <i class="fi fi-rr-heart"></i>
    <p onclick="window.location.href = '../cart page/cart.html'">WISHLIST</p>
    </div>
    
    <div id="basket">
        <i class="fi fi-rs-shopping-bag-add"></i>
        <p id="BASKET" onclick="window.location.href = '../cart page/cart.html'">BASKET</p>
    </div>
</div>
</div>`;
}

function footer() {
    return `
      <div id="footer_1st">
          <p>JOIN OUR NEWSLETTER - ENTER YOUR EMAIL ADDRESS</p>
          <input type="text" />
        </div>
        <div id="footer_2nd">
          <div id="follow">
            <p>Follow us on</p>
            <div class="icon">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-pinterest-p"></i>
              <i class="fa fa-youtube"></i>
              <i class="fab fa-twitter"></i>
              <i class="fa fa-spotify"></i>
            </div>
          </div>
          <div id="download">
            <p>Download our app</p>
            <div class="icon">
              <i class="fab fa-apple"></i>
            </div>
          </div>
        </div>
        <div id="footer_3rd">
          <div>
            <h5>POLICIES</h5>
            <a href="#">
              <p>TERMS AND CONDITIONS</p>
            </a>
            <a href="#">
              <p>PRIVACY POLICY</p>
            </a>
            <a href="#">
              <p>COOKIES POLICY</p>
            </a>
            <a href="#">
              <p>COOKIES SETTINGS</p>
            </a>
            <a href="#">
              <p>LEGAL MENTIONS</p>
            </a>
          </div>
          <div>
            <h5>COMPANY</h5>
            <a href="#">
              <p>WORK WITH US</p>
            </a>
            <a href="#">
              <p>PRESS</p>
            </a>
          </div>
          <div>
            <h5>CONTACT</h5>
            <a href="#">
              <p>CONTACT US</p>
            </a>
            <a href="#">
              <p>GUEST PURCHASE</p>
            </a>
          </div>
        </div>
      `;
  }

  export { navbar, footer };