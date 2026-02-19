// TABLA REAL ISOTANQUE
const tabla = [
  { mm: 0, m3: 0 },
  { mm: 2, m3: 4.2 },
  { mm: 50, m3: 75.6 },
  { mm: 100, m3: 213.36 },
  { mm: 200, m3: 608.16 },
  { mm: 300, m3: 1119.72 },
  { mm: 400, m3: 1720.32 },
  { mm: 500, m3: 2394.84 },
  { mm: 600, m3: 3129 },
  { mm: 700, m3: 3913.56 },
  { mm: 800, m3: 4739.28 },
  { mm: 880, m3: 5423.04 },
  { mm: 900, m3: 5596.92 },
  { mm: 1000, m3: 6479.76 },
  { mm: 1060, m3: 7019.04 },
  { mm: 1100, m3: 7381.08 },
  { mm: 1200, m3: 8293.32 },
  { mm: 1300, m3: 9209.76 },
  { mm: 1400, m3: 10124.52 },
  { mm: 1500, m3: 11030.88 },
  { mm: 1600, m3: 11922.12 },
  { mm: 1700, m3: 12790.68 },
  { mm: 1800, m3: 13629 },
  { mm: 1900, m3: 14430.36 },
  { mm: 2000, m3: 15185.52 },
  { mm: 2100, m3: 15884.4 },
  { mm: 2200, m3: 16515.24 },
  { mm: 2300, m3: 17063.76 },
  { mm: 2360, m3: 17334.32 },
  { mm: 2400, m3: 17508.12 },
  { mm: 2410, m3: 17556 }
];

// INTERPOLACIÓN LINEAL ENTRE PUNTOS
function interpolar(mm) {
  if (mm === "" || isNaN(mm)) return null;

  mm = Number(mm);

  if (mm <= tabla[0].mm) return tabla[0].m3;
  if (mm >= tabla[tabla.length - 1].mm) return tabla[tabla.length - 1].m3;

  for (let i = 0; i < tabla.length - 1; i++) {
    let a = tabla[i];
    let b = tabla[i + 1];

    if (mm >= a.mm && mm <= b.mm) {
      let ratio = (mm - a.mm) / (b.mm - a.mm);
      return a.m3 + ratio * (b.m3 - a.m3);
    }
  }
}

// CÁLCULO AUTOMÁTICO
function actualizar() {
  let A = document.getElementById("nivelA").value;
  let B = document.getElementById("nivelB").value;

  let m3A = interpolar(A);
  let m3B = interpolar(B);

  document.getElementById("m3A").textContent =
    m3A !== null ? `Equivalente: ${m3A.toFixed(2)} m³` : "—";

  document.getElementById("m3B").textContent =
    m3B !== null ? `Equivalente: ${m3B.toFixed(2)} m³` : "—";

  if (m3A !== null && m3B !== null) {
    let total = Math.abs(m3A - m3B);
    document.getElementById("resultado").textContent =
      `Total descargado: ${total.toFixed(2)} m³`;
  } else {
    document.getElementById("resultado").textContent =
      "Total descargado: —";
  }
}

// EVENTOS
document.getElementById("nivelA").addEventListener("input", actualizar);
document.getElementById("nivelB").addEventListener("input", actualizar);
