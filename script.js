window.addEventListener('load', function () {
  setInterval(myTimer, 1000);
});

function rand(min=0, max=255) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function randRGB() {
  let r = rand();
  let g = rand();
  let b = rand();  
  return `rgb(${r},${g},${b})`;
}

console.log(`rand() = ${rand()}`);

let logo = document.getElementById('logo');

function make_logo_bg() {
  let cur_col = randRGB();
  cur_col = 'black';
  for (let i = 0; i < 650; i++) {
    let dot = document.createElement('div');
    dot.id = `${i}`;
    logo.appendChild(dot);
    dot.innerText = ` `;
    dot.style.backgroundColor = `${cur_col}`;
  }
}
make_logo_bg();

function reset_logo_bg() {
  let cur_col = randRGB();
  cur_col = 'black';
  for (let i = 0; i < 650; i++) {
    let dot = document.getElementById(`${i}`);
    dot.style.backgroundColor = `${cur_col}`;
    if (dot.classList.contains('shadowed')) {
      dot.classList.remove('shadowed');
    }
  }
}

function myTimer() {
  const d = new Date();
  document.getElementById('timer').innerHTML = d.toLocaleTimeString();
  document.getElementById('timer_2').innerHTML = d.toLocaleTimeString();
}
document.getElementById('timer_2').classList.add('mirrored');
// document.getElementById('text_2').classList.add('mirrored');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Message from Javascript:\nDOMContentLoaded');

  document.body.style.margin = 0;
  document.body.style.padding = 0;
  // document.body.style.overflowX = 0;

  // let id_map = [
  //   1512, 1462, 1412, 1362, 1312, 1262, 1212, 1162, 1112, 1062, 1012, 962, 912,
  //   912, 961, 1010, 1059, 1108, 1157, 1206, 1255, 1304, 1353, 1402, 1451, 1500,
  //   1452, 1404, 1356, 1308, 1260, 1212, 1164, 1116, 1068, 1020, 972, 924,
  //   924, 974, 1024, 1074, 1124, 1174, 1224, 1274, 1324, 1374, 1424, 1474, 1524,
  //   1476, 1428, 1380, 1332, 1284, 1236, 1188, 1140, 1092, 1044, 996,
  //   948, 
  //     947, 
  //   946,
  //     945,
  //   944,
  //     943,
  //   942,
  //     941,
  //   940,
  //     939,
  //   938,
  //     937,
  //   936,

  //   986, 1036, 1086, 1136, 1186, 1236, 1286, 1336, 1386, 1436, 1486, 1536,
  //   1487, 1438, 1389, 1340, 1291, 1242, 1193, 1144, 1095, 1046, 997, 948
  // ];

  // console.log(`id_map.length = ${id_map.length}`);

  // let id_map_min = Math.min(...id_map);
  // console.log(id_map_min);
  // // let minified_id_map = id_map.slice(900, id_map.length - 1);
  // let minified_id_map = id_map.map((id)=>{
  //   return id - 900;
  // })
  // console.log(minified_id_map);

  let min_AIB_id_map = [
    612, 562, 512, 462, 412, 362, 312, 262, 212, 162, 112, 62, 12, 
    12, 61, 110, 159, 208, 257, 306, 355, 404, 453, 502, 551, 600,
    552, 504, 456, 408, 360, 312, 264, 216, 168, 120, 72, 24,
    24, 74, 124, 174, 224, 274, 324, 374, 424, 474, 524, 574, 624,
    576, 528, 480, 432, 384, 336, 288, 240, 192, 144, 96,
    48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36,
    86, 136, 186, 236, 286, 336, 386, 436, 486, 536, 586, 636,
    587, 538, 489, 440, 391, 342, 293, 244, 195, 146, 97, 48];



  function paint_j(j, cur_col) {
    // cur_col = randRGB();
    let el = document.getElementById(`${min_AIB_id_map[j]}`);
    // let el_ = document.getElementById(`${id_map[j] + 1}`);
    el.style.backgroundColor = 
    // el_.style.backgroundColor = 
    `${cur_col}`;
    el.classList.add('shadowed');
    // el_.classList.add('shadowed');
  }

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  const doSomething = async (cur_col) => {
    for (let j = 0; j < min_AIB_id_map.length; j++) {
      await sleep(100);
      paint_j(j, cur_col);
    }
  }

  let cur_col = randRGB();
  doSomething(cur_col);

  const loop_painting = setTimeout(() => {
    setInterval(function () {
      reset_logo_bg();
      let cur_col = randRGB();
      doSomething(cur_col);
    }, 12000);
  }, 1);
  // function click_handler(event) {
  //   let ET = event.target;
  //   if (ET.style.backgroundColor === 'white') {
  //     let myTimeout = setTimeout(() => {
  //       ET.style.backgroundColor = 'green';
  //     }, 500);
  //   }
  //   else {
  //     let myTimeout = setTimeout(() => {
  //       ET.style.backgroundColor = 'white';
  //     }, 500);
  //   }
  // }
  // logo.addEventListener('click', click_handler);
});