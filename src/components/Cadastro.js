import { View, Text } from 'react-native'
import React from 'react'
import { Button, Input } from '@rneui/base'
import database from '@react-native-firebase/database';

export default function Cadastro(props) {
    const [nome, setNome] = React.useState('')
    const [telefone, setTelefone] = React.useState('')
    const [email, setEmail] = React.useState('')

    const handleCadastro = () => {
        database()
            .ref('/contatos')
            .push({
                nome: nome,
                telefone: telefone,
                email: email
            })
            .then(() => props.click());
    }

    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Cadastro</Text>
            <View style={{ marginTop: 16 }} >
                <Input onChangeText={text => { setNome(text) }} placeholder='Nome' />
                <Input onChangeText={text => { setTelefone(text) }} placeholder='Telefone' />
                <Input onChangeText={text => { setEmail(text) }} placeholder='Email' />

                <Button onPress={() => { handleCadastro() }} title={'Salvar'} />
                <View style={{ marginTop: 10 }}>
                    <Button onPress={() => { props.click() }} title={'Voltar'} />
                </View>

            </View>
        </View>
    )
}