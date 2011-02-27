/*
Your task is to populate the page with the data the user requests using Ajax. Your code should do the following:

- Use Ajax to load the data in exercises/data/people.json.
- Use the data to create an option element for each person, and add the option to the select element.
- Bind a change event to the select element so that, when it is changed, you request the data for the selected person. Data for each of the people listed in the people.json file is located at exercises/data/people/{id}.json.
- Use the data for the person to place the person's avatar in the #info element.
  - Clicking on the avatar should take you to the user's Twitter page.
  - Hovering over the avatar should make the following information about the person (from the JSON data) slide down below the avatar:
    - their name
    - their bio
- The first time data for a person is viewed, use the data about the person to add the text "Latest tweet from {username}" and make it a link to their latest tweet (from the JSON data) to the #seen element.
- Ensure that you only fetch data about a person once; that is, store data once you fetch it so you don't have to fetch it repeatedly.
*/

$(document).ready(function() {

var $select = $('#people select'),
    $seen = $('#seen'),
    $info = $('#info'),
    personDataCache = {};

$('<option/>', { html : 'Select a person' }).appendTo($select);

$.ajax('data/people.json', {
  dataType : 'json',
  success : function(data) {
    $.each(data.people, function(i, p) {
      $('<option/>', {
        value : p.id,
        html : p.name
      }).appendTo($select);
    });

    $select.bind('change', function(e) {
      var personId = $(this).val();
      if (!personId) { return; }
      getPersonData(personId, showPerson);
    });

    $info.bind('mouseenter', function() {
      var $this = $(this);
      if ($this.children('div').length) { return; }

      var person = $(this).data('person'),
          detailTemplate = '<div><p>{{twitter}}</p><p>{{bio}}</p></div>';

      if (!person) { return; }

      var html = detailTemplate
                  .replace('{{twitter}}', person.twitter)
                  .replace('{{bio}}', person.bio || '');

      $(html).hide().appendTo(this).slideDown();
    });
  }
});

function showPerson(person) {
  var avatarTemplate = '<a href="http://twitter.com/{{twitter}}"><img src="{{avatar}}" alt="{{twitter}}" /></a>',
      html = avatarTemplate
                .replace('{{avatar}}', person.avatar)
                .replace('{{twitter}}', person.twitter);

  $info.html(html).data('person', person);
}

function getPersonData(personId, callback) {
  var dfd = $.when(personDataCache[personId] || getRemotePersonData(personId));

  dfd.then(callback);

  // if there's nothing in the personDataCache
  // for the person, then this is the first time
  // we've fetched data for this person
  if (!personDataCache[personId]) {
    dfd.then(function(person) {
      personDataCache[personId] = person;
      markSeen(person);
    });
  }
}

function markSeen(person) {
  var seenTemplate = '<li><a href="{{tweet}}">Latest tweet from {{twitter}}</a></li>',
      html = seenTemplate
              .replace('{{tweet}}', person.tweet)
              .replace(/{{twitter}}/g, person.twitter);

  $seen.append(html);
}

function getRemotePersonData(personId) {
  return $.ajax('data/people/' + personId + '.json', {
    dataType : 'json'
  });
}

});

