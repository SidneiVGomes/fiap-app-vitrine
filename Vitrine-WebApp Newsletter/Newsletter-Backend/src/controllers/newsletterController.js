const Newsletter = require('../models/newsletter');

module.exports = {
    async index(req, res) {
        const newsletters = await Newsletter.find();

        try {
            return res.json(newsletters)
        } catch (error) {
            return res.json([]);
        }
    },

    async store(req, res) {
        const { category, message, title } = req.body;

            const newsletter = await Newsletter.create({
            category,
            message,
            title
        })

        return res.json(newsletter);
    },

    async show(req, res) {
        const { id } = req.params;

        try {
            const newsletter = await Newsletter.findById({ _id: id })
            
            return res.json(newsletter);

        } catch (error) {
            return res.json([]);
        }
    },

    async update(req, res) {
        const { id } = req.params;
        const { category, message, title } = req.body;

        try {
            const newsletter = await Newsletter.findByIdAndUpdate({ _id: id }, req.body, { runValidators: true }).exec();

            newsletter.category = category;
            newsletter.title = title;
            newsletter.message = message;

            return res.json(newsletter);

        } catch (error) {
            return res.status(404).send(error);
        }
    },

    async delete(req, res) {
        const { id } = req.params;

        try {
            const newsletter = await Newsletter.findByIdAndDelete({ _id: id });

            return res.json(newsletter)

        } catch (error) {
            return res.status(404).send(error);
        }
    }
}
