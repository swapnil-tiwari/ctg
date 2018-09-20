
        async function login()
        {
            var res=await fetch('http://localhost:8080/data/login',
            {
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({username:username.value,password:password.value})
            })
          //  console.log(JSON.stringify(await res.json()));
            var response= await res.json();
            if (response.data.login==true)
            {
              window.location.href = "../pages/homenew.html";

            }
            else {
                window.location.href = "../pages/login.html";
            }
          //  resp.value=JSON.stringify(await res.json())
            //window.location.href = "../pages/homenew.html";
        }
        async function register()
        {
            var res=await fetch('http://localhost:8080/data/register',
            {
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({username:username.value,password:pass.value,email:email.value,contact:contactno.value})
            })

            //resp.value=JSON.stringify(await res.json())
            console.log(JSON.stringify(await res.json()));
           window.location.href = "../pages/login.html";
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
