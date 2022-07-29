window.addEventListener('load', function () {
  setInterval(myTimer, 1000);
});

function myTimer() {
  const d = new Date();
  document.getElementById('timer').innerHTML = d.toLocaleTimeString();
  document.getElementById('timer_2').innerHTML = d.toLocaleTimeString();
}
document.getElementById('timer_2').classList.add('mirrored');
document.getElementById('text_2').classList.add('mirrored');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Message from Javascript:\nDOMContentLoaded');

  let logo = document.getElementById('logo');
  console.log(Math.min(parseInt(window.innerWidth), parseInt(window.innerHeight)) / 100);
  for (let i = 0; i < 2500; i++) {
    let dot = document.createElement('div');
    dot.id = `${i}`;
    logo.appendChild(dot);
    // if ((i + 1) % 50 === 0 && i !== 49 && i !== 2499) {
    //   dot.innerText = ` `;
    //   dot.style.backgroundColor = 'red';
    // }
    // else if (i % 50 === 0 && i !== 0 && i !== 2450) {
    //   dot.innerText = ` `;
    //   dot.style.backgroundColor = 'green';
    // }
    // else if (i >= 0 && i < 50) {
    //   dot.innerText = ` `;
    //   dot.style.backgroundColor = 'blue';
    // }
    // else if (i >= 2450 && i <= 2500) {
    //   dot.innerText = ` `;
    //   dot.style.backgroundColor = 'yellow';
    // }
    // else {
      dot.innerText = ` `;
      dot.style.backgroundColor = 'black';
    // }

    // if (i > 1200 && i < 1249 || i > 1250 && i < 1299 
    //   || i % 25 === 0 && i !== 25 && i % 50 !== 0 && i !== 2475
    //   || (i-1) % 25 === 0 && (i-1) !== 25 && (i-1) % 50 !== 0 && (i-1) !== 2475
    //   ) {
    //   dot.innerText = ` `;
    //   dot.style.backgroundColor = 'gray';
    // }

  }

  let id_map = [
    1512, 1462, 1412, 1362, 1312, 1262, 1212, 1162, 1112, 1062, 1012, 962, 912,
    912, 961, 1010, 1059, 1108, 1157, 1206, 1255, 1304, 1353, 1402, 1451, 1500,
    1452, 1404, 1356, 1308, 1260, 1212, 1164, 1116, 1068, 1020, 972, 924,        
    924, 974, 1024, 1074, 1124, 1174, 1224, 1274, 1324, 1374, 1424, 1474, 1524,
    1476, 1428, 1380, 1332, 1284, 1236, 1188, 1140, 1092, 1044, 996,
    948, 946, 944, 942, 940, 938, 936,
    986, 1036, 1086, 1136, 1186, 1236, 1286, 1336, 1386, 1436, 1486, 1536,
    1487, 1438, 1389, 1340, 1291, 1242, 1193, 1144, 1095, 1046, 997, 948     
  ];

  for (let j in id_map) {
    let el = document.getElementById(id_map[j]);
    let el_ = document.getElementById(`${id_map[j]+1}`);
    el.style.backgroundColor = el_.style.backgroundColor = 'white';
  }
  // let selected = [];
  // sessionStorage.setItem('selected', selected);

  function click_handler(event) {
    let ET = event.target;
    if (ET.style.backgroundColor === 'white') {
      ET.style.backgroundColor = 'green';
      // let selected = [...sessionStorage.getItem('selected')].filter((el)=>{
      //   return el !== null && !isNaN(el);
      // });
      // selected.push(ET.id);
      // sessionStorage.setItem('selected', selected);
    }
    else {
      ET.style.backgroundColor = 'white';
      // let selected = [...sessionStorage.getItem('selected')].valueOf.filter((el)=>{
      //   return el !== null && !isNaN(el);
      // });
      // selected.delete(ET.id);
      // sessionStorage.setItem('selected', selected);
    }
    // ET.removeEventListener('click');
  }

  logo.addEventListener('click', click_handler);

});


