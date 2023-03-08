import express from 'express';
import Cat from '../models/catsModel.js';

const catsRouter = express.Router();

catsRouter.post('/', async (req, res) => {
  // console.log(req.body);
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

catsRouter.get('/fetchCatsinfo', async (req, res) => {
  try {
    const catsInfo = await Cat.find();
    // console.log(catsInfo);
    res.send(catsInfo);
  } catch (err) {
    res.send({ message: err });
  }
});

catsRouter.get('/:id', async (req, res) => {
  try {
    const catsInfo = await Cat.findById(req.params.id);
    res.send(catsInfo);
  } catch (err) {
    res.send({ message: err });
  }
});
catsRouter.put('/:id', async (req, res) => {
  try {
    const catsInfo = await Cat.findById(req.params.id);
    catsInfo.name = req.body.catName;
    catsInfo.visits = req.body.catClicks;
    catsInfo.catImage = req.body.catImage;
    catsInfo.catNicknames = req.body.catNicknames;
    await catsInfo.save();
    res.send(catsInfo);
  } catch (err) {
    res.send({ message: err });
  }
});
catsRouter.patch('/updateCount/:id', async (req, res) => {
  try {
    const catsInfo = await Cat.findById(req.params.id);

    catsInfo.visits = req.body.visits;
    catsInfo.catAge = req.body.catAge;

    await catsInfo.save();
    console.log(catsInfo.catAge);
    res.send(catsInfo);
  } catch (err) {
    res.send({ message: err });
  }
});

export default catsRouter;
