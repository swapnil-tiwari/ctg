async function func()
{

 await setAPI();
 document.getElementById('startup_cap_dash').innerHTML=(await api.userdata(['username'])).data.username;
 document.getElementById('startup_cap_post').innerHTML=(await api.userdata(['username'])).data.username;

}func();
