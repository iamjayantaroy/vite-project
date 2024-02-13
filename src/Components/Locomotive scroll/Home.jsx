import "./style.css";

function Home({ title }) {
  return (
    <div>
      <div id="page1">
        <h1>{title}</h1>
      </div>
      <div id="page2">{title}</div>
      <div id="page3">{title}</div>
    </div>
  );
}

export default Home;
