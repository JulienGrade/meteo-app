import { Container } from "../../components/Container/Container.jsx";
import {ForecastHeader} from "../../components/ForecastHeader/ForecastHeader";
import {ForecastList} from "../../components/ForecastList/ForecastList";

export function Forecast({}) {
    return (
        <Container>
            <ForecastHeader />
            <ForecastList />
        </Container>
    );
}

