const Skill = require('../models/todo');

module.exports = {
    index,
    show
};

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function index(req, res) {
    res.render('todo/index', {
        skills: Skill.getAll()
    });
}