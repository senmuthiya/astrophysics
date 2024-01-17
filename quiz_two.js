
        // var b = 0;
        // b++;
        // var c = 6;
        // c--;

        var text001 = ["<text>The sun is made mostly from what element?(Ans)</text><text onmousedown=cq001(this)>Hydrogen | </text><text onmousedown=iq001(this)> Helium | Nitrogen </text>",

        "<text>What is the process that powers stars? (Ans)</text><text onmousedown=cq001(this)>Nuclear Fusion | </text><text onmousedown=iq001(this)> Nuclear Fission | Quantum Tunneling </text>",

        "<text>The final stage for the most massive stars is either a massive explosion known as a supernova or gravitational collapse into a ... (Ans) </text><text onmousedown=iq001(this)>Red Giant | Nebula |</text><text onmousedown=cq001(this)> Black Hole </text>",

        "<text>The Kepler space telescope has found more what than any other telescope? (Ans) </text><text onmousedown=iq001(this)>Asteroids | Quasars |</text><text onmousedown=cq001(this)> Exoplanets</text>",

        "<text>A planet that does not orbit any star, instead wandering through the galaxy alone, is called what? (Ans) </text><text onmousedown=iq001(this)>A templar | A planetar |</text><text onmousedown=cq001(this)> A rogue planet</text>",

        ];
        var random001 = Math.floor(Math.random() * text001.length);

        
       question001.innerHTML = text001[random001];

        function cq001(x) {
            // score001.innerHTML = b;
            // if (b > 0) {
                disappear001.innerHTML = "";
                message001.innerHTML = "<font id=green001>Correct.</font>";
                // message002.innerHTML = "Yesterday was <font id=green001>windy</font>, and today was beautiful.";
                next001.innerHTML = "<button onclick=repeat001()>Click for next quiz</button>";
            // }
        }

        function iq001(x) {
            // attempts001.innerHTML = c--;
            // if (c < 0) {
                disappear001.innerHTML = "";
                message001.innerHTML = "<font id=orange001>Incorrect.</font";
                // message002.innerHTML = "Yesterday was <font id=orange001>windy</font>, and today was beautiful.";
                // next001.innerHTML = "<button onclick=repeat001()>CLICK FOR NEXT QUESTION</button>";
            // }
        }

        // function cq002(x) {
        //     // score001.innerHTML = b;
        //     // if (b > 0) {
        //         disappear001.innerHTML = "";
        //         message001.innerHTML = "Correct.";
        //         // message002.innerHTML = "I love <font id=green001>cheese</font>, and I don't mind eating it everyday.";
        //         next001.innerHTML = "<button onclick=repeat001()>Next</button>";
        //     // }
        // }

        // function iq002(x) {
        //     // attempts001.innerHTML = c--;
        //     // if (c < 0) {
        //         disappear001.innerHTML = "";
        //         message001.innerHTML = "Incorrect.";
        //         // message002.innerHTML = "I love <font id=orange001>cheese</font>, and I don't mind eating it everyday.";
        //         next001.innerHTML = "<button onclick=repeat001()>Next</button>";
        //     // }
        // }

        // function cq003(x) {
        //     // score001.innerHTML = b;
        //     // if (b > 0) {
        //         disappear001.innerHTML = "";
        //         message001.innerHTML = "Correct.";
        //         // message002.innerHTML = "Where were you last <font id=green001>night</font>?";
        //         next001.innerHTML = "<button onclick=repeat001()>Next</button>";
        //     // }
        // }

        // function iq003(x) {
        //     // attempts001.innerHTML = c--;
        //     // if (c < 0) {
        //         disappear001.innerHTML = "";
        //         message001.innerHTML = "Incorrect.";
        //         // message002.innerHTML = "Where were you last <font id=orange001>night</font>?";
        //         next001.innerHTML = "<button onclick=repeat001()>Next </button>";
        //     // }
        // }

        function repeat001() {
            location.reload();
        }
 