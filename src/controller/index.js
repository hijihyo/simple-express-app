const { Router } = require('express');
const { PostDAO } = require('../DAO');

const router = Router();

// GET /
// POST /
router.get('/', (req, res) => res.render('index.pug'));
router.get('/posts', async (req, res) => {
    try {
        const posts = await PostDAO.getList();
        return res.render('posts/index.pug', { posts });
    } catch (e) {
        console.error(`Error handling GET /posts: ${e}`);
    }
});

module.exports = router;