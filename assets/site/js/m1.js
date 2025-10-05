// 渲染菜单
function renderWordMenu() {
  const container = document.getElementById('kiss-mm-menu-content');
  if (!container) return;

  let html = '';
  wordBankMenuData.forEach((group, index) => {
    html += `
      <div class="menu-group">
        <div class="menu-group-header" onclick="toggleGroup(this)">
          ${group.title}
        </div>
        <ul class="menu-group-items">
          ${group.items
            .map(
              (item) => `
            <li>
              <a href="#" class="menu-item-btn" onclick="selectWordItem('${group.folder}', '${item.id}', '${item.label}'); return false;" title="${item.label}">
                ${item.label}
              </a>
            </li>
          `
            )
            .join('')}
        </ul>
      </div>
    `;
  });
  container.innerHTML = html;
}

// 初始化：页面加载完成后渲染菜单
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderWordMenu);
} else {
  renderWordMenu();
}

function toggleWordMenu() {
  document.getElementById('kiss-mm-menu-overlay').classList.toggle('open');
}

function selectWordItem(folder, id, label) {
  // 调用你已有的 clickNode 函数
  if (typeof clickNode === 'function') {
    clickNode(folder, id, label);
  }
  // 关闭菜单
  document.getElementById('kiss-mm-menu-overlay').classList.remove('open');
}

// 点击遮罩区域关闭菜单
document.addEventListener('click', function (e) {
  const overlay = document.getElementById('kiss-mm-menu-overlay');
  const btn = document.querySelector('.hamburger-menu-btn');
  if (
    overlay.classList.contains('open') &&
    !overlay.querySelector('.kiss-mm-menu').contains(e.target) &&
    !btn.contains(e.target)
  ) {
    overlay.classList.remove('open');
  }
});

function toggleGroup(headerEl) {
  const currentGroup = headerEl.closest('.menu-group');
  const menuContainer = currentGroup.closest('.kiss-mm-menu');

  // 收起所有其他分组
  menuContainer.querySelectorAll('.menu-group').forEach((group) => {
    if (group !== currentGroup) {
      group.classList.remove('open');
    }
  });

  // 切换当前分组（展开或收起）
  currentGroup.classList.toggle('open');
}
