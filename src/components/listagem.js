import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
 
class Listagem extends React.Component{



    render(){

        var linhas = "casa"
        const paperStyle = { padding: 20, height: '50vh', width: 280, margin: "50px auto" }
        const avatarStyle = { backgroundColor: 'green' }
        const bntStyle = {padding:10,margin:"10px auto"}
        const margin = {margin:'20px auto'}
        
        const usuarios = []
        const requestInfo = {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };
        fetch('https://api-cps.herokuapp.com/auth/listar',requestInfo)
        .then(response =>{
            if(response.ok){
                response.json().then(response =>{
                   localStorage.setItem("listagem",JSON.stringify(response))
                })  
            }
        })

        /** */
        const columns = [
            { field: "_id", headerName: "ID", width: 90 },
            { field: "Nome", headerName: "Nome", width: 150 },
            { field: "indentificador", headerName: "indentificador", width: 200 },
            { field: "createdAt", headerName: "Hora de entrada", width: 300 }
          ];
          
          const rows = [{ id: 1, Nome: "Snow", indentificador: "Jon", horaEntrada: 35 },{ id: 1, Nome: "Snow", indentificador: "Jon", horaEntrada: 35 },
          { id: 1, Nome: "Snow", indentificador: "Jon", horaEntrada: 35 },{ id: 1, Nome: "Snow", indentificador: "Jon", horaEntrada: 35 },];
      
          //console.log(rows)
          //console.log(usuarios)
            console.log(linhas)
            var gambiarra = localStorage.getItem("listagem")
            gambiarra = JSON.parse(gambiarra)
            gambiarra = gambiarra.listagem

            for(var i=0;i<gambiarra.length;i++){
                console.log(gambiarra[i])
            }
            

       
        
        return(
            <div className="Main">
                <div className="Header">
                    <h1>DASHBOARD</h1>
                </div>

                <div style={{ height: 400, width: "100%" }} >
                
                </div>
            </div>
        )
    }

}


export default Listagem