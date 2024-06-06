const BootstrapCard = props => {
  return <div class="card m-5 w-25">
    <img class="card-img-top" src={props.image} />
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.description}</p>
      <a href={props.buttonLink} class="btn btn-primary">{props.buttonLabel}</a>
    </div>
  </div>;
}

BootstrapCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonLabel: PropTypes.string,
  image: PropTypes.string
}
BootstrapCard.defaultProps = {
  title: "Bob Dylan",
  description: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter.",
  buttonLink: "https://en.wikipedia.org/wiki/Bob_Dylan",
  buttonLabel: "Go to wikipedia",
  image: "Dylan.png"
}
ReactDOM.render(
  <div>
    <BootstrapCard title="Bob Dylan"
      description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
      buttonLink="https://en.wikipedia.org/wiki/Bob_Dylan"
      buttonLabel="Go to wikipedia"
      image="Dylan.png" />
    <BootstrapCard
      title="Welcome to react"
      description="React is the most popular rendering library in the world"
      buttonLabel="Go to the official website"
      buttonURL="https://reactjs.org/"
      />
  </div>, root);