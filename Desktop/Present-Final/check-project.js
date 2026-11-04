const fs = require('fs');
const path = require('path');

// پوشه‌هایی که باید نادیده گرفته شوند
const ignoredDirs = ['node_modules', '.git', '.vscode'];

function printTree(dir, prefix = '') {
  let files;
  try {
    files = fs.readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    console.log(prefix + '❌ خطا در خواندن پوشه: ' + dir);
    return;
  }

  files = files.filter(file => !ignoredDirs.includes(file.name));

  files.forEach((file, index) => {
    const isLast = index === files.length - 1;
    const pointer = isLast ? '└── ' : '├── ';
    console.log(prefix + pointer + file.name);

    if (file.isDirectory()) {
      const extension = isLast ? '    ' : '│   ';
      printTree(path.join(dir, file.name), prefix + extension);
    }
  });
}

console.log('📂 ساختار درختی پروژه اوانو (Ewano B2B Deck):\n');
console.log('.');
printTree(process.cwd());
console.log('\n✅ بررسی ساختار به پایان رسید.');