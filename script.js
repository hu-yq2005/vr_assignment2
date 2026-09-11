"use strict"
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    
    // Left arm
    context.beginPath();

    context.moveTo(170, 285);

    context.quadraticCurveTo(
        140, 320,
        150, 370
    );

    context.strokeStyle = "#D6A23A";
    context.lineWidth = 18;
    context.lineCap = "round";

    context.stroke();
    
    // Right arm
    context.beginPath();

    context.moveTo(330, 285);

    context.quadraticCurveTo(
        360, 320,
        350, 370
    );

    context.strokeStyle = "#D6A23A";
    context.lineWidth = 18;
    context.lineCap = "round";

    context.stroke();
    
        // Left leg
    context.beginPath();

    context.moveTo(215, 420);
    context.lineTo(210, 470);

    context.strokeStyle = "#D6A23A";
    context.lineWidth = 20;
    context.lineCap = "round";

    context.stroke();
    
    // Right leg
    context.beginPath();

    context.moveTo(285, 420);
    context.lineTo(290, 470);

    context.strokeStyle = "#D6A23A";
    context.lineWidth = 20;
    context.lineCap = "round";

    context.stroke();
    
    //body
	context.beginPath();
	context.ellipse(
        250, 300,
        90, 140,
        0,
        0,
        2 * Math.PI
    );
    context.fillStyle = "#D6A23A";
	context.fill();
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
    
        //left ear
    context.beginPath();

    context.moveTo(155, 125);
    context.lineTo(110, 105);
    context.lineTo(135, 150);

    context.closePath();

    context.fillStyle = "#D6A23A";
    context.fill();

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
    
    // Right ear
    context.beginPath();

    context.moveTo(345, 125);
    context.lineTo(390, 105);
    context.lineTo(365, 150);

    context.closePath();

    context.fillStyle = "#D6A23A";
    context.fill();

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
    
    // Left horn
    context.beginPath();

    context.moveTo(180, 85);

    context.quadraticCurveTo(
        180, 45,
        200, 30
    );

    context.quadraticCurveTo(
        215, 50,
        215, 85
    );

    context.closePath();

    context.fillStyle = "#F5E6C8";
    context.fill();

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
    
    // Right horn
    context.beginPath();

    context.moveTo(285, 85);

    context.quadraticCurveTo(
        285, 50,
        300, 30
    );

    context.quadraticCurveTo(
        320, 45,
        320, 85
    );

    context.closePath();

    context.fillStyle = "#F5E6C8";
    context.fill();

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();

    // Belly
    context.beginPath();

    context.ellipse(
        250, 330,
        55, 85,
        0,
        0,
        2 * Math.PI
    );

    context.fillStyle = "#F2D28B";
    context.fill();
    
    
    // Left hand
    context.beginPath();

    context.ellipse(
        150, 370,
        14, 14,
        0,
        0,
        2 * Math.PI
    );

    context.fillStyle = "#F2D28B";
    context.fill();

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();


    // Right hand
    context.beginPath();

    context.ellipse(
        350, 370,
        14, 14,
        0,
        0,
        2 * Math.PI
    );

    context.fillStyle = "#F2D28B";
    context.fill();

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
    
    // Head
    context.beginPath();
    context.moveTo(185, 80);
    context.lineTo(225, 70);
    context.quadraticCurveTo(
        250, 65,
        275, 70
    );
    context.lineTo(315, 80);
    context.lineTo(345, 120);
    context.quadraticCurveTo(
        360, 165,
        335, 210
    );
    context.lineTo(300, 250);
    context.quadraticCurveTo(
        250, 270,
        200, 250
    );
    context.lineTo(165, 210);
    context.quadraticCurveTo(
        140, 165,
        155, 120
    );
    context.lineTo(185, 80);

    context.closePath();

    context.fillStyle = "#D6A23A";
    context.fill();

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
    
    // Inner left ear
    context.beginPath();

    context.moveTo(145, 125);
    context.lineTo(120, 113);
    context.lineTo(136, 140);

    context.closePath();

    context.fillStyle = "#F2B6B6";
    context.fill();
    
    // Inner right ear
    context.beginPath();

    context.moveTo(355, 125);
    context.lineTo(380, 113);
    context.lineTo(364, 140);

    context.closePath();

    context.fillStyle = "#F2B6B6";
    context.fill();
    
    // Left eye - white part
    context.beginPath();

    context.ellipse(
        210, 150,
        22, 28,
        0,
        0,
        2 * Math.PI
    );

    context.fillStyle = "white";
    context.fill();

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
    
    // Left pupil
    context.beginPath();

    context.ellipse(
        210, 153,
        8, 12,
        0,
        0,
        2 * Math.PI
    );

    context.fillStyle = "black";
    context.fill();
    
    // Right eye - white part
    context.beginPath();

    context.ellipse(
        290, 150,
        22, 28,
        0,
        0,
        2 * Math.PI
    );

    context.fillStyle = "white";
    context.fill();

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();


    // Right pupil
    context.beginPath();

    context.ellipse(
        290, 153,
        8, 12,
        0,
        0,
        2 * Math.PI
    );

    context.fillStyle = "black";
    context.fill();
    
    // Muzzle
    context.beginPath();

    context.ellipse(
        250, 220,
        60, 38,
        0,
        0,
        2 * Math.PI
    );

    context.fillStyle = "#F2B6B6";
    context.fill();

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
    
    // Left nostril
    context.beginPath();

    context.ellipse(
        230, 215,
        6, 4,
        0,
        0,
        2 * Math.PI
    );

    context.fillStyle = "black";
    context.fill();
    
    // Right nostril
    context.beginPath();

    context.ellipse(
        270, 215,
        6, 4,
        0,
        0,
        2 * Math.PI
    );

    context.fillStyle = "black";
    context.fill();
    
    // Mouth
    context.beginPath();

    context.moveTo(230, 235);
    context.lineTo(270, 235);

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
    
    // Left eyebrow
    context.beginPath();

    context.moveTo(185, 115);
    context.quadraticCurveTo(
        205, 100,
        225, 115
    );

    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();
    
    // Right eyebrow
    context.beginPath();

    context.moveTo(275, 115);
    context.quadraticCurveTo(
        295, 100,
        315, 115
    );

    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();