const router = require('express').Router();
const EsteiraController = require('../controllers/esteiraController');
const FornoController = require('../controllers/fornoController');
const FlowPackController = require('../controllers/flowpackController');

router.get('/esteira/c', EsteiraController.count);
router.get('/esteira/', EsteiraController.index);
router.get('/esteira/:id', EsteiraController.show);

router.get('/forno/c', FornoController.count);
router.get('/forno/', FornoController.index);
router.get('/forno/:id', FornoController.show);

router.get('/flowpack/c', FlowPackController.count);
router.get('/flowpack/', FlowPackController.index);
router.get('/flowpack/:id', FlowPackController.show);

router.use('/*', (req,res)=>{ res.send({ message: 'Hello stranger!'})} );

module.exports = router;    