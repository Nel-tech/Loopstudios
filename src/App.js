import Header from "./Component/Header";
import Section from "./Component/Section";
import Nav from "./Component/Nav";
import Show from "./Component/Show";
import Flex from "./Component/Flex";

export default function app() {
  return (
    <div>
      <Section>
        <Header>
          <Nav />
          <Show />
          <Flex />
        </Header>
      </Section>
    </div>
  );
}
