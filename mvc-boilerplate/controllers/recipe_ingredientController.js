const Recipe_IngredientModel = require('../models/recipe_ingredientModel');

const Recipe_IngredientController = {

  // Define um método assíncrono para criar uma relação entre ingrediente e receita, de modo a lidar com uma requisão POST.
  async ingrediente_da_receita (req, res) {
    try {
      const novoReceitaIngrediente = await Recipe_IngredientModel.ingrediente_da_receita(req.body);
      return res.status(201).json(novoReceitaIngrediente);
      } catch (err) {
        console.error('Erro ao adicionar ingrediente na receita:', err); 
        res.status(500).json({ error: 'Erro ao adicionar ingrediente na receita.' });
      }
  },

    // Define um método assíncrono para listar relações entre ingredientes e receitas, de modo a lidar com uma requisão GET.
    async listar_ingrediente_da_receita(req, res) {
    try {
      const ingrediente_receita = await Recipe_IngredientModel.listar_ingrediente_da_receita();
      return res.status(200).json(ingrediente_receita);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar ingredientes_receitas.' });
    }
  },

  // Define um método assíncrono para obter uma relação entre ingrediente e receita a partir do id, de modo a lidar com uma requisão GET.
  async obter_ingrediente_da_receita(req, res) {
    try {
      const { id } = req.params;
      const ingrediente_receita = await Recipe_IngredientModel.obter_ingrediente_da_receita(id);
      if (!ingrediente_receita) {
        return res.status(404).json({ error: 'Ingrediente-receita não encontrado' });
      }
      return res.status(200).json(ingrediente_receita);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao obter ingrediente_receita' });
    }
  },

    // Define um método assíncrono para deletar uma relação entre ingrediente e receita a partir do id, de modo a lidar com uma requisão DELETE.
    async deletar_ingrediente_da_receita(req, res) {
    try {
      const id = parseInt(req.params.id); // extrai o ID da URL
      const ingrediente_receita = await Recipe_IngredientModel.deletar_ingrediente_da_receita(id);
      return res.status(200).json({ message: 'Ingrediente_receita deletado com sucesso' });
    } catch (err) {
      console.error('Erro ao deletar ingrediente_receita:', err);
      res.status(500).json({ error: 'Erro ao deletar ingrediente_receita' });
    }
  }
};

module.exports = Recipe_IngredientController;