export default function handleResponseFromAPI(promise) {
    return promise.then(
        function(value){
            console.log('Got a response from the API')
            return {
                status: 200,
                body: 'success'
            }
        },
        function(error){
           return error
        }
    )
}
