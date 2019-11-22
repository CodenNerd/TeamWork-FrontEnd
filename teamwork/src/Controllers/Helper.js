const Helper = {
    fetchPostRequest(apiEndpoint, requestObject) {
        //   showLoader();
        fetch(apiEndpoint,{
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }, requestObject)
            .then(response => response.json())
            .then(data => {
               // hideLoader();
               // showSearchBubble(results);
                console.log(data);
                return results;

            })
            .catch((e) => {
              //  hideLoader();
              //  showErrorBubble(e);
                console.log(new Error());
            });

    }
}