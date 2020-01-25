export let UserStore = (function() {
    let user_name =  '';

    function setUserName(name) {
        user_name = name;
    }

    function getUserName() {
        return user_name
    }

    return {
        setUserName,
        getUserName
    }
})()