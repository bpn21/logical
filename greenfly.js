var day = new Array;
var mature = new Array;
var child = new Array;
var mature = 0, child = 0;
day[0] = {
    mature: 0,
    child: 0
}
day[1] = {
    mature: 1,
    child: 8
}

for (i = 2; i <= 7; i++) {

    child[i] =
        day[i] = {
            mature: mature[i] = day[i - 1].mature,
            child: child[i] = (day[i - 1].child + day[i - 1].mature * 8)
        }
    console.log("day ", i, " ", "mature", day[i].mature, "child", day[i].child)
}

for (i = 8; i <= 14; i++) {

    child[i] =
        day[i] = {
            mature: mature[i] = day[i - 1].mature + day[i - 7].child - day[i - 8].child,
            child: child[i] = day[i - 7].child * 8 + day[i - 1].child
        }
    console.log("day ", i, " ", "mature", day[i].mature, "child", day[i].child)
    console.log("Total = ", day[i].mature + day[i].child)
}
for (i = 15; i <= 21; i++) {

    child[i] =
        day[i] = {
            mature: mature[i] = day[i - 1].mature + day[i - 7].child - day[i - 8].child,
            child: child[i] = day[i - 7].child * 8 + day[i - 1].child + 8
        }
    console.log("day ", i, " ", "mature", day[i].mature, "child", day[i].child)
    console.log("Total = ", day[i].mature + day[i].child)
}

for (i = 22; i <= 28; i++) {
    child[i] =
        day[i] = {
            mature: mature[i] = day[i - 1].mature + day[i - 7].child - day[i - 8].child ,
            child: child[i] = day[i - 7].child * 8 + day[i - 1].child
        }
    console.log("day ", i, " ", "mature", day[i].mature, "child", day[i].child)
    console.log("Total = ", day[i].mature + day[i].child)
}
