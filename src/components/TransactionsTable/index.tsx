import { Container } from "./style";
import { useEffect } from "react";
import {app} from "../../services/app";

export function TransactionsTable() {
  useEffect(() => {
    // fetch('/transactions')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    app.get('transactions')
        .then(response => console.log(response.data));
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdrawn">- R$1.100</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}