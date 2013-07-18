function bookmark() {
	
			var title = 'Camayan Beach Resort';
			var url = 'http://www.camayanresort.com';
			if (document.all) window.external.AddFavorite(url, title);
			else if (window.sidebar) window.sidebar.addPanel(title, url, "");
			
		}

