import React from "react"
import Friend from "./Friend"
import FriendsList from "./FriendsList.json"

const FriendList = () => {
    const mappedFriends = FriendsList.map(friend => 
        <Friend name= {friend.name} theOldness= {friend.age} pets= {friend.pets}/>
    )
    console.log(FriendsList)
    return (
        <div>
            {mappedFriends}
        </div>
        
    )
}

export default FriendList