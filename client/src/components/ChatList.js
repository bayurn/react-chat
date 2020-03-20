import React from 'react'
import ChatItem from './ChatItem'


function ChatList(props) {
    console.log(props.data);
    const ListItem = props.data.map((item) => <ChatItem key={item.id} item={item} complete={props.complete} />)
    return <ul>{ListItem}</ul>

}

export default ChatList;