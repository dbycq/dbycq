const express = require('express');
const router = express.Router();
const pool = require('https://gidktxcpudzdaqwtkeqq.supabase.co'); // 你的数据库连接

// 获取所有wiki列表
router.get('/wiki', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, title FROM wiki ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '获取wiki列表失败' });
  }
});

// 根据ID获取特定wiki内容
router.get('/wiki/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM wiki WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: '未找到指定的题目' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '获取题目内容失败' });
  }
});

module.exports = router;
