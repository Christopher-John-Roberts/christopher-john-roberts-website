
(function(){
$(document).ready(function(){
	
//////////////////////////////



//demo1
//Selectors
//allow you to select and manipulate HTML element(s)

//The element Selector
//selector selects elements based on the element name
	$("#demo1button1").click(function(){
  	  $("p").hide();
	});

//The #id Selector
//The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.	
    $("#demo1button2").click(function(){
        $("#demo1id1").hide();
    });

//The .class Selector
//The jQuery class selector finds elements with a specific class.
    $("#demo1button3").click(function(){
        $(".demo1class1").hide();
    });


//demo2
//Events

//dblclick
//The dblclick() method attaches an event handler function to an HTML element.
//The function is executed when the user double-clicks on the HTML element

    $("#demo2button1").dblclick(function(){
        $(this).hide();
    });

//mouseenter()
//The mouseenter() method attaches an event handler function to an HTML element.
//The function is executed when the mouse pointer enters the HTML element:

    $("#demo2id1").mouseenter(function(){
        $(this).hide();
    });

//mouseleave()
//The mouseleave() method attaches an event handler function to an HTML element.
//The function is executed when the mouse pointer leaves the HTML element

    $("#demo2id2").mouseleave(function(){
        $(this).hide();
    });

//mousedown()
//The mousedown() method attaches an event handler function to an HTML element.
//The function is executed, when the left, middle or right mouse button is pressed down, while the mouse is over the HTML element

    $("#demo2id3").mousedown(function(){
        $(this).hide();
    });

//mouseup()
//The mouseup() method attaches an event handler function to an HTML element.

//The function is executed, when the left, middle or right mouse button is released, while the mouse is over the HTML element

    $("#demo2id4").mouseup(function(){
        $(this).hide();
    });    

//hover()

//The hover() method takes two functions and is a combination of the mouseenter() and mouseleave() methods.

//The first function is executed when the mouse enters the HTML element, and the second function is executed when the mouse leaves the HTML element:    


    $("#demo2id5").hover(function(){
        $(this).text("You entered this element!");
    },
    function(){
        $(this).text("Bye! You left this element!");
    }); 

// demo 3
// The on() Method
//The on() method attaches one or more event handlers for the selected elements
//Attach multiple event handlers to a <p> element

    $("#demo3id1").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },  
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        }, 
        click: function(){
            $(this).css("background-color", "yellow");
        }  
    });

//demo4
//effects

//hide() and show()
//$(selector).hide(speed,callback);
//$(selector).show(speed,callback);

    $("#hideMe").click(function(){
        $("#demo4id1").hide(3000);
    });
    $("#showMe").click(function(){
        $("#demo4id1").show(3000);
    });


// jQuery toggle()
//With jQuery, you can toggle between the hide() and show() methods with the toggle() method.

//Shown elements are hidden and hidden elements are shown
//$(selector).toggle(speed,callback);

    $("#toggleMe").click(function(){
        $(".toggleParagraph").toggle(1000);
    });

//jQuery fadeIn()     
//The jQuery fadeIn() method is used to fade in a hidden element
//$(selector).fadeIn(speed,callback);

    $("#fadeInDemo").click(function(){
        $("#paragraphFadeIn").fadeIn(3000);
    });


//jQuery fadeOut() Method
//The jQuery fadeOut() method is used to fade out a visible element.
// $(selector).fadeOut(speed,callback);

    $("#fadeOutDemo").click(function(){
        $("#paragraphFadeOut").fadeOut(3000);
    });


//Query fadeToggle() Method
//The jQuery fadeToggle() method toggles between the fadeIn() and fadeOut() methods.

//If the elements are faded out, fadeToggle() will fade them in.

//If the elements are faded in, fadeToggle() will fade them out.
//$(selector).fadeToggle(speed,callback);

    $("#fadeToggleDemo").click(function(){
        $("#paragraphFadeInOut").fadeToggle(3000);
    });

//jQuery fadeTo() Method
//The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1).
//$(selector).fadeTo(speed,opacity,callback);
//The required opacity parameter in the fadeTo() method specifies fading to a given opacity (value between 0 and 1).

    $("#fadeToDemo").click(function(){
        $("#paragraphFadeTo").fadeTo(3000, 0.5);
    });

//jQuery slideDown() Method
//The jQuery slideDown() method is used to slide down an element.
//$(selector).slideDown(speed,callback);

    $("#slideDownDemo").click(function(){
        $("#paragraphSlideDown").slideDown(3000);
    });

//jQuery slideUp() Method
//The jQuery slideUp() method is used to slide up an element.
//$(selector).slideUp(speed,callback);

    $("#slideUpDemo").click(function(){
        $("#paragraphSlideUp").slideUp(3000);
    });

//jQuery slideToggle() Method
//The jQuery slideToggle() method toggles between the slideDown() and slideUp() methods.

//If the elements have been slid down, slideToggle() will slide them up.

//If the elements have been slid up, slideToggle() will slide them down.

//$(selector).slideToggle(speed,callback);

    $("#slideToggleDemo").click(function(){
        $("#paragraphSlideToggle").slideToggle(3000);
    });


 //demo4
 //Animation
 //The animate() Method
//The jQuery animate() method is used to create custom animations.
//$(selector).animate({params},speed,callback);
//The required params parameter defines the CSS properties to be animated.

//By default, all HTML elements have a static position, and cannot be moved.
//To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!

    $("#annimation1").click(function(){
        $("#paragraphAnimate1").animate({left: '250px'});
        $("#paragraphAnimate1").animate({right: '250px'});
                $("#paragraphAnimate1").animate({left: '250px'});
        $("#paragraphAnimate1").animate({right: '250px'});
                $("#paragraphAnimate1").animate({left: '250px'});
        $("#paragraphAnimate1").animate({right: '250px'});
    });

 //Manipulate Multiple Properties
 
    $("#annimation2").click(function(){
        $("#paragraphAnimate2").animate({
            left: '250px',
            opacity: '0.5'
        });
    });	

//Is it possible to manipulate ALL CSS properties with the animate() method?
//Yes, almost! However, there is one important thing to remember: all property names must be camel-cased when used with the animate() method: You will need to write paddingLeft instead of padding-left, marginRight instead of margin-right, and so on. 
//Also, color animation is not included in the core jQuery library.
//If you want to animate color, you need to download the Color Animations plugin from jQuery.com.




//demo5
//Method Chaining
//allows us to run multiple jQuery commands, one after the other, on the same element(s).
//Tip: This way, browsers do not have to find the same element(s) more than once.

//To chain an action, you simply append the action to the previous action.

//The following example chains together the css(), slideUp(), and slideDown() methods. The "p1" element first changes to red, then it slides up, and then it slides down:

    $("#chainingButton1").click(function(){
        $("#demo5id1").css("color", "red").slideUp(2000).slideDown(2000);
    });



//demo6
//Get Content and Attributes

//text() - Sets or returns the text content of selected elements


    $("#demo6button1").click(function(){
        var x = $("#demo6id1").text();
        $("#demo6id2").text(x);
    });

//html() - Sets or returns the content of selected elements (including HTML markup)
    $("#demo6button2").click(function(){
       var y = $("#demo6id1").html();
       $("#demo6id3").text(y);
    });

//attr() method is used to get attribute values
    $("#demo6button3").click(function(){
       var z = $("#demo6id1").attr("class");
       $("#demo6id4").text(z);
    });




//demo7
//Set Content and Attributes

 $("#demo7button1").click(function(){
        $("#demo7id1").text("set text in this paragaph");
    });


    $("#demo7button2").click(function(){
       $("#demo7id2").html("set <b>html</b> in this paragraph");
    });

    $("#demo7button3").click(function(){
       $("#demo7id3").attr("href", "https://www.w3schools.com/jquery/");
    });    


//demo8
//Add Elements
//add new elements/content

//append() - inserts content AT THE END of the selected HTML elements

 $("#demo8button1").click(function(){
        $("#demo8id1").append(" <b>Appended text</b>.");
    });

//prepend() - inserts content AT THE BEGINNING of the selected HTML elements

 $("#demo8button2").click(function(){
        $("#demo8id2").prepend(" <b>Prepended text</b>.");
    });

//after() method inserts content AFTER the selected HTML elements.
    $("#demo8button4").click(function(){
        $("#image").after("<i>After</i>");
    });
// before() method inserts content BEFORE the selected HTML elements.

    $("#demo8button3").click(function(){
        $("#image").before("<b>Before</b>");
    });



//  demo 9

//remove() - Removes the selected element (and its child elements)

    $("#demo9button1").click(function(){
        $("#demo9id1").remove();
    });
//Filter the Elements to be Removed
//The jQuery remove() method also accepts one parameter, which allows you to filter the elements to be removed.
//The parameter can be any of the jQuery selector syntaxes.
//This example removes all <p> elements with class="test" or class="demo":  
//$("p").remove(".test, .demo");


//empty() - Removes the child elements from the selected element

    $("#demo9button2").click(function(){
        $("#demo9id2").empty();
    });




//demo10

//addClass() - Adds one or more classes to the selected elements
    $("#demo10button1").click(function(){
        $("#demo10id1, #demo10id2").addClass("blue");
        $("#demo10id3").addClass("important blue");
    });

// removeClass() - Removes one or more classes from the selected elements
    $("#demo10button2").click(function(){
        $("#demo10id4, #demo10id5").removeClass("blue");
        $("#demo10id6").removeClass("important blue");
    });

// toggleClass() - Toggles between adding/removing classes from the selected elements


    $("#demo10button3").click(function(){
        $("#demo10id7, #demo10id8, #demo10id9").toggleClass("blue");
    });




//demo 11
// css() Method
//The css() method sets or returns one or more style properties for the selected elements.

    $("#demo11button1").click(function(){
        $("#demo11id1, #demo11id2").css({"background-color": "yellow", "font-size": "200%"});
    });


//////////////////////////////

});
}());
