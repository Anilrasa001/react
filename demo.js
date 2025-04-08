
let blogheading =React.createElement('h1',{},"React is Fun");
let blogroot=document.getElementById('blogroot');
let root=ReactDOM.createRoot(blogroot);
root.render(blogheading)

let blogheading1 =React.createElement('h2',{},"React is agian Fun");
let blogroot1=document.getElementById('blogroot');
let root1=ReactDOM.createRoot(blogroot1);
root1.render(blogheading1)




let wrapper=React.createElement('div',{},[blogheading,blogheading1]);
let blogroot2=document.getElementById('blogroot');
let root2=ReactDOM.createRoot(blogroot2);

root2.render(wrapper);




