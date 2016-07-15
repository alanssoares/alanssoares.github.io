(function(angular) {
	"use strict";
	
	angular
		.module('posts')
		.controller('PostsCtrl', PostsCtrl);
	
	var baseUrl = 'https://github.com/alanssoares/alanssoares.github.io/tree/master/js/components/posts/views/';

	PostsCtrl.$inject = ['PostService'];
	
	function PostsCtrl(PostService) {
	    	var vmPostsCtrl = this;
		vmPostsCtrl.showList = true;
		vmPostsCtrl.showOnlyOne = false;
		vmPostsCtrl.showPost = showPost;
		vmPostsCtrl.posts = PostService.getPosts();
		vmPostsCtrl.post = {};
		
	    	function showPost(post){
			vmPostsCtrl.showList = false;
			vmPostsCtrl.showOnlyOne = true;
			vmPostsCtrl.post = post;
	    }
	}
	
})(angular);
