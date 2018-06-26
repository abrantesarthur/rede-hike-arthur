Template.NovoPost.events({
	"submit form": function(event, template) {
		event.preventDefault();
		var formText = event.target.text.value;
		event.target.text.value = "";
		
		Meteor.call("insertPost", formText);
	}
});