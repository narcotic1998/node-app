import {UserStore} from "./userStore"
import {chatHTML} from "./html"
import {SocketHandler} from "./socketHandler";
import { throttle } from "./util"

export let ChatHandler = (function() {

    let user_name = '';
    let composer;
    let emit = SocketHandler.emit;
    let isTyping;
    let typingListener;
    let invertIsTyping;
    let typer = '';
    let feedback;

    function init() {
        setUserName();
        constructChatArea();
        bindEventListeners();
        SocketHandler.subscribe('message', handleIncomingMessage);
        SocketHandler.subscribe('typing', handleTypingMessage);
        SocketHandler.subscribe('textdraft', handleDraftedText)
    }

    function setUserName() {
        user_name = UserStore.getUserName()
    }

    function constructChatArea() {
        let textAreaConfig = {
            className : 'chat-composer',
            id : 'composer'
        }
        let buttonConfig = {
            onclick : 'sendmessage',
            text : 'Send'
        }
        let message_container = chatHTML.getMessageContainer()
        let chat_container = chatHTML.getChatContainer({ textAreaConfig, buttonConfig });
        let maincontainer = $('#maincontainer');
        maincontainer.html(message_container + chat_container);
        composer = $("#composer");
        feedback = $('#feedback')
        composer.focus()
    }

    function bindEventListeners() {
        Gator(composer[0]).on("keydown", throttle(handleKeyDown, 1000))
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
            return;
        }
        isTyping = true;
        sendTypingStatus()
        setTypingListener()
    }

    let sendTypingStatus = throttle(() => {
        let data = {
            type: 'typing',
            data: {
                name: user_name,
                message : getValue()
            }
        }
        emit(data)
    }, 1000)

    function handleIncomingMessage(data) {
        clearTyper(data.name)
        if (data.name === user_name) data.name = 'You'
        $('#messagecontainer').append(getConstructedMessage(data)) 
    }

    function clearTyper(name) {
        if (typer === name) {
            typer = '';
            feedback.text('')
        }
    }

    function getConstructedMessage(data) {
        return `<div class="message">
                    <strong>${data.name} : </strong> ${data.message}
                </div>`
    }

    function handleTypingMessage(data) {
        typer = data.name;
       feedback.text(`${data.name} is typing... (${data.message}...)`)
    }

    function setTypingListener() {
        if (typingListener || invertIsTyping) {
            return;
        }
        typingListener = setInterval(() => {
            if (isTyping) {
                return;
            }
            sendDraftStatus();
            clearTimers()
        }, 3000);
        invertIsTyping = setInterval(() => {
            isTyping = false;
        }, 2000)
    }

    function clearTimers() {
        clearInterval(typingListener);
        clearInterval(invertIsTyping);
        typingListener = undefined;
        invertIsTyping = undefined;
    }

    function sendDraftStatus() {
        let data = {
            type : 'textdraft',
            data : {
                name : user_name,
                message : getValue()
            }
        }
        emit(data)
    }

    function getValue() {
        return composer.val()
    }

    function sendMessage() {
        let message = getValue();
        if (!message) return;
        let data = {
            type : 'message',
             data : {
                 name: user_name,
                 message
             }
        }
        emit(data);
        composer.val('')
    }

    function handleDraftedText(data) {
        typer = data.name
        feedback.text(`${data.name} has entered text (${data.message})`)
    }

    return {
        init,
        sendMessage
    }

})()