(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    /**
     * Shows the provided thought data on the page in the `.recent` element
     *
     * @param  {Array}  thoughts The array of thought objects to display
     * @return {void}
     */

                                    //changed from thoughts = []
    window.thoughter.showRecent = function showRecent(thoughts = []) {
        if (!Array.isArray(thoughts)) {
            return;
        }



        //added let because it wasnt on the "recent" declaration

      let recent = document.querySelector('.recent');//creates a 'recent' class
        thoughts.forEach(function showThought(thought) {//iterated through the array
            if (!thought.content || !thought.createTime || !thought.id) {
                return;
            }

            let thoughtUI = document.createElement('article'); //creates an article with thoughtUI
            thoughtUI.classList.add('panel');//adds panel to the thoughtUi article
            thoughtUI.classList.add('panel-info');//adds panel.info to the thoughtUi article
            thoughtUI.setAttribute('id', 'thought-' + thought.id);//sets the attributes of thoughtUI
            thoughtUI.innerHTML = `<header class='panel-heading'>Posted ${thoughts.createTime}</header>
                <main class='panel-body'>
                    <p>${thought.content}</p>
                </main>`;
            recent.appendChild(thoughtUI);
        });
    };



    /**
     * Retrieves the most recent thoughts, using the provided count as the limit
     *
     * @param  {Number} count  How many thoughts to limit to, must be a positive number (defaults to 10)
     * @return {Promise}       The resolved promise will have the data array as the argument
     */
    window.thoughter.getRecent = function getRecent(count = 10) {
        if (typeof(count) !== 'number' || count < 1) {
            return Promise.reject('Sorry, but the count must be a positive number');
        }

        return fetch(
            'http://thoughter.herokuapp.com/api/Thoughts?filter={"order":"createTime DESC","limit":' + count + '}'
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
