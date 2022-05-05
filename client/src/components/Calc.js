import React from 'react'

function Calc() {
    (function(wind, doc){
        'use strict';
    
        // All buttons
        var buttons = doc.querySelectorAll('button');
        // Display (input)
        var display = doc.querySelector('#display');
    
        // Clear display
        function clearDisplay() {
            display.value = 0;
        }
    
        // Calculates the expression
        function calc() {
            // Remove the last operator
            var operation = display.value.replace(/\D$/ig,'');
            // Replace 'x' symbol with '*' operador
            operation = operation.replace(/x/ig,'*');
            // Replace '÷' symbol with '/' operador
            operation = operation.replace(/÷/ig,'/');
            // Calculate on display
            display.value = eval(operation);
        }
    
        // Buttons loop event click
        buttons.forEach(function(btn) {
            // Button event click
            btn.addEventListener('click', function(click) {
                // Value of button
                var dataButton = this.dataset.val;
                // Check the value
                switch (dataButton) {
                    default:
                        return 'foo';
                    // Value (clear)
                    case 'clear':
                        // Clear display
                        clearDisplay();
                        break;
    
                    case '=':
                        // // Calculates the expression
                        calc();
                        break;
    
                    // Numeric value
                    case '0':		
                    case '1':		
                    case '2':		
                    case '3':		
                    case '4':		
                    case '5':		
                    case '6':		
                    case '7':		
                    case '8':		
                    case '9':	
                        // If display value is equal '0' (Update or Increment)
                        display.value != 0 ? display.value += dataButton : display.value = dataButton;
                        break;	
    
                    // Operador value
                    case '+':		
                    case '-':		
                    case '÷':		
                    case 'x':
                        // Check if display value is not equal '0' and operator is not equal '-'
                        if (display.value != 0 && display.value != '-') {
                            // Last string char
                            var lastVal = display.value.charAt(display.value.length-1);
                            // Update the last char if last equal operator
                            if (lastVal == '+' || lastVal == '-' || lastVal == '÷' || lastVal == 'x') {
                                display.value = display.value.slice(0, display.value.length-1) + dataButton;						
                            } else {
                                display.value != 0 ? display.value += dataButton : display.value = dataButton;
                            }
                            
                        } else if (dataButton == '-') {
                            
                            display.value = dataButton;
    
                        }
                        
                        break;		
                       
                }
    
                click.preventDefault();
                click.stopPropagation();
            });
    
        });
    
    }(window, document));
    
    return (
        <div className="mb-4">
            <body>

                <div class="calc-container">

                    <div class="row">
                        <input type="text" id="display" value="0" readonly="readonly" />
                    </div>

                    <div class="row">
                        <button class="number" data-val="7">7</button>
                        <button class="number" data-val="8">8</button>
                        <button class="number" data-val="9">9</button>
                        <button class="operator" data-val="÷">÷</button>
                    </div>

                    <div class="row">
                        <button class="number" data-val="4">4</button>
                        <button class="number" data-val="5">5</button>
                        <button class="number" data-val="6">6</button>
                        <button class="operator" data-vl="x">x</button>
                    </div>

                    <div class="row">
                        <button class="number" data-val="1">1</button>
                        <button class="number" data-val="2">2</button>
                        <button class="number" data-val="3">3</button>
                        <button class="operator" data-val="-">-</button>
                    </div>

                    <div class="row">
                        <button class="number" data-val="0">0</button>
                        <button class="operator" data-val="clear">CE</button>
                        <button class="operator resolv" data-val="=">=</button>
                        <button class="operator" data-val="+">+</button>
                    </div>

                </div>
            </body>
        </div>

    )
}

export default Calc