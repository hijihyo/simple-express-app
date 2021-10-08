const { runQuery } = require('../lib/database');

const formatDate = date => {
    const yr = date.getFullYear();
    const mon = date.getMonth() + 1;
    const dt = date.getDate();
    const hrs = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    return `${yr}. ${mon}. ${dt} ${hrs}:${mins}:${secs}`;
};

const replaceDate = article => {
    if (article) {
        article.createdAt = formatDate(article.createdAt);
        article.lastUpdated = formatDate(article.lastUpdated);
    }
    return article;
};

// post 목록 가져오는 함수
const getList = async () => {
    const sql = 'SELECT id, title, content, created_at AS createdAt, ' +
                'last_updated AS lastUpdated, is_deleted AS isDeleted ' + 
                'FROM posts WHERE is_deleted = 0 ' +
                'ORDER BY id DESC;';
    const posts = await runQuery(sql);
    return posts.map(replaceDate);
};

module.exports = {
    getList,
};

/*

[
  TextRow {
    id: 3,
    title: '2nd Post',
    content: 'This is second post.',
    createdAt: '2021. 10. 8 22:12:49',
    lastUpdated: '2021. 10. 8 22:12:49',
    isDeleted: 0
  },
  TextRow {
    id: 2,
    title: '1st Post',
    content: 'Hello world!',
    createdAt: '2021. 10. 8 22:12:8',
    lastUpdated: '2021. 10. 8 22:12:8',
    isDeleted: 0
  }
]
*/