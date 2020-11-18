const { Router } = require('express');
const NewsletterController = require('./controllers/newsletterController')

const routes = Router();

routes.get('/newsletter', NewsletterController.index);
routes.get('/newsletter/:id', NewsletterController.show);
routes.post('/newsletter', NewsletterController.store);
routes.put('/newsletter/:id', NewsletterController.update)
routes.delete('/newsletter/:id', NewsletterController.delete)

module.exports = routes;