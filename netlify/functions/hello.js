exports.handler = async function(event, context){
    // console.log("server side logic goes here...")
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "hello"})
    }
}