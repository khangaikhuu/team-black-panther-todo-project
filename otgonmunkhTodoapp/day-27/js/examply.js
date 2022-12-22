console.log("examply");
const newDiv = document.createElement("h1");
const twice = document.createElement("p");

const newContent = document.createTextNode("Манай сайтад тавтай морил ");
const text = document.createTextNode("Намайг Отгоо гэдэг асуух зүйлээ үлдээн үү");

newDiv.appendChild(newContent);
newDiv.appendChild(text);
const main = document.getElementsByTagName("main");
main[0].appendChild(newDiv);

newDiv.style.color = "blue";