const IngredientModel = require('../models/ingredientModel');

const IngredientController = {

  // Define um método assíncrono para listar ingredientes, de modo a lidar com uma requisão GET.
  async listarIngredientes(req, res) {
    try {
      const ingredientes = await IngredientModel.getAllIngredientes();
      return res.status(200).json(ingredientes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar ingredientes.' });
    }
  },

  // Define um método assíncrono para obter um ingrediente a partir do id, de modo a lidar com uma requisão GET.
  async obterIngrediente(req, res) {
    try {
      const { id } = req.params;
      const ingrediente = await IngredientModel.getIngredienteById(id);
      if (!ingrediente) {
        return res.status(404).json({ error: 'Ingrediente não encontrado' });
      }
      return res.status(200).json(ingrediente);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao obter ingrediente' });
    }
  },

  // Define um método assíncrono para criar um ingrediente, de modo a lidar com uma requisão POST.
  async criarIngrediente(req, res) {
    try {
      const novoIngrediente = await IngredientModel.createIngrediente(req.body);
      return res.status(201).json(novoIngrediente);
      } catch (err) {
        console.error('Erro ao criar ingrediente:', err); 
        res.status(500).json({ error: 'Erro ao criar ingredinte' });
      }
  },

    // Define um método assíncrono para deletar um ingrediente a partir do id, de modo a lidar com uma requisão DELETE.
    async deletarIngrediente(req, res) {
    try {
      const id = parseInt(req.params.id); 
      const ingredienteExcluir = await IngredientModel.deletarIngrediente(id);
      return res.status(200).json({ message: 'Ingrediente deletado com sucesso' });
    } catch (err) {
      console.error('Erro ao deletar ingrediente:', err);
      res.status(500).json({ error: 'Erro ao deletar ingrediente' });
    }
  }
};

module.exports = IngredientController;