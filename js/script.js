const container = document.querySelector('.container');

reset();

for (let i = 1; i <= 100; i++) {
  const square = genSquare(i);

  // Clicca sul quadrato e con metodo stampato in console ci permetterà di vedere quante volte clicchiamo su un determinato quadrato con relativo counter
  square.addEventListener('click', function () {
    console.log(this.id);
    this.classList.toggle('checked');
  });

  container.append(square);
}

// Generatore di quadrati
function genSquare(index) {
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare.id = index;
  return newSquare;
}

// Reset della funzione

function reset() {
  container.innerHTML = '';
}
