import { ICard } from "@/types/Card";
import Container, { CommonParameters } from "../ui/Container"
import { CardList } from "../custom/CardList";


interface ServicesProps {
  data: {
    Services: ICard[];
    CommonParameters: CommonParameters;
  };
}

const OurServices = ({ data }: ServicesProps) => {
  return (
    <section>
        <Container CommonParameters={data.CommonParameters}>
            <CardList cards={data.Services} />
        </Container>
    </section>
  )
}

export default OurServices