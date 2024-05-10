import React, { useEffect, useState } from 'react';
import { SafeAreaView, 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
// import dings from '../assets/sounds/alpha-beta_recording.mp3';
import { Audio } from 'expo-av'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const DATA = [
  {
    key: 1,
    letterName: 'alpha',
    title: require('../assets/images/letters/Alpha.png'),
  },
  {
    key: 2,
    letterName: 'Veeta',
    title: require('../assets/images/letters/Veeta.png'),
  },
  {
    key: 3,
    letterName: 'Gamma',
    title: require('../assets/images/letters/Gamma.png'),
  },
  {
    key: 4,
    letterName: 'Delta',
    title: require('../assets/images/letters/Delta.png'),
  },
  {
    key: 5,
    letterName: 'Ei',
    title: require('../assets/images/letters/Ei.png'),
  },
  {
    key: 6,
    letterName: 'Soo',
    title: require('../assets/images/letters/Soo.png'),
  },
  {
    key: 7,
    letterName: 'Zeeta',
    title: require('../assets/images/letters/Zeeta.png'),
  },
  {
    key: 8,
    letterName: 'Eeta',
    title: require('../assets/images/letters/Eeta.png'),
  },
  {
    key: 9,
    letterName: 'Theeta',
    title: require('../assets/images/letters/Theeta.png'),
  },
  {
    key: 10,
    letterName: 'Iota',
    title: require('../assets/images/letters/Iota.png'),
  },
  {
    key: 11,
    letterName: 'Kappa',
    title: require('../assets/images/letters/Kappa.png'),
  },
  {
    key: 12,
    letterName: 'Lavla',
    title: require('../assets/images/letters/Lavla.png'),
  },
  {
    key: 13,
    letterName: 'Mei',
    title: require('../assets/images/letters/Mei.png'),
  },
  {
    key: 14,
    letterName: 'Nei',
    title: require('../assets/images/letters/Nei.png'),
  },
  {
    key: 15,
    letterName: 'Eksee',
    title: require('../assets/images/letters/Eksee.png'),
  },
  {
    key: 16,
    letterName: 'O',
    title: require('../assets/images/letters/O.png'),
  },
  {
    key: 17,
    letterName: 'Pee',
    title: require('../assets/images/letters/Pee.png'),
  },
  {
    key: 18,
    letterName: 'Ro',
    title: require('../assets/images/letters/Ro.png'),
  },
  {
    key: 19,
    letterName: 'Seema',
    title: require('../assets/images/letters/Seema.png'),
  },
  {
    key: 20,
    letterName: 'Tav',
    title: require('../assets/images/letters/Tav.png'),
  },
  {
    key: 21,
    letterName: 'Epsilon',
    title: require('../assets/images/letters/Epsilon.png'),
  },
  {
    key: 22,
    letterName: 'Fei',
    title: require('../assets/images/letters/Fei.png'),
  },
  {
    key: 23,
    letterName: 'Kei',
    title: require('../assets/images/letters/Kei.png'),
  },
  {
    key: 24,
    letterName: 'Epsee',
    title: require('../assets/images/letters/Epsee.png'),
  },
  {
    key: 25,
    letterName: 'Oo',
    title: require('../assets/images/letters/Oo.png'),
  }
  ,
  {
    key: 26,
    letterName: 'Shai',
    title: require('../assets/images/letters/Shai.png'),
  },
  {
    key: 27,
    letterName: 'Fai',
    title: require('../assets/images/letters/Fai.png'),
  },
  {
    key: 28,
    letterName: 'Khai',
    title: require('../assets/images/letters/Khai.png'),
  },
  {
    key: 29,
    letterName: 'Hori',
    title: require('../assets/images/letters/Hori.png'),
  },
  {
    key: 30,
    letterName: 'Ganga',
    title: require('../assets/images/letters/Ganga.png'),
  },
  {
    key: 31,
    letterName: 'Cheema',
    title: require('../assets/images/letters/Cheema.png'),
  }
  ,
  {
    key: 32,
    letterName: 'Tee',
    title: require('../assets/images/letters/Tee.png'),
  }
]

export default function App() {
  const [sound, setSound] = useState();

  async function playSound() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
    })
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/sounds/alpha-beta_recording.mp3')
  );
  setSound(sound);

  console.log('Playing Sound');
  await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);
  return(
    <SafeAreaView style={styles.container}>
        <FlatList
        contentContainerStyle={{
          alignSelf: 'center',
          alignItems: 'center',
        }}
        columnWrapperStyle={{
          flexWrap: 'wrap'
        }}
          // numColumns={DATA.length}
          numColumns={3}
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={playSound}>
              <View style={styles.letterContainer}>
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={item.title}/>
                </View>
                <Text style={styles.letterName}>{item.letterName}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          style={styles.lettersContainer}
          showsVerticalScrollIndicator={false}
        />  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#435577',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lettersContainer: {
    marginTop: 100,
    marginBottom: 100,
    marginHorizontal: 25
    // backgroundColor: 'red',
  },
  letterContainer: {
    // backgroundColor: 'blue',
    margin: 10,
    alignItems: 'center',
    borderColor: '#4A608B',
    borderWidth: 1,
    shadowColor: '#4C576D',
    borderRadius: 10,
  },
  image: {
    margin: 10
  },
  letterName: {
    color: 'white',
    paddingVertical: 10,
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: "#435577"
//   },
//   lettersContainer: {
//     marginTop: '20%',
//     marginBottom: '20%',
//     marginHorizontal: '5%',
//     backgroundColor: 'pink',
//     // backgroundColor: '#435577',

//   },  
//   letterContainer: {
//     // padding: '10%',
//     marginVertical: '10%',
//     marginHorizontal: '5%',
//     // backgroundColor: "pink",
//     // width: '100%',
//     alignItems: 'center',
//     borderRadius: 10, 
//     borderWidth: 1,
//     borderColor: "#4A608B",
//     shadowColor: "#4C576D",
//     shadowOffset: { width: 0, height: 2},
//     shadowOpacity: 2,
//     shadowRadius: 1,
//     width: 100,
//     height: 200,

//   },
//   imageContainer: {
//     // flex: 1,
//     // width: '100%',
//     // padding: '10%',
//     // backgroundColor: 'red',
//     width: null,
//     height: null,
//     resizeMode: 'contain',
//   },
//   image: {
//     // paddingHorizontal: 20,
//     // padding: '10%',
//     // paddingHorizontal: '10%',
//     // flex: 1,
//     // width: null,
//     // height: null,
//     resizeMode: 'contain',
//     // aspectRatio: 4/2,
//   },  
//   letterName: {
//     color: "white",
//     fontSize: 32,
//     paddingTop: 10,
//     width: null,
//     height: null,
//     resizeMode: 'contain',
//   }
// })


