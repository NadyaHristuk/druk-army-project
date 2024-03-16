import Container from "@/components/container/Container";
import TitleConsumers from "./TitleConsumers/TitleConsumers";
import ListConsumers from "./ListConsumers/ListConsumers";

const Consumers = () => {
  return (
      <Container>
        <TitleConsumers />
        <ListConsumers/>
      </Container>
  );
};

export default Consumers;
