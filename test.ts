let rules: Array<string> = ["가위", "바위", "보"];

function gaBaBo(i: string, you: string) {
  //가위는 주먹한테 지고 보자기한테는 이긴다.
  //주먹은 보자기한테 지고 가위한테는 이긴다.
  //보자기는 가위한테 지고 주먹한테는 이긴다.
  //내가 이기는 경우다.
  let a: string = rules[0];
  let b: string = rules[1];
  let c: string = rules[2];

  if (i === a && you === b) {
    console.log("짐");
    return false;
  } else if (i === a && you === c) {
    console.log("이김");
    return true;
  } else if (i === b && you === a) {
    console.log("이김");
    return true;
  } else if (i === b && you === c) {
    console.log("짐");
    return false;
  } else if (i === c && you === a) {
    console.log("짐");
    return false;
  } else if (i === c && you === b) {
    console.log("이김");
    return true;
  } else if (i === you) {
    console.log("비김");
    return false;
  } else {
    console.error("다른거 쓰지마.");
  }
  return Boolean;
}
function ran() {
  const random = Math.floor(Math.random() * 3);
  return rules[random];
}
console.log(gaBaBo(ran(), ran()));
