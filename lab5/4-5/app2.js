const navlinkItems = [
    { label: 'Главная', href: '/' },
    { label: 'О нас', href: '/about' },
    { label: 'Контакты', href: '/contacts' },
    // add more items here
];
  
const content = (
    <ul className="nav">
      {navlinkItems.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
);

ReactDOM.render(content, document.querySelector("#myDiv"));
// -----------------------------------------

const animalsInHTML = [
    <li>Horse</li>,
    <li>Turtle</li>,
    <li>Elephant</li>,
    <li>Monkey</li>
];
const App = () => {
    return (
      <ul>
        {animalsInHTML}
      </ul>
    );
};
ReactDOM.render(<App />, document.querySelector('#anim'));