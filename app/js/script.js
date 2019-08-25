$(document).ready(function () {
    'use strict';
    
    var pattern_animation = new TimelineMax();
    var rect = $(".pattern-rect");
    var cir = $(".pattern-cir");
    var cir_2 = $(".pattern-cir-2");
    var cir_3 = $(".pattern-cir-3");

    pattern_animation
        .to(rect, 3, {rotation:360, repeat:-1, transformOrigin:"50% 50%", ease:Linear.easeNone});
    pattern_animation
        .to(cir, 1, {
            scale: 1.5, opacity: 1, repeat: -1, transformOrigin: "50% 50%", ease:Linear.easeNone, yoyo: true,
        })
        .to(cir_2, 1, {
            scale: 1.5, repeat: -1, transformOrigin: "50% 50%", ease:Linear.easeNone, yoyo: true,
        },".5")
        .to(cir_3, 1, {
            scale: 1.5, repeat: -1, transformOrigin: "50% 50%", ease:Linear.easeNone, yoyo: true,
        },".5");

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


// $('#Path').wavify({
//   height: 20,
//   bones: 15,
//   speed: .15
// });

// $('#Path-Copy').wavify({
//   height: 20,
//   bones: 5,
//   amplitude: 50,
//   speed: .3
// });
// $('#Path-Copy-2').wavify({
//   height: 20,
//   bones: 5,
//   amplitude: 50,
//   speed: .3
// });
// $('#Path-Copy-3').wavify({
//   height: 20,
//   bones: 5,
//   amplitude: 50,
//   speed: .3
// });

});
