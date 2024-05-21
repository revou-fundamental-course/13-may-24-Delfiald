// Display Luas or Keliling
var btn_luas = document.getElementById("btn-luas");
var btn_keliling = document.getElementById("btn-keliling");
var luas = document.getElementById("luas");
var keliling = document.getElementById("keliling");
btn_luas.addEventListener('click', ()=>{
    luas.style.display='block';
    keliling.style.display='none';
    btn_luas.classList.remove('not-active');
    btn_keliling.classList.add('not-active');
});
btn_keliling.addEventListener('click', ()=>{
    keliling.style.display='block';
    luas.style.display='none';
    btn_keliling.classList.remove('not-active');
    btn_luas.classList.add('not-active');
});

// Calc Luas
document.getElementById("hitung-luas").addEventListener("click", function(){
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  if (isNaN(alas) || isNaN(tinggi)) {
    return;
  }
  var hasil = (alas * tinggi) / 2;
  document.getElementById("result-luas").innerHTML = `
      <p>L = 1/2 x a x t</p>
      <p>L = 1/2 x ${alas} x ${tinggi}</p>
      <p>L = ${hasil}</p>
  `;
});

// Calc Keliling
document.getElementById("hitung-keliling").addEventListener("click", function(){
  const s1 = parseFloat(document.getElementById("sisi1").value);
  const s2 = parseFloat(document.getElementById("sisi2").value);
  const s3 = parseFloat(document.getElementById("sisi3").value);
  if (isNaN(alas) || isNaN(tinggi)) {
    return;
  }
  var hasil = s1 + s2 + s3;
  document.getElementById("result-keliling").innerHTML = `
      <p>K = S1 + S2 + S3</p>
      <p>K = ${s1} + ${s2} + ${s3}</p>
      <p>K = ${hasil}</p>
  `;
});

// Prevent Page to trying send or refresh
document.getElementById('insert-calc').addEventListener('submit', function(event) {
  event.preventDefault();
});

document.getElementById('insert-calc2').addEventListener('submit', function(event) {
  event.preventDefault();
});