/*  SPA  */

function getContent(fragmentId, callback) {
  var pages = {
    home: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">

      <a class="navbar-brand" href="#home">SPA prou mal feta</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item logged-out" style="display: none;">
            <a class="nav-link" href="#" data-toggle="modal" data-target="#login">Login</a>
          </li>
          <li class="nav-item logged-out" style="display: none;">
            <a class="nav-link" href="#" data-toggle="modal" data-target="#registro">Registro</a>
          </li>
          
          <li class="nav-item logged-in" style="display: none;">
            <a class="nav-link" href="#home" id="Home">Home</a>
          </li>
          <li class="nav-item logged-in" style="display: none;">
            <a class="nav-link" href="#about" id="About">About</a>
          </li>
          <li class="nav-item logged-in" style="display: none;">
            <a class="nav-link" href="#pricing" id="Pricing">Pricing</a>
          </li>
          <li class="nav-item logged-in" style="display: none;">
            <a class="nav-link" href="#" id="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container p-4">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div id="pokemon">
        </div>
      
        <ul class="list-group posts">
        </ul>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="registro" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Registro</h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="signup-form">
            <div class="form-group">
              <input type="text" id="signup-email" class="form-control" placeholder="Ejemplo@gmail.com" required>
            </div>
            <div class="form-group">
              <input type="password" id="signup-password" class="form-control" placeholder="Contraseña" required>
            </div>
            <button type="submit" class="btn btn-secondary btn-block">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="login" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalSignin" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Login</h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="login-form">
            <div class="form-group">
              <input type="text" id="login-email" class="form-control" placeholder="Ejemplo@gmail.com" required>
            </div>
            <div class="form-group">
              <input type="password" id="login-password" class="form-control" placeholder="Contraseña" required>
            </div>
            <button type="submit" class="btn btn-secondary btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
    `,
    about: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">

        <a class="navbar-brand" href="#home">SPA prou mal feta</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item logged-out" style="display: none;">
              <a class="nav-link" href="#" data-toggle="modal" data-target="#login">Login</a>
            </li>
            <li class="nav-item logged-out" style="display: none;">
              <a class="nav-link" href="#" data-toggle="modal" data-target="#registro">Registro</a>
            </li>
            
            <li class="nav-item logged-in" style="display: none;">
              <a class="nav-link" href="#home" id="Home">Home</a>
            </li>
            <li class="nav-item logged-in" style="display: none;">
              <a class="nav-link" href="#about" id="About">About</a>
            </li>
            <li class="nav-item logged-in" style="display: none;">
              <a class="nav-link" href="#pricing" id="Pricing">Pricing</a>
            </li>
            <li class="nav-item logged-in" style="display: none;">
              <a class="nav-link" href="#home" id="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container p-4">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div id="pokemon">
          </div>
        
          <ul class="list-group posts">
          </ul>
        </div>
      </div>
    </div>
    `,
    pricing: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">

      <a class="navbar-brand" href="#home">SPA prou mal feta</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item logged-out" style="display: none;">
            <a class="nav-link" href="#" data-toggle="modal" data-target="#login">Login</a>
          </li>
          <li class="nav-item logged-out" style="display: none;">
            <a class="nav-link" href="#" data-toggle="modal" data-target="#registro">Registro</a>
          </li>
          
          <li class="nav-item logged-in" style="display: none;">
            <a class="nav-link" href="#home" id="Home">Home</a>
          </li>
          <li class="nav-item logged-in" style="display: none;">
            <a class="nav-link" href="#about" id="About">About</a>
          </li>
          <li class="nav-item logged-in" style="display: none;">
            <a class="nav-link" href="#pricing" id="Pricing">Pricing</a>
          </li>
          <li class="nav-item logged-in" style="display: none;">
            <a class="nav-link" href="#home" id="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container p-4">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div id="pokemon">
        </div>
      
        <ul class="list-group posts">
        </ul>
      </div>
    </div>
  </div>
    `
  };
  callback(pages[fragmentId]);
}

function loadContent() {
  var contentDiv = document.getElementById("app");
  fragmentId = location.hash.substr(1);

  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  });

/*  REGISTROS, LOGIN Y LOGOUT  */


const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const body = document.querySelector("#body");

const loginCheck = (user) => {
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
    body.style.background = "#723D32";
    
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));
    body.style.background = "#221F1E";
  }
};

if (location.hash == "#home") {
  // SignUp
  const signUpForm = document.querySelector("#signup-form");
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signUpForm["signup-email"].value;
    const password = signUpForm["signup-password"].value;

    // Authenticate the User
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // clear the form
        signUpForm.reset();
        // close the modal
        $("#registro").modal("hide");
      });
  });

  // SingIn
  const signInForm = document.querySelector("#login-form");

  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signInForm["login-email"].value;
    const password = signInForm["login-password"].value;

    // Authenticate the User
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      // clear the form
      signInForm.reset();
      // close the modal
      $("#login").modal("hide");
    });
  });
}
// Logout
const logout = document.querySelector("#logout");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    location.hash = "home";
    console.log("sign out");
  });
});

/*  POSTS  */

//const postList = document.querySelector(".posts");
let pokemon = document.querySelector("#pokemon");
const setupPosts = (data) => {
  auth.onAuthStateChanged((user) => {
    if (user && location.hash == "#home") {
      function cargarPokedex() {
        fetch("pokedex.json").then(function (response) {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;
          }
          response.json().then(function (data) {
            pokemon.innerHTML = "";
            for (let i of data) {
              let div = document.createElement("div");
              //if(i.type == "Grass"){
              div.innerHTML = `<hr>Nº_Pokédex: ${i.id} <br>
                  Nombre: ${i.name.english} <br>
                  Japonés: ${i.name.japanese} <br>
                  Tipo: ${i.type}<br><br>`;
              let pokeImage = document.createElement("img");
              pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i.id}.png`;
              div.append(pokeImage);
              div.style.textAlign = "center";
              div.style.background = "indianred";
              
              pokemon.append(div);
              console.log(i.name.english);
              //}
            }
          });
        });
      }
      cargarPokedex();
    } else if (user && location.hash == "#about"){
      let html = "";
      data.forEach((doc) => {
        const post = doc.data();
        const li = `
        <li class="list-group-item list-group-item-action" style="background-color: darkred; color: white"> 
          <h5>${post.title}</h5>
          <p>${post.description}</p>
        </li>
        <br>
      `;
        html += li;
      });
      pokemon.innerHTML = html;
    }else if (user && location.hash == "#pricing"){
      pokemon.innerHTML = '<h4 class="text-white">Pricing page</h4>';
    }else if(!user){
      pokemon.innerHTML = '<h4 class="text-white">You are logged out :(</h4>'
    }
  });
};

// events
// list for auth state changes
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("logueado");
    fs.collection("posts")
      .get()
      .then((snapshot) => {
        setupPosts(snapshot.docs);
        loginCheck(user);
      });
  } else {
    console.log("no logueado");
    setupPosts([]);
    loginCheck(user);
  }
});
}

if (!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent);