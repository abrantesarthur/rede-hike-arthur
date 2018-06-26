Posts = new Mongo.Collection("posts"); 

Meteor.methods({
	"insertPost" : function(formText) {
			Posts.insert ({
				text: formText,
				authorId: Meteor.userId()
			})
	}
});