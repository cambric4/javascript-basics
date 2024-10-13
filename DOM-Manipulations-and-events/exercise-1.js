const container = document.querySelector(`#container`);
const content = document.createElement(`div`);

content.classList.add('content');
content.textContent = `This is the glorious text-content!`;

container.appendChild(content);

let para = document.createElement(`p`);
para.textContent = `Hey, I am red.`;
para.style.color = 'red';
document.getElementById(`container`).appendChild(para);

let head3 = document.createElement(`h3`);
head3.textContent = `I am a blue h3.`;
head3.style.color = 'blue';
document.getElementById(`container`).appendChild(head3);

const newDiv = document.createElement(`div`);
newDiv.style.border = `thick solid black`;
newDiv.style.backgroundColor = `pink`;

const head1 = document.createElement(`h1`);
head1.textContent = `I am in a div`;

newDiv.appendChild(head1);

const para2 = document.createElement(`p`);
para2.textContent = `ME TOO!`;

newDiv.appendChild(para2);

document.body.insertBefore(newDiv, null);