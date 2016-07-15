(function(angular) {
	"use strict";

	angular
		.module('posts')
		.factory('PostService', PostService);
		
	var baseUrl = 'js/components/posts/views/';
	
	function PostService(){
		return {
	    	getPosts: getPosts
	  	}

	  	function getPosts(){
	    	var posts = [
	    	{
		    	title: 'Bem vindo', 
		    	author: 'Alan Soares', 
		    	date: '15/07/2016', 
		    	description: 'Este foi o primeiro post publicado na página. Espero que aproveitem ao máximo todo o conteúdo que estarei compartilhando.',
		    	url: baseUrl + 'boas-vindas.html'
    		}];
    		
			return posts;
	  	}
	}
})(angular);
