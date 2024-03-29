
const db = require("../model")
const Quiz = db.quizzez;

exports.create = async (req, ress) => {

    try {
        const data = await Quiz.create(req.body)
        ress.json({
            message:"Quiz createed successfully",
            data: data
        })
    }
    catch(error){
        ress.status(500).json({
            message: error.message,
            data: null
        })
    }

}

exports.getAll = async(req, ress) => {
    try{
        const quizzez = await Quiz.findAll()
        ress.json({
            message: "Quizzes retrived successfully",
            data: quizzez,
        });
    }

    catch (error) {
        ress.status(500).json({
            message: error.message,
            data: null
        })
    }
}

exports.update = async (req, ress) => {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        quiz.update(req.body,{
            where: {id}
        })
        ress.json({
            message: `data dengan id ${id} berhasil diubah`,
            data: quiz
        })
    }

    catch (error) {
        ress.status(500).json({
            message: error.message,
            data: null
        })
    }
}

exports.delete = async (req, ress) => {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        quiz.destroy()
        ress.json({
            message: "Quiz deleted successfully"
        })
    }

    catch (error) {
        ress.status(500).json({
            message: error.message,
            data: null
        })
    }
}

exports.getById = async (req, ress) => {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        ress.json({
            message: `Quiz retirved successfully with id = ${id}`,
            data: quiz
        })
    }

    catch (error) {
        ress.status(500).json({
            message: error.message,
            data: null
        })
    }
}

exports.getByCategoryId = async(req,res) => {
    const id = req.params.id 
    const quizzes = await Quiz.findAll({ 
        where : {
            contentID: id 
        }
    })
        res.json({
            message: `Quizzes retrieved succesfully woth id=${id}.`,
            data: quizzes, 
        });
}