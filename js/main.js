const p = new Perceptron(x.length);

p.fit(x,y);

let d = document.createElement('div');

d.innerText = p.predict([5.2,2.1,4.5,1.5]);

document.body.appendChild(d);
