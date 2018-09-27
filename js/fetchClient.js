async function func()
{

 await setAPI();
 document.getElementById('startup_cap_dash_1').innerHTML=(await api.userdata(['username'])).data.username;
 document.getElementById('startup_cap_dash_2').innerHTML=(await api.userdata(['username'])).data.username;
 document.getElementById('startup_cap_post').innerHTML=(await api.userdata(['username'])).data.username;

}func();
