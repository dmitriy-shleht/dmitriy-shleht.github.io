//ракета
var fireFrontContainer = document.getElementById('fireFront');
var fireMidContainer = document.getElementById('fireMid');
var fireBackContainer = document.getElementById('fireBack');

var NPFireFront = rand(0, 10);
var arrayPFireFront = [];
var NPFireMid = rand(10, 100);
var arrayPFireMid = [];
var NPFireBack = rand(10, 100);
var arrayPFireBack = [];


while (arrayPFireFront.length < NPFireFront) {
    var fireParticle = new FireParticle('front');
    arrayPFireFront.push(fireParticle);
    fireFrontContainer.innerHTML += fireParticle.html;
}

while (arrayPFireMid.length < NPFireMid) {
    var fireParticle = new FireParticle('mid');
    arrayPFireMid.push(fireParticle);
    fireMidContainer.innerHTML += fireParticle.html;
}

while (arrayPFireBack.length < NPFireBack) {
    var fireParticle = new FireParticle('back');
    arrayPFireBack.push(fireParticle);
    fireBackContainer.innerHTML += fireParticle.html;
}

function FireParticle(type) {
    if (type === 'front') {
        this.radius = rand(1, 15);
        this.margin = this.radius / 2;
        this.spped = randInt(1, 1.5);
        this.delay = randInt(1, 2);
        this.y = randInt(0.5, 1);
        this.x = randInt(40, 60);
    } else if (type === 'mid') {
        this.radius = rand(10, 30);
        this.margin = this.radius / 2;
        this.spped = randInt(0.2, 0.6);
        this.delay = randInt(0.5, 1);
        this.y = randInt(0.25, 0.5);
        this.x = randInt(35, 65);
    } else if (type == 'back') {
        this.radius = rand(10, 40);
        this.margin = this.radius / 2;
        this.spped = randInt(0.9, 0.8);
        this.delay = randInt(0, 0.5);
        this.y = randInt(0, 0.5);
        this.x = randInt(35, 65);
    }

    this.html = '<span style="width: ' + this.radius + 'px; height: ' + this.radius + 'px; left: ' + this.x + '%; bottom: ' + this.y + '%; margin-left: -' + this.margin + 'px; animation-delay: ' + this.delay + 's;"></span>';
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randInt(min, max) {
    return Math.random() * (max - min) + min;
}