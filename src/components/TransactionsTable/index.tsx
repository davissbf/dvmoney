import { Container } from "./style";
import { useContext } from "react";
import { TransactionsContext } from "../../TrasactionsContext";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

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
          {
            transactions.map((transaction: Transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {
                      new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL',
                      }).format(transaction.amount)
                    }
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {new Intl.DateTimeFormat('PT-BR').format(new Date(transaction.createdAt))}
                  </td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  );
}