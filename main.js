const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 静态托管当前目录下所有文件（如 index.html、css、js 等）
app.use(express.static(path.join(__dirname, '.')));

app.listen(PORT, () => {
  console.log(`服务器已启动：http://localhost:${PORT}`);
});