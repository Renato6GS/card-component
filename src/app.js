// You can add a list of files
function importAll(r) {
   return r.keys().map(r);
}
// Debemos importar cada imagen, pero creo que con esto lo resolvemos jeje
importAll(require.context('./static/img', false, /\.(png|jpe?g|svg)$/));

// ... or, add files individually
// import './static/img/image-equilibrium.jpg';
import './vendors/normalize/normalize.css';
import './styles/main.css';
import './styles/card.css';
import './styles/footer.css';
