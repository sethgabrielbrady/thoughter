(function() {
  'use strict';
    window.thoughter = window.thoughter || {};

    /**
     * Creates a new thought with the given text
     *
     * @param  {String} text  The text to use for the thought - this is REQUIRED!
     * @return {Promise}      The resolved promise will have the new thought data object in it
     */
    window.thoughter.createThought = function createThought(text) {
        if (typeof(text) !== 'string' || !text.length) {
            return Promise.reject('Please provide text for this new thought');
        }

        return fetch(
            'http://thoughter.herokuapp.com/api/Thoughts',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content: text })
            }
        )
        .then(function handleResponse(res) {
            if (res.status > 299) {
                console.error('Looks like a bad status code:', res.status);
                return Promise.reject('Sorry, but there was a problem with your request.');
            } else {
                return res.json();
            }
        });
    };

})();
