'use strict';

let activities = [];

function addActivity() {
    let descriptionElement = document.getElementById( 'description' );
    let description = descriptionElement.value;

    let now = new Date();
    let nowTime = now.toLocaleTimeString();

    activities.push( `<li class="list-group-item">${nowTime} ${description}</li>` );

    let activitiesElement = document.getElementById( 'activitylog' );
    activitiesElement.innerHTML = activities.join( '' );
}

function removeActivity() {
    activities.shift();

    let activitiesElement = document.getElementById( 'activitylog' );
    activitiesElement.innerHTML = activities.join( '' );
}