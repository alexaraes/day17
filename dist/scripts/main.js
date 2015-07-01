$(document).on('ready', function() {

	var App = Backbone.Router.extend({
		routes: {
			'load': 'load',
			'start': 'start',
			'game': 'game',
			'leaderboard': 'leaderboard',
			'settings': 'settings'
		},
		load: function() {

			$('.page').hide();
			$('#loading').show();

			setTimeout(function(){
					$('#loading').hide();

					myApp.navigate('start', {trigger: true});
			}, 4000)

		},
		start: function() {

			$('.page').hide();
			$('#menu').show();

		},
		game: function() {

			$('.page').hide();
			$('#game').show();

		},
		leaderboard: function() {

			$('.page').hide();
			$('#leaderboard').show();

		},
		settings: function() {

			$('.page').hide();
			$('#settings').show();

		}
	});

	Backbone.history.start();

	var myApp = new App();

	myApp.navigate('load', {trigger: true});

	$('#start').click(function(e) {
		e.preventDefault();	
		myApp.navigate('game', {trigger: true});
	});
	$('#scores').click(function(e) {
		e.preventDefault();	
		myApp.navigate('leaderboard', {trigger: true});
	});
	$('#settings-btn').click(function(e) {
		e.preventDefault();	
		myApp.navigate('settings', {trigger: true});
	});
	$('.back-btn').click(function(e) {
		e.preventDefault();	
		myApp.navigate('start', {trigger: true});
	});
	
});