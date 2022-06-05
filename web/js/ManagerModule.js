import {checkMenuPanel} from './index.js';
import {viewModule} from './ViewModule.js';

class ManagerModule{
        
    createModel(){
        let promiseCreateModel = fetch('addModel',{
            method: 'POST',
            body: new FormData(document.getElementById('create_model'))
        });
        promiseCreateModel.then(response => response.json())
                          .then(response =>{
                              if(response.status){
                                  document.getElementById('info').innerHTML = response.info;
                              }else{
                                  document.getElementById('info').innerHTML = response.info;
                              }
                          })
                          .catch(error => {
                              document.getElementById('info').innerHTML = "Ошибка сервера (createModel)"+error;
                          });
    }
    
    changeModel(){
        const id=document.getElementById("id").value;
        const newName = document.getElementById('name').value;
        const newBrand = document.getElementById('brand').value;
        const newSize = document.getElementById('size').value;
        const newQuantity = document.getElementById('quantity').value;
        const newPrice = document.getElementById('price').value;
        const changeModel = {
            "id": id,
            "newName": newName,
            "newBrand": newBrand,
            "newSize": newSize,
            "newQuantity": newQuantity,
            "newPrice": newPrice
        };
        let promiseChangeModel = fetch('changeModel',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(changeModel)
        });
        promiseChangeModel.then(response => response.json())
                          .then(response =>{
                              if(response.status){
                                  document.getElementById('info').innerHTML = response.info;
                              }else{
                                  document.getElementById('info').innerHTML = response.info;
                              }
                          })
                          .catch(error => {
                              document.getElementById('info').innerHTML = "Ошибка сервера (changeModel)"+error;
                          });
    }
    
}
const managerModule = new ManagerModule();
export {managerModule};