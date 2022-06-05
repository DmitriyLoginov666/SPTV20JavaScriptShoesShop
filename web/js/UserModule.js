import {viewModule} from './ViewModule.js';
class UserModule{
    

    
    getListShoes(){
        let promiseGetListShoes = fetch('getListShoes',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include'
        });
        promiseGetListShoes.then(response => response.json())
                          .then(response =>{
                              if(response.status){
                                  document.getElementById('info').innerHTML = response.info;
                                  viewModule.showListShoes(response.Model);
                              }else{
                                  document.getElementById('info').innerHTML = response.info;
                              }
                          })
                          .catch(error => {
                              document.getElementById('info').innerHTML = "Ошибка сервера (getListShoes)"+error;
                          });
    }
    
    buyShoe(){
        const id = document.getElementById('id').value;
        const buyShoe = {
            "id":id
        };
        let promiseBuyShoe = fetch('buyShoe',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(buyShoe)
        });
        promiseBuyShoe.then(response => response.json())
                          .then(response =>{
                              if(response.status){
                                  document.getElementById('info').innerHTML = response.info;
                              }else{
                                  document.getElementById('info').innerHTML = response.info;
                              }
                          })
                          .catch(error => {
                              document.getElementById('info').innerHTML = "Ошибка сервера (buyShoe)"+error;
                          });
    }

    editProfile(){
        const authUser = JSON.parse(sessionStorage.getItem('user'));
        const newFirstname = document.getElementById('firstname').value;
        const newLastname = document.getElementById('lastname').value;
        const newPhone = document.getElementById('phone').value;
        const newMoney = document.getElementById('money').value;
        const changeUser = {
            "id": authUser.id,
            "newFirstname": newFirstname,
            "newLastname": newLastname,
            "newPhone": newPhone,
            "newMoney": newMoney
        };
        let promiseChangeProfile = fetch('editProfile',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(changeUser)
        });
        promiseChangeProfile.then(response => response.json())
                          .then(response =>{
                              if(response.status){
                                  sessionStorage.setItem('user',JSON.stringify(response.user));
                                  viewModule.showProfile();
                                  document.getElementById('info').innerHTML = response.info;
                              }else{
                                  document.getElementById('info').innerHTML = response.info;
                              }
                          })
                          .catch(error => {
                              document.getElementById('info').innerHTML = "Ошибка сервера (editProfile)"+error;
                          });
    }
}
const userModule = new UserModule();
export {userModule};


