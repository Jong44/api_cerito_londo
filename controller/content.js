
const db = require("../model")
const Content = db.content;
const Quiz = db.quizzez;
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });

const upload = multer({ storage: storage });

exports.create = async (req, res) => {
  try {
    upload.single('images')(req, res, async (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          message: 'Error uploading file'
        });
      } else {
        const data = await Content.create({
          title: req.body.title,
          content: req.body.content,
          years: req.body.years,
          images: `http://${req.hostname}:5000/images/${req.file.filename}` // Menyimpan URL foto
        });

        res.json({
          message: 'Content created successfully',
          data: data
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
      data: null
    });
  }
};

exports.getAll = async(req, ress) => {
    try{
        const data = await Content.findAll({include: [ { model: Quiz, as: 'quiz' } ]})
        ress.json({
            message: "Content retrived successfully",
            data: data,
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
        const data = await Content.findByPk(id, {rejectOnEmpty: true})
        data.update(req.body,{
            where: {id}
        })
        ress.json({
            message: `data dengan id ${id} berhasil diubah`,
            data: data
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
        const data = await Content.findByPk(id, {rejectOnEmpty: true})
        data.destroy()
        ress.json({
            message: "Content deleted successfully"
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
        const data = await Content.findByPk(id, {rejectOnEmpty: true, include: [ { model: Quiz, as: 'quiz' } ]})
        ress.json({
            message: `Content retirved successfully with id = ${id}`,
            data: data
        })
    }

    catch (error) {
        ress.status(500).json({
            message: error.message,
            data: null
        })
    }
}