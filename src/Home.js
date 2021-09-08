import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '@eathansmith', value: '1' },
    { label: '@adnanbohra', value: '2' },

  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: 'Porfolio', value: '1' },
    { label: 'Degree', value: '2' },
    { label: 'Masters', value: '3' },
  ]);

  return (
    <ScrollView style={styles.container}>

      <LinearGradient
        colors={['#6A6DCD', '#A6A8FF']}
        style={styles.background}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <DropDownPicker
              labelStyle={{
                fontSize: 16,
                color: '#FFFFFF',
              }}
              placeholderStyle={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}
              placeholder='@eathansmith'

              style={{
                marginTop: 43,
                width: 160,
                height: 32,
                borderRadius: 32,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 0,
                marginLeft: 20,
              }}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
            <View style={{ position: 'absolute', marginTop: 45, marginLeft: 325, backgroundColor: 'white', borderRadius: 12, padding: 15 }}>
              <Image
                style={{ height: 28, width: 28, }}
                source={require('/Test Task/Flahmingo/Flamingo/assets/education.png')}
              />
            </View>
          </View>
          <DropDownPicker
            labelStyle={{
              fontSize: 16,
              color: '#FFFFFF',
            }}
            placeholderStyle={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}
            placeholder='Portfolio'

            style={{
              marginTop: 43,
              width: 120,
              height: 32,
              borderRadius: 32,
              backgroundColor: 'transparent',
              borderWidth: 0,
              marginLeft: 20,
            }}
            open={open2}
            value={value2}
            items={items2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}
          />
          <View style={{ flexDirection: 'row', marginLeft: 28 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 36, marginTop: 10, fontWeight: '700' }}>$850.64 </Text>
            <Text style={{ marginTop: 28, color: '#FFFFFF', fontSize: 20 }}>USD </Text>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', width: 170, justifyContent: 'center', borderRadius: 10, height: 18, marginLeft: 18, marginTop: 10 }}>

            <Image
              style={{ marginTop: 3, marginLeft: 5 }}
              source={require('/Test Task/Flahmingo/Flamingo/assets/Polygon.png')}
            />
            <Text style={{ fontWeight: '400', fontSize: 12, marginLeft: 5, color: '#34B78F' }}>$20.23 ( 2.03% )   </Text>
            <Text>Today</Text>

          </View>
          <Text style={{ fontSize: 20, marginTop: 25, marginLeft: 25, color: '#FFFFFF' }}>Your Pies</Text>
          <Image
            style={{ alignSelf: 'flex-end', position: 'absolute' }}
            source={require('/Test Task/Flahmingo/Flamingo/assets/Vector4.png')}
          />
          <Image
            style={{ alignSelf: 'flex-end', marginTop: 150, position: 'absolute' }}
            source={require('/Test Task/Flahmingo/Flamingo/assets/Vector3.png')}
          />
        </View>

      </LinearGradient>
      {/* </View> */}
      <View style={{ marginTop: 290, flexDirection: 'row', marginLeft: 10 }}>
        <View
          style={styles.button}>
          <Text style={styles.text}>tech Pie</Text>
          <Image
            style={{ marginTop: 23 }}
            source={require('/Test Task/Flahmingo/Flamingo/assets/Vector1.png')}
          />
          <View style={{ marginTop: 10 }}>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <Text style={{ color: '#101820', width: 66, fontWeight: '600', height: 30, top: -3.5, fontSize: 20 }}>$377.03 </Text>
              <Text style={{ height: 20, top: 3, }}> USD </Text>

            </View>

            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ marginTop: 3 }}
                source={require('/Test Task/Flahmingo/Flamingo/assets/Polygon.png')}
              />
              <Text style={{ fontWeight: '400', fontSize: 12, marginLeft: 5, color: '#34B78F' }}>$7.03 (+1.90%) </Text>

            </View>
            <Text style={{ color: '#6A6DCD', marginLeft: 2, fontSize: 12, fontWeight: '400' }}>5 stocks</Text>
          </View>

        </View>

        <View
          style={styles.button}>
          <Text style={styles.text}>communication Pie</Text>

          <Image
            style={{ marginTop: 23 }}
            source={require('/Test Task/Flahmingo/Flamingo/assets/Vector2.png')}
          />
          <View style={{ marginTop: 10 }}>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <Text style={{ color: '#101820', width: 66, fontWeight: '600', height: 30, top: -3.5, fontSize: 20 }}>$250.05 </Text>
              <Text style={{ height: 20, top: 3, }}> USD </Text>
            </View>

            <View style={{ flexDirection: 'row', }}>
              <Image
                style={{ marginTop: 4 }}
                source={require('/Test Task/Flahmingo/Flamingo/assets/Polygon1.png')}
              />
              <Text style={{ fontWeight: '400', fontSize: 12, marginLeft: 5, color: '#F2827F' }}>$3.04 (-0.90%) </Text>
            </View>
            <Text style={{ color: '#6A6DCD', marginLeft: 2, fontSize: 12, fontWeight: '400', marginTop: 10 }}>3 stocks</Text>
          </View>
        </View>
      </View>

      <Image
        style={{ marginTop: 18, justifyContent: 'center', alignSelf: 'center' }}
        source={require('/Test Task/Flahmingo/Flamingo/assets/Slider.png')}
      />

      <Text style={{ fontSize: 20, marginTop: 25, marginLeft: 25, color: 'black' }}>Whishlist</Text>

      <View style={{ marginTop: 22, flexDirection: 'row', marginLeft: 10 }}>
        <View
          style={styles.button2}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ width: 18, height: 15, marginTop: 10 }}
              source={require('/Test Task/Flahmingo/Flamingo/assets/Shopify.webp')}
            />

            <Text style={{ fontSize: 16, color: 'black', marginLeft: 5 }}>SHOP</Text>
          </View>
          <Text style={{ fontSize: 12, color: 'rgba(16, 24, 32, 0.3)', marginLeft: 25 }}>Shopify Inc.</Text>
          <Image
            style={{ marginTop: 15 }}
            source={require('/Test Task/Flahmingo/Flamingo/assets/Vector6.png')}
          />
          <View style={{ marginTop: 5 }}>
            <View style={{ marginTop: 0, flexDirection: 'row' }}>
              <Text style={{ color: '#101820', width: 66, fontWeight: '600', height: 30, top: -3.5, fontSize: 20 }}>$52.16 </Text>
              <Text style={{ height: 20, top: 3, }}> USD </Text>

            </View>

            <View style={{ flexDirection: 'row' }}>

              <Image
                style={{ marginTop: 3 }}
                source={require('/Test Task/Flahmingo/Flamingo/assets/Polygon.png')}
              />
              <Text style={{ fontWeight: '400', fontSize: 12, marginLeft: 5, color: '#34B78F' }}>$2.16 (+4.32%) </Text>

            </View>


          </View>
          <Image
            style={{ marginTop: 15 }}
            source={require('/Test Task/Flahmingo/Flamingo/assets/chart.png')}
          />

        </View>

        <View
          style={styles.button2}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ width: 18, height: 15, marginTop: 10 }}
              source={require('/Test Task/Flahmingo/Flamingo/assets/amazon.jpg')}
            />

            <Text style={{ fontSize: 16, color: 'black', marginLeft: 5 }}>AMZN</Text>
          </View>
          <Text style={{ fontSize: 12, color: 'rgba(16, 24, 32, 0.3)', marginLeft: 25 }}>Amazon.com</Text>


          <Image
            style={{ marginTop: 15 }}
            source={require('/Test Task/Flahmingo/Flamingo/assets/Vector5.png')}
          />

          <View style={{ marginTop: 10 }}>
            <View style={{ marginTop: 0, flexDirection: 'row' }}>
              <Text style={{ color: '#101820', width: 66, fontWeight: '600', height: 30, top: -3.5, fontSize: 20 }}>$35.70 </Text>
              <Text style={{ height: 20, top: 3, }}> USD </Text>

            </View>

            <View style={{ flexDirection: 'row' }}>

              <Image
                style={{ marginTop: 3 }}
                source={require('/Test Task/Flahmingo/Flamingo/assets/Polygon.png')}
              />
              <Text style={{ fontWeight: '400', fontSize: 12, marginLeft: 5, color: '#34B78F' }}>$0.70 (+1.99%) </Text>

            </View>

          </View>
          <Image
            style={{ marginTop: 10 }}
            source={require('/Test Task/Flahmingo/Flamingo/assets/chart2.png')}
          />
        </View>

      </View>

      <Image
        style={{ marginTop: 18, justifyContent: 'center', alignSelf: 'center', marginBottom: 20 }}
        source={require('/Test Task/Flahmingo/Flamingo/assets/Slider.png')}
      />

      <Image
        style={{ marginTop: 18, justifyContent: 'center', marginBottom: 10, marginLeft: 300 }}
        source={require('/Test Task/Flahmingo/Flamingo/assets/box.png')}
      />


    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',

  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 348,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  button: {
    padding: 15,
    borderRadius: 20,
    height: 204,
    width: 210,
    margin: 15,
    backgroundColor: '#FFFFFF',

  },
  button2: {
    padding: 15,
    borderRadius: 20,
    height: 229,
    width: 210,
    margin: 15,
    backgroundColor: '#FFFFFF',
  },
  text: {

    fontSize: 14,
    color: '#000000',
  },
});