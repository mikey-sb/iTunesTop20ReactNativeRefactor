import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {tailwind} from './tailwind'
import TuneInfo from './TuneInfo'


export default function App() {
  const [tuneInfo, setTuneInfo] = useState(null);
  const [rockInfo, setRockInfo] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  const [danceInfo, setDanceInfo] = useState(null);
  const [darkModeActive, setDarkModeActive] = useState("false");
  const [selectedGenre, setSelectedGenre] = useState("all");

  // ALL

  const getTune = () => {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then(res => res.json())
      .then(data => setTuneInfo(data))
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getTune()
  }, []) 

  // ROCK

  const getRock = () => {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json")
      .then(res => res.json())
      .then(data => setRockInfo(data))
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getRock()
  }, []) 

  //Dance

  const getDance = () => {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json")
      .then(res => res.json())
      .then(data => setDanceInfo(data))
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getDance()
  }, []) 

  // Country

  const getCountry = () => {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json")
      .then(res => res.json())
      .then(data => setCountryInfo(data))
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getCountry()
  }, []) 

  const handleToggle = () => {
    setDarkModeActive(!darkModeActive);
  };

  const handleGenreSelection = (e) => {
    if(e.target.value === "all"){
      setSelectedGenre('all');
    } else if (e.target.value === "rock"){
      setSelectedGenre('rock');
    } else if (e.target.value === "country"){
      setSelectedGenre('country');
    } else if (e.target.value === "dance"){
      setSelectedGenre('dance');
    }
  }

  return (
    <View style={tailwind("")}>
      <ScrollView style={tailwind("")}>
        <View style={tailwind("p-6  mx-auto bg-white rounded-xl shadow-md  mb-4 mt-4 flex items-center")}> 
          {/* <label for="genres" style={tailwind("text-xl dark:text-white")}>Genre: </label><br/>
          <select name="genres" id="genres" onChange={handleGenreSelection}>
            <option value="all">All</option>
            <option value="rock">Rock</option>
            <option value="dance">Dance</option>
            <option value="country">Country</option>
          </select> */}

          {/* <button 
        onClick={handleToggle} 
       style={tailwind()}`"bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Dark
        </button> */}
        </View>
        

        {/* {selectedGenre === "all" && tuneInfo != null ? <TuneBox tuneInfo={tuneInfo}/> : null }
        {selectedGenre === "rock" && rockInfo != null ? <TuneBox tuneInfo={rockInfo}/> : null }
        {selectedGenre === "dance" && danceInfo != null ? <TuneBox tuneInfo={danceInfo}/> : null }
        {selectedGenre === "country" && countryInfo != null ? <TuneBox tuneInfo={countryInfo}/> : null } */}
        <Text style={tailwind("text-xl font-large text-black align")}>iTunes Top 20</Text>

        {tuneInfo != null ? <TuneInfo tuneInfo={tuneInfo}/> : <Text>...</Text>}

      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

