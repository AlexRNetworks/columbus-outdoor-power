document.addEventListener('DOMContentLoaded', () => {
  // ... (Admin Login Logic - unchanged)

  // Admin Inventory Logic (admin-inventory.html)
  if (document.getElementById('inventoryTable')) {
    const inventoryTable = document.getElementById('inventoryTable').querySelector('tbody');
    const logoutBtn = document.getElementById('logoutBtn');
    const inventoryMessage = document.getElementById('inventoryMessage');
    const addItemBtn = document.getElementById('addItemBtn');

    // Simulate inventory data (replace with server-side data)
    let inventoryData = [
      { partNumber: 'PN123', item: 'Lawn Mower Blades', description: 'Replacement blades', quantity: 50 },
      { partNumber: 'PN456', item: 'Trimmer Line', description: 'High-strength trimmer line', quantity: 100 },
    ];

    function loadInventory() {
      inventoryTable.innerHTML = ''; // Clear existing rows
      inventoryData.forEach((item, index) => {
        const row = inventoryTable.insertRow();
        row.innerHTML = `
          <td>${item.partNumber}</td>
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
      inventoryData.splice(index, 1);
      loadInventory();
    };

    addItemBtn.addEventListener('click', () => {
      // Implement add item functionality
      alert('Add new item');
    });

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

  // Admin Images Logic (admin-images.html)
  if (document.getElementById('imageEditor')) {
    const heroImageInput = document.getElementById('heroImage');
    const heroPreview = document.getElementById('heroPreview');
    const saveImagesBtn = document.getElementById('saveImagesBtn');
    const imageMessage = document.getElementById('imageMessage');

    heroImageInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          heroPreview.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

    saveImagesBtn.addEventListener('click', () => {
      // Implement image saving functionality (replace with server-side upload)
      imageMessage.textContent = 'Images saved!';
      imageMessage.classList.add('success');
    });
  }
});
