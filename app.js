var express = require('express');
var path = require('path');
var fs = require('fs');
const { Z_ASCII } = require('zlib');
const { count } = require('console');
var app = express();
var logedUsers = "";

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
res.render('login',{errormsg:''});
});
app.post('/',function(req,res){
  var x = req.body.username;
  var y = req.body.password;
  var db = fs.readFileSync('users.json');
  var z = JSON.parse(db);
  var flag = 0;
  if(data.users.length == 0)
    res.render('login',{errormsg:'user does not exsist'});
  else{
  for(var u=0 ; u< data.users.length ; u++){
    if(x === z.users[u].username && y === z.users[u].password){
      res.redirect('/home');
      logedUsers = z.users[u].username;
      return;
    }
    else
    flag = 1;
  }
}
if(flag == 1)
res.render('login',{errormsg:'user does not exsist'});
});

app.get('/registration',function(req,res){
  res.render('registration',{errormsg:''});
});

var data = {
  users: []
     };

  var x = JSON.stringify(data);
  fs.writeFileSync("users.json",x);

app.post('/register',function(req,res){
  var u_name = req.body.username;
  var pass_word = req.body.password;
  var readlist = [];
  var db = fs.readFileSync('users.json');
  var z = JSON.parse(db);
 

    var flag = 1;

    for(i=0;i < data.users.length;i++){
     var db = fs.readFileSync('users.json');
     var z = JSON.parse(db);

     if(u_name === z.users[i].username){
      flag =0;
      }
    }

    if (flag == 1){
       var newuser = {username:u_name,password:pass_word, readlist:readlist};
       data.users.push(newuser);
       var x =  JSON.stringify(data);
       fs.writeFileSync("users.json",x);
      res.redirect('/');
     }
     else {
      res.render('registration',{errormsg:'username exsist'})
    }
    

 });

 
app.get('/home',function(req,res){
  res.render('home');
});

app.get('/novel',function(req,res){
  res.render('novel');
});

app.get('/poetry',function(req,res){
  res.render('poetry');
});

app.get('/fiction',function(req,res){
  res.render('fiction');
});

app.get('/flies',function(req,res){
  res.render('flies');
});
app.post('/flies',function(req,res){
  res.render('flies');
});

 
app.get('/readlist',function(req,res){
  
  res.render('readlist',{y:data.users[u].readlist});
});
app.post('/readlist',function(req,res){
  
  res.render('readlist',{y:data.users[u].readlist});


});
function loop(){
  for (u=0; u<= data.users.length;){
    if(logedUsers === data.users[u].username){
      break;
    }
    else{
      u++;
    }
  }
}

app.post('/addfliestoreadlist',function(req,res){
  
  loop();

  var db = fs.readFileSync('users.json');
  var z = JSON.parse(db);
  console.log("first list ",data.users[u].readlist);
  
  var flag = 1;


  if (flag == 1){
 
  for(var c = 0; c <= data.users[u].readlist.length;c++){
  
    
  if (data.users[u].readlist[c] === "Lord of Flies"){
    flag=0;
    res.render('flies',{errormsg:'Already in your readlist'});
  }
     
  }

  if (flag==1){
  data.users[u].readlist.push("Lord of Flies");
  var x =  JSON.stringify(data);
  fs.writeFileSync("users.json",x);
  console.log("Added")
  console.log("second list ",data.users[u].readlist);
  res.render('flies',{errormsg:'Has been added to your readlist'});
  
  }
  
}
  
});
app.post('/addDuneToReadList',function(req,res){
  loop();
  var db = fs.readFileSync('users.json');
  var z = JSON.parse(db);
  console.log("first list ",data.users[u].readlist);
  var flag = 1;

  if (flag == 1){
 
  for(var c = 0; c <= data.users[u].readlist.length;c++){
  
    
  if (data.users[u].readlist[c] === "Dune"){
    flag=0;
    res.render('dune',{errormsg:'Dune is already in your readlist'});
  }
     
  }

  if (flag==1){
  data.users[u].readlist.push("Dune");
  var x =  JSON.stringify(data);
  fs.writeFileSync("users.json",x);
  console.log("Added")
  console.log("second list ",data.users[u].readlist);
  res.render('dune',{errormsg:'Dune has been added to your readlist'});
  
  }
  
}
});

app.post('/addGrapesToReadList',function(req,res){
  loop();
  var db = fs.readFileSync('users.json');
  var z = JSON.parse(db);
  console.log("first list ",data.users[u].readlist);
  var flag = 1;

  if (flag == 1){
 
  for(var c = 0; c <= data.users[u].readlist.length;c++){
  
    
  if (data.users[u].readlist[c] === "The Grapes of Wrath"){
    flag=0;
    res.render('grapes',{errormsg:'The Grapes of Wrath is already in your readlist'});
  }
     
  }

  if (flag==1){
  data.users[u].readlist.push("The Grapes of Wrath");
  var x =  JSON.stringify(data);
  fs.writeFileSync("users.json",x);
  console.log("Added")
  console.log("second list ",data.users[u].readlist);
  res.render('grapes',{errormsg:'The Grapes of Wrath has been added to your readlist'});
  
  }
  
}
});
app.post('/addLeavesToReadList',function(req,res){
  loop();
  var db = fs.readFileSync('users.json');
  var z = JSON.parse(db);
  console.log("first list ",data.users[u].readlist);
  var flag = 1;

  if (flag == 1){
 
  for(var c = 0; c <= data.users[u].readlist.length;c++){
  
    
  if (data.users[u].readlist[c] === "Leaves of Grass"){
    flag=0;
    res.render('leaves',{errormsg:'Leaves of Grass is already in your readlist'});
  }
     
  }

  if (flag==1){
  data.users[u].readlist.push("Leaves of Grass");
  var x =  JSON.stringify(data);
  fs.writeFileSync("users.json",x);
  console.log("Added")
  console.log("second list ",data.users[u].readlist);
  res.render('leaves',{errormsg:'Leaves of Grass has been added to your readlist'});
  
  }
  
}
});

app.post('/addMockingBirdToReadList',function(req,res){
  loop();
  var db = fs.readFileSync('users.json');
  var z = JSON.parse(db);
  console.log("first list ",data.users[u].readlist);
  var flag = 1;

  if (flag == 1){
 
  for(var c = 0; c <= data.users[u].readlist.length;c++){
  
    
  if (data.users[u].readlist[c] === "To Kill a Mockingbird"){
    flag=0;
    res.render('mockingbird',{errormsg:'To Kill a Mockingbird is already in your readlist'});
  }
     
  }

  if (flag==1){
  data.users[u].readlist.push("To Kill a Mockingbird");
  var x =  JSON.stringify(data);
  fs.writeFileSync("users.json",x);
  console.log("Added")
  console.log("second list ",data.users[u].readlist);
  res.render('mockingbird',{errormsg:'To Kill a Mockingbird has been added to your readlist'});
  
  }
  
  
}
});
app.post('/addSunToReadList',function(req,res){
  loop();
  var db = fs.readFileSync('users.json');
  var z = JSON.parse(db);
  console.log("first list ",data.users[u].readlist);
  var flag = 1;

  if (flag == 1){
 
  for(var c = 0; c <= data.users[u].readlist.length;c++){
  
    
  if (data.users[u].readlist[c] === "The Sun and Her Flowers"){
    flag=0;
    res.render('sun',{errormsg:'The Sun and Her Flowers is already in your readlist'});
  }
     
  }

  if (flag==1){
  data.users[u].readlist.push("The Sun and Her Flowers");
  var x =  JSON.stringify(data);
  fs.writeFileSync("users.json",x);
  console.log("Added")
  console.log("second list ",data.users[u].readlist);
  res.render('sun',{errormsg:'The Sun and Her Flowers has been added to your readlist'});
  
  }
  
  
}
});

app.get('/searchresult',function(req,res){
  res.render('searchresult',{list,errormsg:''});
});

app.get('/dune',function(req,res){
  res.render('dune',{errormsg:''});
});
app.get('/grapes',function(req,res){
  res.render('grapes',{errormsg:''});
});

app.get('/leaves',function(req,res){
  res.render('leaves',{errormsg:''});
});

app.get('/mockingbird',function(req,res){
  res.render('mockingbird',{errormsg:''})
});

app.get('/sun',function(req,res){
  res.render('sun',{errormsg:''});
});

app.post('/search',function(req,res){
 var list =[];
 var search =  req.body.Search;
 if('To Kill a Mockingbird'.toLowerCase().includes(search.toLowerCase()))
    list.push(['To Kill a Mockingbird','/mockingbird']);
 if('The Grapes of Wrath'.toLowerCase().includes(search.toLowerCase()))
    list.push(['The Grapes of Wrath','/grapes']) ;
 if('Leaves of Grass'.toLowerCase().includes(search.toLowerCase()))
    list.push(['Leaves of Grass','/leaves']);
 if('The Sun and Her Flowers'.toLowerCase().includes(search.toLowerCase()))
    list.push(['The Sun and Her Flowers','/sun']);
 if('Lord of the Flies'.toLowerCase().includes(search.toLowerCase()))
    list.push(['Lord of the Flies','/flies']);
 if('Dune'.toLowerCase().includes(search.toLowerCase()))
    list.push(['Dune','/dune']);
 if(list.length == 0){
    res.render('searchresults',{list,errormsg:'Book not found'});
    return;}

 res.render('searchresults',{list,errormsg:''});
 list=[]});




if(process.env.PORT){
  app.listen(process.env.PORT,function(){console.log('Server started')});
}
else{
  app.listen(3000,function(){console.log('Server started on port 3000')});
}