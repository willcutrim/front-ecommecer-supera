import { Column, Container, Row, RowGames, ColumnGames, SelectContainer } from "./styles";
import { Button } from "../Button";
import { useState, useEffect } from "react";
import { ProductsDTO } from "../../dtos/ProductsDTO";
import api from "../../services/api";
import uuid from 'react-uuid';


const options = ['all-products', 'score-asc', 'score-des', 'order-alpha', 'low-price', 'big-price'];



export function Body() {
    const [produtos, setProdutos] = useState<ProductsDTO[]>([]);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [games, setGames] = useState<Array<Object>>([]);

    const idu = uuid();

    function handledAdd(id: string, score: number, price: number, name: string, image: string) {
        const data = {
            uid: idu,
            id: id,
            image: image,
            score: score,
            price: price,
            name: name,
        }

        if (localStorage.hasOwnProperty('pedidos')) {
            console.log('passou no if')
            setGames(JSON.parse(localStorage.getItem("pedidos") || ''));

        }

        games.push(data);

        localStorage.setItem('pedidos', JSON.stringify(games))

        const pedidosStorage = localStorage.getItem('pedidos');

        const gamesStorage = pedidosStorage ? JSON.parse(pedidosStorage) : null;

        setGames(gamesStorage);
    }

    function handleConsulte() {
        console.log(typeof games);

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
                                <button><img src={`${api.defaults.baseURL}${produtos.image}`} alt='Carrrinho de compras' /></button>
                                <ColumnGames key={produtos.id}>
                                    <p><strong>{produtos.name}</strong></p>
                                    <p><strong>Score: {produtos.score}</strong></p>
                                    <p><strong>Valor: {produtos.price}</strong></p>

                                    <Button
                                        title="adicionar"
                                        onClick={() => handledAdd(produtos.id, produtos.score, produtos.price, produtos.name, produtos.image)}
                                    />
                                    <Button
                                        title="ver storage"
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