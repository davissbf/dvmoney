import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelance do website',
                    type: 'deposit',
                    category: 'Dev',
                    amount: '10000000000',
                    createdAt: new Date('2018-01-01 09:00:00'),
                },
                {
                    id: 2,
                    title: 'Compra da casa',
                    type: 'withdraw',
                    category: 'Casa',
                    amount: '100',
                    createdAt: new Date('2023-01-10 13:00:00'),
                },
            ],
        });
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction');
        });

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create('transaction', data)
        });
    },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
