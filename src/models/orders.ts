import { Schema, model, Document } from 'mongoose';

interface OrderInterface extends Document {
  id_produto: Number;
  nome_produto: String;
  preco_produto: Number;
  quantidade_produto: Number;
  descricao_produto?: String;
}

const OrderSchema = new Schema({
  id_produto: Number,
  nome_produto: String,
  preco_produto: Number,
  quantidade_produto: Number,
  descricao_produto: String,
});

export default model<OrderInterface>('Order', OrderSchema);
