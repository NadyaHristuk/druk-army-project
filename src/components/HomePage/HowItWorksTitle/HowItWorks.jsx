import Container from "@/components/container/Container";
import css from "./HowItWorks.module.css";
import Title from "./Title/Title";
import CardsList from "./CardsList/CardsList";

const HowItWorks = () => {
  return (
    <div className="containerSection">
      <Container>
        <Title />
      </Container>
      <CardsList/>
    </div>
  );
};

export default HowItWorks;
