
/*
async function rpc(proc,arg)
{
	  var req={
                method:arg?'POST':'GET',
                headers:{
                    'content-type': 'application/json'
                    },
                }
	  arg?req.body=JSON.stringify(arg):null;
    var resp=await fetch('http://localhost:8080/data/'+proc,req);
    var js=await resp.json();
    if(js.code>=400)throw js;
  	return js;
}

res=await rpc('userdata',['username','email']);
document.write("<br>");
document.write(JSON.stringify(res))


*/

        async  function setAPI(cb)
        {
          if(window.api)
          {
            cb?cb(window.api):null;
            return window.api
          }
          var loc= localize();
          if(typeof cb=='function')
            {

              window.api=await loc
              cb(await loc);
            }
          else
          {
              window.api=await loc
              return await loc;
          }
        }
        async function login()
        {
            window.api?null:window.api=await init();
            //await api.login{username:username.value,password:password.value};
          //   var res=await fetch('http://localhost:8080/data/login',
          //   {
          //       method:'post',
          //       headers:{
          //           'content-type':'application/json'
          //       },
          //       body:JSON.stringify({username:username.value,password:password.value})
          //   })
          // //  console.log(JSON.stringify(await res.json()));
          //   var response= await res.json();
            var response=await api.login({username:username.value,password:password.value});
            if (response.data.login==true)
            {
              window.location.href = "../pages/homenew.html";

            }
            else {
                window.location.href = "../pages/login.html";
            }

        }
        async function register_f()
        {
            window.api?null:window.api=await setAPI();
            // var res=await fetch('http://localhost:8080/data/register',
            // {
            //     method:'post',
            //     headers:{
            //         'content-type':'application/json'
            //     },
            //     body:JSON.stringify({username:username_f.value,password:pass_f.value,email:email_f.value,contact:contactno_f.value})
            // })
            var response=await api.register({username:username_f.value,password:pass_f.value,email:email_f.value,contact:contactno_f.value});
            if(response.code==200)
            {
               window.location.href = "../pages/login.html";
            }
            else {
               window.location.href = "../pages/getting-started.html";

            }
            //resp.value=JSON.stringify(await res.json())
            //console.log(JSON.stringify(await res.json()));


        }
        async function register_sp()
        {
            window.api?null:window.api=await init();
            // var res=await fetch('http://localhost:8080/data/register',
            // {
            //     method:'post',
            //     headers:{
            //         'content-type':'application/json'
            //     },
            //     body:JSON.stringify({username:username_sp.value,password:pass_sp.value,email:email_sp.value,contact:contactno_sp.value})
            // })
            var response=await api.register({username:username_sp.value,password:pass_sp.value,email:email_sp.value,contact:contactno_sp.value});
            if(response.code==200)
            {
               window.location.href = "../pages/login.html";
            }
            else {
               window.location.href = "../pages/getting-started.html";

            }
            //resp.value=JSON.stringify(await res.json())
            //console.log(JSON.stringify(await res.json()));


        }
    async function logout()
    {
        var res=await fetch('http://localhost:8080/data/logout',
        {
            method:'get',
            headers:{
                'content-type':'application/json'
            }
        })
        //resp.value=JSON.stringify(await res.json())
        window.location.href = "../pages/getting-started.html";
    }
    async function islogin()
    {
        var res=await fetch('/data/islogin',
        {
            method:'get',
            headers:{
                'content-type':'application/json'
            }
        })
        resp.value=JSON.stringify(await res.json())
    }
