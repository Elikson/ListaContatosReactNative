import { View, Text } from 'react-native'
import React from 'react'
import { Button, FAB, ListItem } from '@rneui/base'
import database from '@react-native-firebase/database';

export default function Lista(props) {

    const [listaContatos, setListaContatos] = React.useState([])

    React.useEffect(() => {
        database()
            .ref('/contatos')
            .once('value')
            .then(snapshot => {
                const contatos = Object.values(snapshot.val())
                console.log('User data: ', snapshot.val());
                setListaContatos(contatos)
            });
    }, [])


    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Listar contatos</Text>
            <View style={{ marginTop: 16 }} >
                {
                    listaContatos.map(data =>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{data.nome}</ListItem.Title>
                                <ListItem.Subtitle>{data.email}</ListItem.Subtitle>
                                <ListItem.Subtitle>{data.telefone}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                }
            </View>

            <FAB
                visible={true}
                title='+'
                color="blue"
                placement='right'
                onPress={() => { props.click() }}
            />
        </View>
    )
}