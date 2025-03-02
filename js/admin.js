document.addEventListener('DOMContentLoaded', () => {
  // Admin Login Logic (admin-login.html)
  if (document.getElementById('adminLoginForm')) {
    const loginForm = document.getElementById('adminLoginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = loginForm.username.value;
      const password = loginForm.password.value;

      // Simulate authentication (replace with server-side auth)
      if (username === 'admin' && password === 'password') {
        localStorage.setItem('isAdmin', 'true');
        window.location.href = 'admin-inventory.html';
      } else {
        loginMessage.textContent = 'Invalid username or password.';
        loginMessage.classList.add('error');
      }
    });
  }

  // Admin Inventory Logic (admin-inventory.html)
  if (document.getElementById('inventoryTable')) {
    const inventoryTable = document.getElementById('inventoryTable').querySelector('tbody');
    const logoutBtn = document.getElementById('logoutBtn');
    const inventoryMessage = document.getElementById('inventoryMessage');

    // Simulate inventory data (replace with server-side data)
    const inventoryData = [
      { item: 'Lawn Mower Blades', description: 'Replacement blades', quantity: 50 },
      { item: 'Trimmer Line', description: 'High-strength trimmer line', quantity: 100 },
    ];

    function loadInventory() {
      inventoryData.forEach((item, index) => {
        const row = inventoryTable.insertRow();
        row.innerHTML = `
          <td>${item.item}</td>
          <td>${item.description}</td>
          <td>${item.quantity}</td>
          <td>
            <button onclick="editItem(${index})">Edit</button>
            <button onclick="deleteItem(${index})">Delete</button>
          </td>
        `;
      });
    }

    window.editItem = function(index) {
      // Implement edit functionality
      alert(`Edit item at index ${index}`);
    };

    window.deleteItem = function(index) {
      // Implement delete functionality
      alert(`Delete item at index ${index}`);
    };

    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('isAdmin');
      window.location.href = 'admin-login.html';
    });

    if (localStorage.getItem('isAdmin') !== 'true') {
      window.location.href = 'admin-login.html';
    } else {
      loadInventory();
    }
  }
})
