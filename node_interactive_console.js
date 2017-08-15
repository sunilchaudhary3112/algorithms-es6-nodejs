process.stdin.resume();
process.stdin.setEncoding('utf8');

var input_stdin ;

console.log('This is interactive console for linked list implementation');
// standard input is stored into input_stdin

process.stdin.on('data', function (data) {
    input_stdin += data;
    console.log('here');
});

// standard input is done and stored into an array
// process.stdin.on('end', function () {
//     chunks = input_stdin.split("\n");
//     console.log('test');    
// });

process.on('SIGINT', function(){
    process.stdout.write('\n end \n');
    process.exit();
});