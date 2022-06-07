
const items1 = [
    { wins: player_count, losses: computer_count, draws: ties },
  ];
  var close = chooser.querySelector('button');
  close.addEventListener('click', function(e) {
    loadTableData(items1);
    window.close();
  });
  function loadTableData(items) {
    const table = document.getElementById("testBody");
    items.forEach( item => {
      let row = table.insertRow();
      let wins = row.insertCell(0);
      wins.innerHTML = item.wins;
      let losses = row.insertCell(1);
      losses.innerHTML = item.losses;
      let draws = row.insertCell(2);
      draws.innerHTML = item.ties;
    });
  }
  loadTableData(items1);
  loadTableData([]);