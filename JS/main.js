//var about = '<div id="about"><h1>What\'s It About?</h1></div>';

// function changeText()
// {
//     document.getElementById('main').innerHTML = about;
// }
// document.getElementById('a1').onclick = function() {changeText()};



$(document).ready(function(){
    $("#welcome-btn").click(function(){
        $("#welcome-btn").toggle();
        $("#main-div").toggle();
    });
    $("#a1").click(function(){
        $("#main").load("HTML/about.html");
    });
    $("#a2").click(function(){
        $("#main").load("HTML/teach.html");
    });
    $("#a3").click(function(){
        $("#main").load("HTML/about-bryan.html");
    });
    $("#a4").click(function(){
        $("#main").load("HTML/teaching-philosophy.html");
    });
    $("#a5").click(function(){
        $("#main").load("HTML/whole-music.html");
    });
    $("#a6").click(function(){
        $("#main").load("HTML/studios.html");
    });
    $("#a7").click(function(){
        $("#main").load("HTML/student-success.html");
    });
    $("#a8").click(function(){
        $("#main").load("HTML/contact.html");
    });
    $("#p1").click(function(){
        $("#main").load("HTML/lesson-tracks.html");
    });
    $("#p2").click(function(){
        $("#main").load("HTML/studio-operation.html");
    });
    $("#p3").click(function(){
        $("#main").load("HTML/attendance.html");
    });
    $("#p4").click(function(){
        $("#main").load("HTML/rates.html");
    });
    $("#p5").click(function(){
        $("#main").load("HTML/scheduling.html");
    });
    $("#o1").click(function(){
        $("#main").load("HTML/composing.html");
    });
    $("#o2").click(function(){
        $("#main").load("HTML/voice-lessons.html");
    });
    $("#o3").click(function(){
        $("#main").load("HTML/ukulele-lessons.html");
    });
    $("#f1").click(function(){
        $("#main").load("HTML/stage-band-prep.html");
    });
    $("#c").click(function(){
        $("#main").load("HTML/contact-us.html");
    });
});

//'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// const element = <div id="about"><h1>What\'s It About?</h1></div>;
// ReactDOM.render(element, document.getElementById('main'));


// let html;

// $(document).ready(function(){
//     let getView = function(view){
  
//       //let html;
  
//       $.ajax({
//         url: '../HTML/'+view+'.html',
//         async: false,
//         success: function( data ){
//           html = $.parseHTML( data.response );
//         }
//       });
  
//       return html;
  
//     }
//     //var about = getView('about');
// });



// document.getElementById('a1').onclick = document.getElementById('main').innerHTML = html;