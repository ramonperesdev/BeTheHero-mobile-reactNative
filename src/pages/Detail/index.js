import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Olá ${incident.nome}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL'
    }).format(incident.value)} reais`;

    function navigationToIncidents() {
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Héroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=556282177942&text=${message}`)
    }

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigationToIncidents}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>

            </View>
            <ScrollView 
                style={styles.containerScroll}
                horizontal={false} 
                showsVerticalScrollIndicator={false} >
                <View style={styles.body} >
                    <View style={styles.bodyGroup}>
                        <View style={styles.containerCaso}>
                            <Text style={styles.textTitle}>CASO:</Text>
                            <Text style={styles.textDescription} numberOfLines={3} >{incident.title}</Text>
                        </View>


                        <View style={styles.containerOng}>
                            <Text style={styles.textTitle}>ONG:</Text>
                            <Text style={styles.textDescription} >{incident.nome}</Text>
                        </View>
                    </View>

                    <Text style={styles.titleDescription}>DESCRIÇÃO:</Text>
                    <Text style={styles.textDescription}>{incident.description}</Text>

                    <View style={styles.locAndValue}>
                        <View style={styles.valor}>
                            <Text style={styles.titleDescription}>VALOR:</Text>
                            <Text style={styles.textDescription}>
                                {Intl.NumberFormat('pt-BR', {
                                    style: 'currency', 
                                    currency: 'BRL'
                                }).format(incident.value)}
                            </Text>
                        </View>
                        
                        <View style={styles.loc}>
                            <Text style={styles.titleDescription}>Cidade/UF:</Text>
                            <Text style={styles.textDescription}>{incident.city}/{incident.uf}</Text>
                        </View>
                    </View>
                    
                </View>

                <View style={styles.footer} >
                    <Text style={styles.textFooter}>Salve o dia!</Text>
                    <Text style={styles.textFooter}>Seja o herói desse caso.</Text>

                    <Text style={styles.textFooterSimple} >Entre em contato</Text>

                    <View style={styles.containerBotao}>
                        <TouchableOpacity style={styles.botao} onPress={sendWhatsapp} >
                            <Text style={styles.textBotao} >WhatsApp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao} onPress={sendEmail} >
                            <Text style={styles.textBotao}>E-mail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


        </View>

    );
}