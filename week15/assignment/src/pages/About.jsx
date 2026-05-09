import Header from "../components/Header";

export default function About() {
  return (
    <div className="about">
      <Header
        title="Nathan Tisdale"
        summary="I am a UX Researcher and Designer currently pursing a Masters in Graphic and Web Design at Minneapolis College of Art and Design."
      />
      <img
        src="images/nathan_200.jpeg"
        alt="Nathan Tisdale"
        className="head-shot"
      />
    </div>
  );
}
