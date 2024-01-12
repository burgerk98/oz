//표는 열별로 표현했다.
const first = document.getElementById('first')
const second = document.getElementById('second')

//제목이다. 열 안에 행을 표현해주면 된다고 생각했다.
for (let i = 2; i <= 9; i++){
  const title = document.createElement('th');
  title.innerHTML = `${i}단`;

  first.appendChild(title);
}

//내용이다. 위와 같은 생각으로 짜봤다.
//하지만 이런식으로 넣어도 되는지는 모르겠다.
//제목은 표현해주지 않지만, 행을 나타냈고, 그 안에 p를 삽입.
for (let i = 2; i <= 9; i++){
  const dd = document.createElement('td');

  for (let j = 1; j <= 9; j++){
    const inner = document.createElement('p');
    inner.innerHTML = `${i} x ${j} = ${i * j}`;
    dd.appendChild(inner);
  }
  second.appendChild(dd);
}





//응...? 어떻게해서된거지..?

// const gugudan = document.getElementById('gugudan')
// const num = document.getElementById('num')


// for (let i = 2; i <= 9; i++){
//   const title = document.createElement('th');
//   title.innerHTML = `${i}단`;

//   num.appendChild(title);
// }

// for (let i = 2; i <= 9; i++){
//   const title = document.createElement('td');

//   for (let j = 1; j <= 9; j++){
//     const inner = document.createElement('li');
//     inner.innerHTML = `${i} x ${j} = ${i * j}`;
//     title.appendChild(inner);
//   }
//   gugudan.appendChild(title);
// }
