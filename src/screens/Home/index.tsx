import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd(){
    if(participants.includes(participantName)){
      return Alert.alert('Atenção', 'Já existe um participante com esse nome!');
    }

    setParticipants(participant => [...participant, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: String){
    Alert.alert('Atenção', `Deseja realmente remover o participante ${name}?`, [
      {text: 'Sim',
       onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
       },
      {text: 'Não',
       style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#8a8a8a'
          onChangeText={setParticipantName}
          value={participantName}
          />
        <TouchableOpacity 
            style={styles.button}
            onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        keyExtractor={item => item}
        data={participants}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante adicionado ainda
          </Text>
        )}
        renderItem={({item}) => (
          <Participant
            key={item} 
            name= {item}
            onRemove={() => handleParticipantRemove(item)}/>
        )}
      />
    </View>
  );
}