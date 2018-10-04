async function func()
{

 await setAPI();

 typeof startup_cap_dash_1!='undefined'?startup_cap_dash_1.innerHTML=(await api.userdata(['username'])).data.username:null;
 typeof startup_cap_dash_2!='undefined'?startup_cap_dash_2.innerHTML=(await api.userdata(['username'])).data.username:null;

 typeof startup_cap_post!='undefined'?startup_cap_post.innerHTML=(await api.userdata(['username'])).data.username:null;
 typeof startupname!='undefined'?startupname.value=(await api.userdata(['username'])).data.username:null;
 typeof startupemail!='undefined'?startupemail.value=(await api.userdata(['email'])).data.email:null;
 typeof startupcno!='undefined'?startupcno.value=(await api.userdata(['contact'])).data.contact:null;
 typeof fname!='undefined'?fname.value=(await api.userdata(['username'])).data.username:null;
 typeof clientname!='undefined'?clientname.innerHTML=(await api.userdata(['username'])).data.username:null;
 typeof clientemail!='undefined'?clientemail.innerHTML=(await api.userdata(['email'])).data.email:null;
 typeof clientinfo!='undefined'?clientinfo.innerHTML=(await api.userdata(['description'])).data.description:null;
  typeof clienttype!='undefined'?clienttype.innerHTML=(await api.userdata(['type'])).data.type:null;



}func();
