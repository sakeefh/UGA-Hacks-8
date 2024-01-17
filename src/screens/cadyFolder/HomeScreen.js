import React from "react";
import { View, Text, StyleSheet, useWindowDimensions, SafeAreaView, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Task from '../../components/Task';
import axios from 'axios';


const HomeScreen = ({navigation}) => {

//    const [data, setData] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost/phpFiles/getOrganizations.php');
//             const result = await response.json();
//             setData(result);
//         } catch (error) {
//             console.error(error);
//         }
//         };
//         fetchData();
//         console.warn(data);
//     }, []);

    return (

    
        <SafeAreaView>
            <ScrollView style={{width: '100%'}}>
                <View>

                {/* {data.map(item => (
                    <View key={item.id}>
                    <Text>{item.event_name}</Text>
                    <Text>{item.organizers}</Text>
                    <Text>{item.date}</Text>
                    <Text>{item.location}</Text>
                    <Text>{item.description}</Text>
                    </View>
                ))} */}

                    <Text style={styles.sectionTitle}>Featured Events</Text>
                    <View style={styles.items}>
                        <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('Event1')}}>
                            <Text> Event: Feed the Homeless {"\n"} Organization: Athens Community Outreach {"\n"} Date: March 6th, 2023</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => navigate('Event1')}>
                            <Text> Event: Beach Cleanup {"\n"} Organization: Savannah Coastal Conservation {"\n"} Date: April 10th, 2023</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => navigate('Event1')}>
                            <Text> Event: Park Beautification {"\n"} Organization: Atlanta Parks and Recreation {"\n"} Date: May 15th, 2023</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                

                <View>
                    <Text style={styles.sectionTitle}>For You</Text>
                    <View style={styles.items}>
                        <TouchableOpacity style={styles.Button} onPress={() => navigate('HomeScreen')}>
                            <Text> Event: Soup Kitchen Volunteering {"\n"} Organization: St. Mary's Food Bank {"\n"} Date: June 3rd, 2023</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => navigate('HomeScreen')}>
                            <Text> Event: Nature Trail Restoration {"\n"} Organization: The National Park Service {"\n"} Date: April 23rd, 2023 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => navigate('HomeScreen')}>
                            <Text> Event: Tree Planting Initiative {"\n"} Organization: The Green Earth Foundation {"\n"} Date: March 11th, 2023 </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Right Now</Text>
                    <View style={styles.items}>
                        <TouchableOpacity style={styles.Button} onPress={() => navigate('HomeScreen')}>
                            <Text> Event: Animal Shelter Adoption Event {"\n"} Organization: The Humane Society {"\n"} Date: February 20th, 2023 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => navigate('HomeScreen')}>
                            <Text> Event: Beach Conservation Project {"\n"} Organization: Ocean Conservancy {"\n"} Date: March 20th, 2023</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => navigate('HomeScreen')}>
                            <Text> Event: Nature Trail Restoration Project {"\n"} Organization: The National Park Service {"\n"} Date: February 24th, 2023</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

    const styles = StyleSheet.create({

        sectionTitle: {
            
            fontSize: 30,
            fontWeight: 'bold',
            paddingTop: 10,
            paddingHorizontal: 20,
            paddingBottom: 5,
        },

        Button: {

            backgroundColor: 'white',
            padding: 25,
            borderRadius: 10,
            alignItems: 'left',
            justifyContent: 'space-between',
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,

        }

    });

export default HomeScreen;