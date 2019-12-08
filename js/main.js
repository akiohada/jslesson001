class Btn {
  constructor(n) {
    this.n = n;
  }
  _create() {
    this.elementRoot = document.getElementById("arr");
    this.btn = document.createElement("button");
    this.btn.innerHTML = this.n;
    this.elementRoot.lastElementChild.appendChild(this.btn);
    this.btn.onclick = this._handleEvent.bind(this);
  }
  _handleEvent() {
    setTimeout(() => console.log(this.n), 1000);
  }
}

function main() {
  const arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const elementRoot = document.getElementById("arr");

  const btns = arr1.map((arrRow) => {
    let container = document.createElement("div");
    elementRoot.appendChild(container);
    arrRow.map((arrColumn) => {
      let btn = new Btn(arrColumn);
      btn._create();
    })
  })

  // for (let i = 0;i < arr1.length;i++) {
  //   let container = document.createElement("div");
  //   elementRoot.appendChild(container);
  //   for (let j = 0;j < arr1[i].length;j++) {
  //     let btn = new Btn(arr1[i][j]);
  //     btn._create();
  //   }
  // }
}

main()
