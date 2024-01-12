const gugudan = document.getElementById('gugudan')

for (let i = 2; i <= 9; i++){
  const title = document.createElement('div');
  title.innerHTML = `<br/>${i}단`;

  for (let j = 1; j <= 9; j++){
    const inner = document.createElement('p');
    inner.innerHTML = `${i} x ${j} = ${i * j}`;
    title.appendChild(inner);
  }
  gugudan.appendChild(title);
}
