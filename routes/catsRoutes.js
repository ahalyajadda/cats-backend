import express from 'express';
import Cat from '../models/catsModel.js';

const catsRouter = express.Router();
//creating a post
catsRouter.post('/', async (req, res) => {
  try {
    const newCat = new Cat({
      name: req.body.catName,
      visits: req.body.catClicks,
      catImage: req.body.catImage,
      nickNames: req.body.catNicknames,
      catAge: req.body.catAge,
    });
    const cat = await newCat.save();
    res.status(200).send(cat);
  } catch (err) {
    res.send({ message: err });
  }
});
//fetching all cats info
catsRouter.get('/fetchCatsinfo', async (req, res) => {
  try {
    const catsInfo = await Cat.find();
    res.send(catsInfo);
  } catch (err) {
    res.send({ message: err });
  }
});
//fetch cat info by id
catsRouter.get('/:id', async (req, res) => {
  try {
    const catsInfo = await Cat.findById(req.params.id);
    res.send(catsInfo);
  } catch (err) {
    res.send({ message: err });
  }
});
//update  cate info
catsRouter.put('/:id', async (req, res) => {
  try {
    const catsInfo = await Cat.findById(req.params.id);
    catsInfo.name = req.body.catName || catsInfo.name;
    catsInfo.visits = req.body.catClicks || catsInfo.visits;
    catsInfo.catImage = req.body.catImage || catsInfo.catImage;
    catsInfo.nickNames = req.body.catNicknames || catsInfo.nickNames;
    await catsInfo.save();
    res.send(catsInfo);
  } catch (err) {
    res.send({ message: err });
  }
});
//update clicks and age
catsRouter.patch('/updateCount/:id', async (req, res) => {
  try {
    const catsInfo = await Cat.findById(req.params.id);

    catsInfo.visits = req.body.visits;
    catsInfo.catAge = req.body.catAge;

    await catsInfo.save();
    res.send(catsInfo);
  } catch (err) {
    res.send({ message: err });
  }
});

export default catsRouter;
