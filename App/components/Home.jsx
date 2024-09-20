import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = { useNavigate };
  const handleNavigateGithub = () => {
    navigate("/Github");
  };
  return (
    <div className="container">
      <header>
        <h1>Portfolio website</h1>
      </header>
      <div className="main-projects">
        <h2>Projects</h2>
        <p>Here you can see my main projects on github</p>
        <button onClick={handleNavigateGithub}>Show more</button>
      </div>
      <div className="linkedin">
        <h2>Linked In account</h2>
        <p>Here you can see my profile on LinkedIn</p>
        <button>Show more</button>
      </div>
      <div className="about-tile">
        <h2>About me</h2>
        <p>Here you can get to know me better</p>
        <button>Show more</button>
      </div>
      <div className="contact-tile">
        <h2>Contact</h2>
        <p>If you are interested in me, please contact me</p>
        <button>Show more</button>
      </div>
    </div>
  );
}
export default HomePage;
