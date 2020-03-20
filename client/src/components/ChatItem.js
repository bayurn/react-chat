import React from 'react'

function ChatItem(props) {
    return <li>
        {props.item.complete ? '[X]' : '[ ]'} {props.item.title}
        <button class="btn btn primary" type="button" onClick={() => { props.complete(props.item.id) }}>Complete</button>
    </li>
}

export default ChatItem;