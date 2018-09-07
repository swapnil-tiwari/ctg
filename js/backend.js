
        async function login()
        {
            var res=await fetch('/data/login',
            {
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({username:username.value,password:password.value})
            })
            resp.value=JSON.stringify(await res.json())
        }
        async function register()
        {
            var res=await fetch('https://17df832b.ngrok.io/data/register',
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
        var res=await fetch('/data/logout',
        {
            method:'get',
            headers:{
                'content-type':'application/json'
            }
        })
        resp.value=JSON.stringify(await res.json())
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
