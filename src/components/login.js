import React from 'react'
import { Grid, grid, Paper, Avatar, TextField,Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { render } from '@testing-library/react';

   


class Login extends React.Component{

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

                <TextField label={'Login'} placeholder={'Digite o seu login '} style={margin} fullWidth required />
                <TextField label={'Senha'} placeholder={'Digite sua senha'} type={'password'} style={margin} fullWidth required />
                <Button type={'submit'} color={'primary'} variant={'contained'} fullWidth style={bntStyle} >Login</Button>
                <Button type={'submit'} color={'primary'} href="#" size={'small'}>Sem acesso? clique aqui</Button>
            </Paper>
        </Grid>
        )
    }
}

export default Login