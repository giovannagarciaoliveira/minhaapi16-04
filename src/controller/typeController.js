 import typeModel from '../model/typeModel.js'

const getAll = async (req, res) => {
    const types = await typeModel.getAll();
    res.json(types);
};
 
 
 const create = async (req,res) => {
    const {name} = req.body;

    if(!name) {
        return res.status(400).json({
            message: 'O nome é obrigatório'
        });
    }
    const newType = await typeModel.create(name);
res.status(201).json(newType);
 };
 
const remove = async (req, res) => {
    const deletedType = await typeModel.remove(req.params.id);

if (!deletedType) {
    return res.status(404).json({
        message: 'Tipo não encontrado'
    });
}

res.status(200).json({
    message: 'Tipo deletado com sucesso',
    deletedType
});
}

export default { getAll, create, remove};


