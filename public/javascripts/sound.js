	function soundController()
	{
		this.sounds = new loadMusic();
		this.stop = false;

		this.stopPlay = function()
		{
			this.sounds.sound_bg.pause();
			this.sounds.sound_bg1.pause();
			this.stop = true;
		}

		this.resume = function()
		{
			this.sounds.sound_bg.play();
			this.sounds.sound_bg1.play();
			this.stop = false;
		}

		this.play = function(name)
		{
			if(this.stop)
				return;

			if(name=='City')
			{
				if(this.sounds.sound_city.pause)
					this.sounds.sound_city.play();
			}
			else if(name=='Factory')
			{
				if(this.sounds.sound_factory.ispause())
					this.sounds.sound_factory.play();
			}
			else if(name=='Greenbelt')
			{
				if(this.sounds.sound_greenbelt.ispause())
					this.sounds.sound_greenbelt.play();
			}
			else if(name=='WaterFilter')
			{
				if(this.sounds.sound_waterFacility.ispause())
					this.sounds.sound_waterFacility.play();
			}
			else if(name=='click')
			{
				if(this.sounds.sound_click.ispause())
					this.sounds.sound_click.play();
			}
			else if(name=='bubble')
			{
				if(this.sounds.sound_bubble.ispause())
					this.sounds.sound_bubble.play();
			}
			else if(name=='hover')
			{
				if(this.sounds.sound_hover.ispause())
					this.sounds.sound_hover.play();
			}
			else if(name=='notgood')
			{
				if(this.sounds.sound_notgood.ispause())
					this.sounds.sound_notgood.play();
			}
			else if(name=='place')
			{
				if(this.sounds.sound_place.ispause())
					this.sounds.sound_place.play();
			}
		}
	}

	function loadMusic()
	{
		this.sound_bg = new Sound('sound/Product/bgm1.mp3',false,false);
		this.sound_bg1 = new Sound('sound/Product/ambient.mp3',false,false);
		this.sound_city = new Sound('sound/Product/City.mp3',false,false);
		this.sound_factory = new Sound('sound/Product/factory.mp3',false,false);
		this.sound_greenbelt = new Sound('sound/Product/greenbelt.mp3',false,false);
		this.sound_waterFacility = new Sound('sound/Product/waterFacility.mp3',false,false);
		this.sound_click = new Sound('sound/Product/click.mp3',false,false);
		this.sound_hover = new Sound('sound/Product/hover_over.mp3',false,false);
		this.sound_notgood = new Sound('sound/Product/notGoodPlace.mp3',false,false);
		this.sound_place = new Sound('sound/Product/placingBuilding.mp3',false,false);
		this.sound_bubble = new Sound('sound/Product/pointbubble.mp3',false,false);

		this.sound_bg.bgAudio.autoplay = true;
		this.sound_bg.bgAudio.loop = true;
		this.sound_bg1.bgAudio.autoplay = true;
		this.sound_bg1.bgAudio.loop = true;

		this.sound_bg.bgAudio.load();
		this.sound_bg1.bgAudio.load();

	}

	function Sound(src,loop,autoplay)
	{	
		this.bgAudio = document.createElement('audio');
		this.bgAudio.setAttribute('src',src);

		if(autoplay)
			this.bgAudio.setAttribute('autoplay','autoplay');

		if(loop)
			this.bgAudio.setAttribute('loop','loop');

		this.play = function()
		{
			this.bgAudio.play();
		}

		this.pause = function()
		{
			this.bgAudio.pause();
		}

		this.ispause = function()
		{
			return this.bgAudio.pause;
		}

	}


