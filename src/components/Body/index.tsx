import { Column, Container, Row, RowGames, ColumnGames, SelectContainer } from "./styles";
import { Button } from "../Button";
import { useState, useEffect } from "react";
import { ProductsDTO } from "../../dtos/ProductsDTO";
import api from "../../services/api";

// 

type Props = {
    data: ProductsDTO;
}

const options = ['all-products', 'score-asc', 'score-des', 'order-alpha', 'low-price', 'big-price'];

export function Body({data}: Props) {
    const [produtos, setProdutos] = useState<ProductsDTO[]>([]);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [games, setGames] = useState(data);

    function handledAdd() {
        localStorage.setItem('products', JSON.stringify(produtos));
        const i = localStorage.getItem('products');
        
    }

    function handleConsulte() {
        // const i = localStorage.getItem('products');
        // console.log(i)
        // // localStorage.clear()
        
        
        console.log(produtos.map((produtos) =>{console.log(produtos.id)}))
    }

    async function fetchProducts() {
        try {
            const { data } = await api.get(`/products/list-products/${selectedOption}`)

            setProdutos(data)
        } catch (error) {
            console.log(`error raiva: ${error}`)
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [selectedOption])

    // useEffect(() => {
    //     handledAdd();
    // }, [games])

    return (
        <>
            <SelectContainer>
                <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </SelectContainer>
            <Column>

                {produtos.map((produtos) =>
                    <Container>
                        <Row>
                            <RowGames>
                                <img src={`${api.defaults.baseURL}${produtos.image}`} alt='Carrrinho de compras' />
                                <ColumnGames>
                                    <p><strong>{produtos.name}</strong></p>
                                    <p><strong>Score: {produtos.score}</strong></p>
                                    <p><strong>Valor: {produtos.price}</strong></p>

                                    <Button
                                        title="adicionar"
                                        onClick={handleConsulte}
                                    />
                                </ColumnGames>
                            </RowGames>
                        </Row>
                    </Container>
                )}
            </Column>
        </>
    );
}