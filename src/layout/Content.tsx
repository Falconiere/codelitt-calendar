import { Layout } from "layout";
import { Container } from "./Container";
import { Wrapper } from "./Wrapper";

type ContentProps = {
  reminderContent: React.ReactNode;
  calendarContent: React.ReactNode;
};
const Content = ({ reminderContent, calendarContent }: ContentProps) => (
  <Wrapper>
    <Container
      calendarContent={calendarContent}
      reminderContent={reminderContent}
      footerContent={<Layout.Footer />}
    />
  </Wrapper>
);

export { Content };
