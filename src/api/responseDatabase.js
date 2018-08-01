function getMessage(messageLarge) {
  var temp = messageLarge;
  switch (temp.toUpperCase()) {
    case "HI":
      return "Sup man";
      break;
    case "BYE":
      return "Bye man, you wont be missed HOHOHOHOHOHOHOHOHOHOHO!";
      break;
    case "HI BOSS":
      return "I will recruit you!, wait for my news";
      break;
    default:
      return "I dont know what are you talking about :( ";
      break;
  }
}
