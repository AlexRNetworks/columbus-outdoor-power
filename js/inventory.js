document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const inventoryTable = document.getElementById('inventoryTable').querySelector('tbody');
  const inventoryRows = Array.from(inventoryTable.querySelectorAll('tr'));

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    inventoryRows.forEach(row => {
      let found = false;
      const cells = row.querySelectorAll('td');

      cells.forEach(cell => {
        if (cell.textContent.toLowerCase().includes(searchTerm)) {
          found = true;
        }
      });

      if (found) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
});
