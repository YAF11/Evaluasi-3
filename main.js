//soal 1
document.write("soal 1");
document.write("<br>");
for (let y = 1; y <= 9; y++) {
  for (let x = 1; x <= 9; x++) {
    if (x == y || x == 5) {
      document.write(" ", y * 2 - 1, " ");
    } else if (x + y == 10 || y == 5) {
      document.write(" ", x * 2 - 2, " ");
    } else {
      document.write(" ", "&ensp;", " ");
    }
  }
  document.write("<br>");
}

document.write("<br>");

//soal 2
document.write("soal 2");
document.write("<br>");
for (let y = 1; y <= 9; y++) {
  for (let x = 1; x <= 9; x++) {
    if (x <= y) {
      document.write(" ", x * 2 - 1, " ");
    } else {
      document.write(" ", "&ensp;", " ");
    }
  }
  document.write("<br>");
}

document.write("<br>");

//soal 3
document.write("soal 3");
document.write("<br>");
for (let y = 1; y <= 9; y++) {
  for (let x = 1; x <= 9; x++) {
    if (x + y >= 10) {
      document.write(" ", -y * 2 + 18, " ");
    } else {
      document.write(" ", "&ensp;", " ");
    }
  }
  document.write("<br>");
}

document.write("<br>");

//soal 4
document.write("soal 4");
document.write("<br>");
for (let y = 1; y <= 9; y++) {
  for (let x = 1; x <= 9; x++) {
    if (x == y) {
      document.write(" ", y * 2 - 1, " ");
    } else if (x + y == 10) {
      document.write(" ", x * 2 - 2, " ");
    } else if (y <= x && x + y <= 10) {
      document.write("A");
    } else if (y >= x && x + y >= 10) {
      document.write("B");
    } else {
      document.write(" ", "&ensp;", " ");
    }
  }
  document.write("<br>");
}

document.write("<br>");

//soal 5
document.write("soal 5");
document.write("<br>");
for (let y = 1; y <= 9; y++) {
  for (let x = 1; x <= 9; x++) {
    if (x == y) {
      document.write(" ", y * 2 - 1, " ");
    } else if (x + y == 10) {
      document.write(" ", x * 2 - 2, " ");
    } else if (x <= y && x + y <= 10) {
      document.write("A");
    } else if (x >= y && x + y >= 10) {
      document.write("B");
    } else {
      document.write(" ", "&ensp;", " ");
    }
  }
  document.write("<br>");
}
