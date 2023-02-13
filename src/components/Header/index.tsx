import { AppBar, Container } from "./styles";
import cart from '../../assets/cart-icon.svg';


export function Header() {
    return (
        <AppBar>
            <Container>
                <h1><strong>Supera Games</strong></h1>
            </Container>
            <Container>
                <img src={cart} alt='Carrrinho de compras' />
            </Container>
        </AppBar>
    );
}