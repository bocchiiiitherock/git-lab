// ReactDOM.render(output, document.getElementById("myDiv"));
const data = {
  image: "bob.png",
  cardTitle: "Bob Dylan",
  cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia"
  }
};
const output = <div class="card m-5 w-25">
  <img src={data.image} class="card-img-top" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">{data.cardTitle}</h5>
    <p class="card-text">{data.cardDescription}</p>
    <a href={data.button.url} class="btn btn-primary">{data.button.label}</a>
  </div>
</div>;
ReactDOM.render(output, document.querySelector("#myDiv"));





