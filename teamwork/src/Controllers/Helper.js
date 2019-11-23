const Helper = {
    fetchPostRequest(apiEndpoint, requestObject) {
        //   showLoader();
        console.log(requestObject);
        fetch(apiEndpoint,{
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(requestObject) // body data type must match "Content-Type" header
        })
            .then(response => response.json())
            .then(data => {
               // hideLoader();
               // showSearchBubble(results);
                console.log(data);
                return data;
            })
            .catch((e) => {
              //  hideLoader();
              //  showErrorBubble(e);
                console.log(e)
            });

    }
}

export default Helper;