document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const inventoryTable = document.getElementById('inventoryTable').querySelector('tbody');
    const inventoryRows = Array.from(inventoryTable.querySelectorAll('tr'));
  
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
  
      inventoryRows.forEach(row => {
        const item = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
        const description = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
  
        if (item.includes(searchTerm) || description.includes(searchTerm)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
