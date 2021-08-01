import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { tailwind } from './tailwind';
import { View, Text, Image } from 'react-native';

const TuneInfo = ({tuneInfo, darkState}) => {

    const TuneEntry = tuneInfo.feed.entry.map((tune, index) => {
        return(
            <View>
                <View style={tailwind("p-6 rounded-xl mb-4 mt-4")}>
                <View style={tailwind("flex")}>
                <View style={tailwind("flex-shrink-0")}>
                    <Image source={{uri: tune["im:image"][2].label}}/>
                </View>
                    <View>
                        <Text style={tailwind("text-xl font-medium text-black")}>{index + 1}. {tune["im:name"].label}</Text>
                        <Text style={tailwind("text-gray-500")}>{tune["im:artist"].label}</Text>
                        <Text style={tailwind("text-gray-400")}>{tune["im:collection"]["im:name"].label}</Text>
                    </View> 
                </View>               
                {/* <View style={tailwind("mt-4")}>
                    <ReactAudioPlayer src={tune.link[1].attributes.href} autoPlay={false} controls={true}/>
                    </View>   */}
                </View>  
            </View> 
        )
    })
    return (
        <>
            {TuneEntry}
        </>
    )
}

export default TuneInfo
