'use strict';

function afterTwoSecs(text, callback) {
    setTimeout(function() {
        console.log(text)
        callback()
    }, 2000); 
};

afterTwoSecs("Hello", function() {
    afterTwoSecs("Hello twice", function() {
        afterTwoSecs("Goodbya!", function() {})
    })
});

function serie(n, funcToExecute, callback) {
    if (n == 0) {
        callback()
        return
    }
    n = n - 1
    funcToExecute("text" + n, function() {
        serie(n, funcToExecute, callback);
    });
};

serie(5, afterTwoSecs, function() {
    console.log("End")
});


