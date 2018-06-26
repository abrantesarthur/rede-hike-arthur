Template.Feed.events({
	"submit form": function(event, template) {
		event.preventDefault();
		var formText = event.target.text.value;
		event.target.text.value = "";
		Posts.insert ({
			text: formText
		})
	}
});

Template.Feed.helpers({
	posts: function() {
		var collectionPosts = Posts.find().fetch();
		return collectionPosts;
	}
});