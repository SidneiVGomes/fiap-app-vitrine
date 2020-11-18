import React, { Component } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import { Button, TextInput } from 'react-native-paper';
import { Keyboard, ScrollView, View, Alert } from 'react-native';
import validationSchema from './components/Validation'
import initialValues from './components/InitialValues'
import styles from './styles'
import firebase from '../../../../services/firebase';

export default class Form extends Component {
    state = {
        url: '',
        progress: 0
    }

    async onSubmit(values) {
        //List of form values
        //backend boy = {description, price, title, visible_from, visible_to, estabilishment_id, image_url}
        console.log(values)
        this.createAd(values)
        Keyboard.dismiss();
    }

    async createAd(values) {

        try {
            await firebase.database().ref('/ads').push({
                title: values.title,
                price: values.price,
                describe: values.describe,
                visibleFrom: values.visibleFrom,
                visibleTo: values.visibleTo,
                image: values.image,
                number: values.number
            })

        } catch (error) {
            alert(error);
        }
        await this.uploadImage(values.image, values.key)
            .then(() => {
                Alert.alert("Success");
            })
            .catch((error) => {
                Alert.alert(error)
            })
    }
    //TODO - UPLOADIMAGE
    async uploadImage(uri, values) {
        const response = await fetch(uri);
        const blob = await response.blob();

        const uploadTask = await firebase
            .storage()
            .ref(`images/${values.key}`)
            .put(blob);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });
                })
            });

    }

    async pickImage(handleChange) {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3]
        })
        //console.log(result)
        if (!result.cancelled) {
            handleChange(result.uri)
        }
    }

    render() {
        return (
            <ScrollView style={styles.form}>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={this.onSubmit.bind(this)}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            {/* TITLE INPUT */}
                            <TextInput
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                label="Titulo"
                                onChangeText={handleChange('title')}
                                placeholder="Um petisco para seu Dog!"
                                onBlur={handleBlur('title')}
                                value={values.title}
                            />
                            {/* PRICE INPUT */}
                            <TextInput
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                keyboardType={'numeric'}
                                label="Preço"
                                onChangeText={handleChange('price')}
                                placeholder="Exemplo: 98.99"
                                onBlur={handleBlur('price')}
                                value={values.price}
                            />
                            {/* DESCRIBE INPUT */}
                            <TextInput
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                label="Descrição"
                                multiline
                                onChangeText={handleChange('describe')}
                                placeholder="Alimento para Cães sabor Frango Assado SPEED DOG Pacote 10."
                                onBlur={handleBlur('describe')}
                                value={values.describe}
                            />
                            {/* VISIBLEFROM INPUT */}
                            <TextInput
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                label="Visível a partir de:"
                                onChangeText={handleChange('visibleFrom')}
                                placeholder="Utilize do padrão DD/MM. Exemplo: 05/09"
                                onBlur={handleBlur('visibleFrom')}
                                value={values.visibleFrom}
                            />
                            {/* VISIBLETO INPUT */}
                            <TextInput
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                label="Visível até:"
                                onChangeText={handleChange('visibleTo')}
                                placeholder="Utilize do padrão DD/MM. Exemplo: 05/10"
                                onBlur={handleBlur('visibleTo')}
                                value={values.visibleTo}
                            />
                            {/* NUMBER INPUT */}
                            <TextInput
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                label="Número para contato:"
                                onChangeText={handleChange('number')}
                                placeholder="Utilize do padrão 11 99999 9999. Exemplo: 11987654321"
                                onBlur={handleBlur('number')}
                                value={values.number}
                            />
                            {/* <DatePicker handleChange={handleChange} /> */}
                            {/* Image Picker INPUT */}
                            <Button
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                mode="contained" style={styles.button}
                                onPress={() => { this.pickImage(handleChange('image'), values) }}>
                                Escolha uma imagem
                        </Button>
                            <Button
                                theme={{
                                    colors: {
                                        primary: "#108a00"
                                    }
                                }}
                                mode="contained" onPress={handleSubmit} style={styles.button}>Publicar</Button>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        )
    }
}