(function(angular) {
	"use strict";
	
	angular
		.module('posts')
		.controller('PostsCtrl', PostsCtrl);
	
	function PostsCtrl() {
	    var vmPostsCtrl = this;
	    
	    vmPostsCtrl.posts = [{
	    title: 'Como criar um Blog', 
	    author: 'Alan Soares', 
	    date: '13/07/2016', 
	    content: 'Este é um post inicial que tem como objetivo visualizar uma lista de posts. Cada post possui um conjunto de informações que identificam o post'
	    }];
	}
	
})(angular);
