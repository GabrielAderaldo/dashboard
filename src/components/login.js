import React, { useState } from 'react'
import { Grid, grid, Paper, Avatar, TextField,Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { render } from '@testing-library/react';
import axios from 'axios'
   


class Login extends React.Component{


    constructor(props){
        super(props)

        this.state={
            message : this.props.location.state?this.props.location.state.message: '',
        }
    }


    singIn = () =>{

        const data = {email: this.email,password: this.password}
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        }

        fetch('https://api-cps.herokuapp.com/auth/login',requestInfo)
        .then(response =>{
            
            if(response.ok){
              return response.json().then(response =>{
                var obj = {
                    "id":response.Usuario._id,
                    "nome":response.Usuario.name,
                    "email":response.Usuario.email
                }
                
                
                
                  localStorage.setItem('token',response.Token)
                  localStorage.setItem('Usuario:id',obj.id)
                  localStorage.setItem('Usuario:nome',obj.nome)
                  localStorage.setItem('Usuario:email',obj.email)
              
                  this.props.history.push('/app')
                  return
              })  
            }
           
            throw new Error("Login invalido...")
        })
        .catch(e => { this.setState({message: e.message })})


    }




    render(){

        const paperStyle = { padding: 20, height: '50vh', width: 280, margin: "50px auto" }
        const avatarStyle = { backgroundColor: 'green' }
        const bntStyle = {padding:10,margin:"10px auto"}
        const margin = {margin:'20px auto'}


        return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align={'center'}>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Controle administrativo</h2>
                   
                </Grid>
                
                <TextField label={'Login'} placeholder={'Digite o seu login '} style={margin} id="email" onChange={e => this.email = e.target.value} fullWidth required />
                <TextField label={'Senha'} placeholder={'Digite sua senha'} type={'password'} style={margin}  id="password" onChange={e => this.password = e.target.value} fullWidth required />
                <Button type={'submit'} color={'primary'} variant={'contained'} fullWidth style={bntStyle} onClick={this.singIn} >Login</Button>
                <Button type={'submit'} color={'primary'} href="#" size={'small'}>Sem acesso? clique aqui</Button>
            </Paper>
        </Grid>
        )
    }
}

export default Login