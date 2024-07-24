import BlockForm from "@/components/BlockForm";
import Container from "@/components/Container";
import LoggedLayout from "@/layouts/LoggedLayout";

export default function Blocks() {
  return (
    <LoggedLayout>
      <Container>
        <BlockForm />
      </Container>
    </LoggedLayout>
  );
}
