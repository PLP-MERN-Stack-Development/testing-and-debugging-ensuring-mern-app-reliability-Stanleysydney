const Bug = require('../models/bugModel');
const { validateBug } = require('../utils/validation');

async function createBug(req,res,next){
  try{
    const {valid, errors} = validateBug(req.body);
    if(!valid){ const err = new Error('Validation failed: ' + errors.join(', ')); err.status=400; throw err; }
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  }catch(err){ next(err); }
}

async function listBugs(req,res,next){
  try{ const bugs = await Bug.find().sort({createdAt:-1}); res.json(bugs); } catch(err){ next(err); }
}

async function updateBug(req,res,next){
  try{
    const {valid, errors} = validateBug(req.body);
    if(!valid){ const err = new Error('Validation failed: ' + errors.join(', ')); err.status=400; throw err; }
    const updated = await Bug.findByIdAndUpdate(req.params.id, req.body, { new:true });
    if(!updated){ const err = new Error('Bug not found'); err.status=404; throw err; }
    res.json(updated);
  }catch(err){ next(err); }
}

async function deleteBug(req,res,next){
  try{
    const removed = await Bug.findByIdAndDelete(req.params.id);
    if(!removed){ const err = new Error('Bug not found'); err.status=404; throw err; }
    res.status(204).end();
  }catch(err){ next(err); }
}

module.exports = { createBug, listBugs, updateBug, deleteBug };
