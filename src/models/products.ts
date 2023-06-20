import { Schema, model, Document } from 'mongoose';

interface ProductInterface extends Document {
  id_produto: Number;
  nome_produto: String;
  preco_produto: Number;
  quantidade_produto: Number;
  descricao_produto?: String;
}

const ProductSchema = new Schema({
  id_produto: {
    type: Number,
    required: true,
    index: true,
  },
  nome_produto: String,
  preco_produto: Number,
  quantidade_produto: Number,
  descricao_produto: String,
});

export default model<ProductInterface>('Order', ProductSchema);
