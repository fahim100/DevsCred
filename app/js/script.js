$(document).ready(function () {
    'use strict';

    $(".hero-background-pattern").append('<svg width="1330" height="577" viewBox="0 0 1317 577" fill="none"><g opacity="0.468657"><rect class="pattern-rect" opacity="0.366815" x="108.071" y="19.4142" width="8" height="8" transform="rotate(45 108.071 19.4142)"fill="white" fill-opacity="0.01" stroke="white" stroke-width="2" /><rect class="pattern-rect" opacity="0.366815" x="319.071" y="287.414" width="8" height="8" transform="rotate(45 319.071 287.414)"fill="white" fill-opacity="0.01" stroke="white" stroke-width="2" /><rect class="pattern-rect" opacity="0.366815" x="820.071" y="563.414" width="8" height="8" transform="rotate(45 820.071 563.414)"fill="white" fill-opacity="0.01" stroke="white" stroke-width="2" /><rect class="pattern-rect" opacity="0.366815" x="283.071" y="154.414" width="5" height="5" transform="rotate(45 283.071 154.414)"fill="white" fill-opacity="0.01" stroke="white" stroke-width="2" /><path class="pattern-cir" opacity="0.464681"d="M7.5 160C11.6421 160 15 156.642 15 152.5C15 148.358 11.6421 145 7.5 145C3.35786 145 0 148.358 0 152.5C0 156.642 3.35786 160 7.5 160Z"fill="white" /><path class="pattern-cir-2" opacity="0.366815"d="M124 273C124 275.209 122.209 277 120 277C117.791 277 116 275.209 116 273C116 270.791 117.791 269 120 269C122.209 269 124 270.791 124 273Z"fill="white" fill-opacity="0.01" stroke="white" stroke-width="2" /><path class="pattern-cir-3" opacity="0.366815"d="M1134 27C1134 29.2091 1132.21 31 1130 31C1127.79 31 1126 29.2091 1126 27C1126 24.7909 1127.79 23 1130 23C1132.21 23 1134 24.7909 1134 27Z"fill="white" fill-opacity="0.01" stroke="white" stroke-width="2" /><path opacity="0.464681"d="M1311.5 163C1314.54 163 1317 160.538 1317 157.5C1317 154.462 1314.54 152 1311.5 152C1308.46 152 1306 154.462 1306 157.5C1306 160.538 1308.46 163 1311.5 163Z"fill="white" /><path class="pattern-cir" opacity="0.464681"d="M191 419C193.761 419 196 416.761 196 414C196 411.239 193.761 409 191 409C188.239 409 186 411.239 186 414C186 416.761 188.239 419 191 419Z"fill="white" /><path class="pattern-cir-4" opacity="0.464681"d="M1236.5 434C1240.64 434 1244 430.642 1244 426.5C1244 422.358 1240.64 419 1236.5 419C1232.36 419 1229 422.358 1229 426.5C1229 430.642 1232.36 434 1236.5 434Z"fill="white" /><path class="pattern-cir-5" opacity="0.366815"d="M1155 221.5C1155 225.09 1152.09 228 1148.5 228C1144.91 228 1142 225.09 1142 221.5C1142 217.91 1144.91 215 1148.5 215C1152.09 215 1155 217.91 1155 221.5Z"fill="white" fill-opacity="0.01" stroke="white" stroke-width="2" /><path opacity="0.464681"d="M1044 382C1046.76 382 1049 379.761 1049 377C1049 374.239 1046.76 372 1044 372C1041.24 372 1039 374.239 1039 377C1039 379.761 1041.24 382 1044 382Z"fill="white" /><path opacity="0.366815"d="M580 514C580 516.209 578.209 518 576 518C573.791 518 572 516.209 572 514C572 511.791 573.791 510 576 510C578.209 510 580 511.791 580 514Z"fill="white" fill-opacity="0.01" stroke="white" stroke-width="2" /><path opacity="0.464681"d="M810 101C811.657 101 813 99.6569 813 98C813 96.3431 811.657 95 810 95C808.343 95 807 96.3431 807 98C807 99.6569 808.343 101 810 101Z"fill="white" /><path opacity="0.464681"d="M51 365C52.6569 365 54 363.657 54 362C54 360.343 52.6569 359 51 359C49.3431 359 48 360.343 48 362C48 363.657 49.3431 365 51 365Z"fill="white" /><path opacity="0.366815"d="M689 3C689 4.10457 688.105 5 687 5C685.895 5 685 4.10457 685 3C685 1.89543 685.895 1 687 1C688.105 1 689 1.89543 689 3Z"fill="white" fill-opacity="0.01" stroke="white" stroke-width="2" /><path opacity="0.464681"d="M191 419C193.761 419 196 416.761 196 414C196 411.239 193.761 409 191 409C188.239 409 186 411.239 186 414C186 416.761 188.239 419 191 419Z"fill="white" /><path opacity="0.366815"d="M408 25C408 27.2091 406.209 29 404 29C401.791 29 400 27.2091 400 25C400 22.7909 401.791 21 404 21C406.209 21 408 22.7909 408 25Z"fill="white" fill-opacity="0.01" stroke="white" stroke-width="2" /></g></svg>');

    
    var pattern_animation = new TimelineMax();
    var rect = $(".pattern-rect");
    var cir = $(".pattern-cir");
    var cir_2 = $(".pattern-cir-2");
    var cir_3 = $(".pattern-cir-3");
    var cir_4 = $(".pattern-cir-4");
    var cir_5 = $(".pattern-cir-5");

    pattern_animation
        .to(rect, 3, {rotation:360, repeat:-1, transformOrigin:"50% 50%", ease:Linear.easeNone});
    pattern_animation
        .fromTo(cir, 1, 
            { opacity: 0 },
            { scale: 1.5, opacity: .5, repeat: -1, transformOrigin: "50% 50%", ease:Linear.easeNone, yoyo: true })
        .fromTo(cir_4, 1, 
            { opacity: .5, scale: 1.2 },
            { scale: 1, opacity: 0, repeat: -1, transformOrigin: "50% 50%", ease:Linear.easeNone, yoyo: true },"+=1")
        .fromTo(cir_5, 1, 
            { opacity: .2, y: 0 },
            { y: 20, opacity: .5, repeat: -1, ease:Linear.easeNone, yoyo: true },"+=1")
        .to(cir_2, 1, {
            scale: 1.5, repeat: -1, transformOrigin: "50% 50%", ease:Linear.easeNone, yoyo: true,
        },"+=.5")
        .to(cir_3, 1, {
            scale: 1.5, repeat: -1, transformOrigin: "50% 50%", ease:Linear.easeNone, yoyo: true,
        },"+=.5");

});

$(document).ready(function () {
    
/*
*   Wavify - https://codepen.io/peacepostman/pen/jBavvN
*   Jquery Plugin to make some nice waves
*/
(function ( $ ) {

    $.fn.wavify = function( options ) {

        //  Options
        //
        var settings = $.extend({
            container: options.container ? options.container : 'body',
            // Height of wave
            height: 100,
            // Amplitude of wave
            amplitude: 100,
            // Animation speed
            speed: .15,
            // Total number of articulation in wave
            bones: 7,
            // Color
            color: 'rgba(255,255,255, 0.20)'
        }, options );

        var wave = this,
            width = $(settings.container).width(),
            height = $(settings.container).height(),
            points = [],
            lastUpdate,
            totalTime = 0;

        //  Set color
        //
        TweenLite.set(wave, {attr:{fill: settings.color}});


        function drawPoints(factor) {
            var points = [];

            for (var i = 0; i <= settings.bones; i++) {
                var x = i/settings.bones * width;
                var sinSeed = (factor + (i + i % settings.bones)) * settings.speed * 100;
                var sinHeight = Math.sin(sinSeed / 100) * settings.amplitude;
                var yPos = Math.sin(sinSeed / 100) * sinHeight  + settings.height;
                points.push({x: x, y: yPos});
            }

            return points;
        }

        function drawPath(points) {
            var SVGString = 'M ' + points[0].x + ' ' + points[0].y;

            var cp0 = {
                x: (points[1].x - points[0].x) / 2,
                y: (points[1].y - points[0].y) + points[0].y + (points[1].y - points[0].y)
            };

            SVGString += ' C ' + cp0.x + ' ' + cp0.y + ' ' + cp0.x + ' ' + cp0.y + ' ' + points[1].x + ' ' + points[1].y;

            var prevCp = cp0;
            var inverted = -1;

            for (var i = 1; i < points.length-1; i++) {
                var cpLength = Math.sqrt(prevCp.x * prevCp.x + prevCp.y * prevCp.y);
                var cp1 = {
                    x: (points[i].x - prevCp.x) + points[i].x,
                    y: (points[i].y - prevCp.y) + points[i].y
                };

                SVGString += ' C ' + cp1.x + ' ' + cp1.y + ' ' + cp1.x + ' ' + cp1.y + ' ' + points[i+1].x + ' ' + points[i+1].y;
                prevCp = cp1;
                inverted = -inverted;
            }

            SVGString += ' L ' + width + ' ' + height;
            SVGString += ' L 0 ' + height + ' Z';
            return SVGString;
        }

        //  Draw function
        //
        //
        function draw() {
            var now = window.Date.now();

            if (lastUpdate) {
                var elapsed = (now-lastUpdate) / 1000;
                lastUpdate = now;

                totalTime += elapsed;

                var factor = totalTime*Math.PI;
                TweenMax.to(wave, settings.speed, {
                    attr:{
                        d: drawPath(drawPoints(factor))
                    },
                    ease: Power1.easeInOut
                });

            } else {
                lastUpdate = now;
            }

            requestAnimationFrame(draw);
        }

        //  Pure js debounce function to optimize resize method
        //
        //
        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                }, wait);
                if (immediate && !timeout) func.apply(context, args);
            };
        }

        //  Redraw for resize with debounce
        //
        var redraw = debounce(function() {
            wave.attr('d', '');
            points = [];
            totalTime = 0;
            width = $(settings.container).width();
            height = $(settings.container).height();
            lastUpdate = false;
            setTimeout(function(){
                draw();
            }, 50);
        }, 250);
        $(window).on('resize', redraw);


        //  Execute
        //
        return draw();

    };

}(jQuery));


$('#Path').wavify({
//   height: 20,
  amplitude: 100,
  bones: 10,
  speed: .4
});

$('#Path-Copy').wavify({
//   height: 20,
  bones: 8,
  amplitude: 60,
  speed: .3
});
$('#Path-Copy-2').wavify({
//   height: 20,
  bones: 6,
  amplitude: 90,
  speed: .1
});
$('#Path-Copy-3').wavify({
//   height: 20,
  bones: 4,
  amplitude: 70,
  speed: .4
});

});
