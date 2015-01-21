<h1>Dokumentation Usables</h1>
<p>Usables innehåller ett flertal användbara plugins för att göra din webbplats mer dynamisk och interaktiv.
Det finns fem stycken som du kan använda var för sig eller slå ihop om man vill det. Dessa plugins är:<br />
- Kontaktformulär <br />
- Bild karusell	<br />
- Lightbox	<br />
- Bild galleri<br />
- Visa/Dölj innehåll<br /></p>

<p>För att kunna använda något av dessa plugins krävs först:</p>
<div class = "code">
<p><xmp><script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script></xmp></p>
</div>

<h2>Kontaktformulär</h2>
<p>Installation</p>
<p>1. Börja med att integrera contactform.js</p>
<div class = "code">
<p><xmp><script src="contactform.js"></script></xmp></p>
</div>
<p>2. Lägg sedan filen contact.php i samma mapp som din sidkontroller (t.ex. index.php)</p>
<p>3. Skapa ditt formulär. Exempel</p>
<div class = "code">
<p><xmp> <div class="form-style" id="contact_form">
   
    <div id="contact_results"></div>
    <div id="contact_body">
<label><span>Namn <span class="required">*</span></span>
<input type="text" name="name" id="name" required="true" class="input-field"/>
</label>
<label><span>Email <span class="required">*</span></span>
<input type="email" name="email" required="true" class="input-field"/>
</label>
<label><span>Telefon<span class="required">*</span></span>
<input type="text" name="phone2" maxlength="15"  required="true" class="input-field" />
</label>
<label><span>Ämne<span class="required">*</span></span>
<input name="subject" class="input-field" type = "text" required ="true"  >
</label>
<label><span>Meddelande <span class="required">*</span></span>
<textarea name="message" id="message" class="textarea-field" required="true"></textarea>
</label>
<label>
<span>&nbsp;</span><input type="submit" id="submit" value="Skicka" />
</label> </div>
</div></xmp></p>
</div>
<p>Där du med hjälp av klassen "form-style" bestämmer hur formuläret ska se ut. Som du kan modifiera i filen contactform.less</p>
<p>4. Inkludera contactform.less</p>


<br />
<h2>Bildkarusell</h2>
<p>Installation</p>
<p>1. Integrera carousel.js</p>
<div class = "code">
<p><xmp><script src="lightbox.js"></script></xmp></p>
</div>
<p>2. Skriv ut html koden för karusellen med klasserna "scroll left/right", "carousel" och "carousel-list".
<div class = "code">
<p><xmp>
<div class='scroll-left'><img src='img/img-carousel/left.png' /></div>  
  <div class='carousel'>  
        <ul class='carousel-list'>  
        
            <li><img src="img/img-carousel/bild1.jpg" class="thumb"></li> 
            <li><img src="img/img-carousel/bild2.jpg" class="thumb"></li>
    		<li><img src="img/img-carousel/bild3.jpg" class="thumb"></li>
   		</ul>  
  </div>  
  
  <div class='scroll-right'><img src='img/img-carousel/right.png' /></div>  
    
</div>  
</xmp></p>
</div>
<p>3. Inkludera stylesheet carousel.less</p>
<p>4. Vill du ha stöd för light box (valfritt) behöver du lägga till detta i html koden. Resten av installationen finns längre ner.</p>
<div class = "code">
<p><xmp>
        <ul class='carousel-list'>  
        <div id = "imageSet">
            <li><a href="img/img-carousel/bild1.jpg" class="lightbox"> 
<img src="img/img-carousel/bild1.jpg" class="thumb"></a></li> 
            <li><a href="img/img-carousel/bild2.jpg" class="lightbox"> 
<img src="img/img-carousel/bild2.jpg" class="thumb"></a></li>
    <li><a href="img/img-carousel/bild3.jpg" class="lightbox"> 
<img src="img/img-carousel/bild3.jpg" class="thumb"></a></li>
    <li><a href="img/img-carousel/bild4.jpg" class="lightbox"> 
<img src="img/img-carousel/bild4.jpg" class="thumb"></a></li>
    <li><a href="img/img-carousel/bild5.jpg" class="lightbox"> 
<img src="img/img-carousel/bild5.jpg" class="thumb"></a></li>
            
           </div> 
   		</ul>  
 
</xmp></p>
</div>
<br />



<h2>Lightbox</h2>
<p>Installation</p>
<p>1. Integrera lightbox.js</p>
<div class = "code">
<p><xmp><script src="lightbox.js"></script></xmp></p>
</div>
<p>2. Skriv ut html kod. Viktigt att lägga bilderna inom "imageSet". Sedan behöver man lägga till klassen
lightbox i varje a tagg. Annars kommer inte bilden att visas i lightboxen.
<div class = "code">
<p><xmp>
<div id = "imageSet">
            <li><a href="img/bild1.jpg" class="lightbox"> 
<img src="img/bild1.jpg" class="thumb"></a></li> 
            <li><a href="img/bild2.jpg" class="lightbox"> 
<img src="img/bild2.jpg" class="thumb"></a></li>
    <li><a href="img/bild3.jpg" class="lightbox"> 
<img src="img/bild3.jpg" class="thumb"></a></li>
    <li><a href="img/bild4.jpg" class="lightbox"> 
<img src="img/bild4.jpg" class="thumb"></a></li>
    <li><a href="img/bild5.jpg" class="lightbox"> 
<img src="img/bild5.jpg" class="thumb"></a></li>
            
           </div>
             
</xmp></p>
</div>
<p>3. Inkludera stylesheet lightbox.less</p>

<br />

<h2>Galleri</h2>
<p>Installation</p>
<p>1. Integrera gallery.js</p>
<div class = "code">
<p><xmp><script src="expand.js"></script></xmp></p>
</div>
<p>2. Skriv ut html kod. Exempel.
<div class = "code">
<p><xmp>
<div id="gallery">
	<img src="img/img-gallery/bild1.jpg" alt="" id="main-img" />
	<ul class = "thumb">
	  <li><img src="img/img-gallery/bild1.jpg" alt="" /></li>
	  <li><img src="img/img-gallery/bild2.jpg" alt="" /></li>
	  <li><img src="img/img-gallery/bild3.jpg" alt="" /></li>
	  <li><img src="img/img-gallery/bild4.jpg" alt="" /></li>
	  <li><img src="img/img-gallery/bild5.jpg" alt="" /></li>
	</ul>
</div>
</xmp></p>
</div>
<p>3. Inkludera stylesheet gallery.less</p>
<br />

<h2>Visa/Dölj innehåll</h2>
<p>Installation</p>
<p>1. Integrera expand.js</p>
<div class = "code">
<p><xmp><script src="expand.js"></script></xmp></p>
</div>
<p>2. Skriv ut html kod. Exempel.
<div class = "code">
<p><xmp>
<div class="expand">
<div class="topic">Kommentarer <span class = "show">v</span></div>
<div class="content"><img src =
"https://www.google.com/help/hc/images/blogger/blogger_1725597_threaded_comments_en.png"/>
</div>
<br />
<div class="topic">Lämna kommentar<span class = "show">v</span></div>
<div class="content"><img style = "margin:20px; 0" src = 
"http://webdeveloperplus.com/wp-content/uploads/2009/09/WordPress-Comment-Form.png" />
</div>
<br />

<div class="topic">Dela<span class = "show">v</span></div>
<div class="content"><h3 style = "float:left; margin-left:70px;">Dela innehåll på:</h3>
<img src = "http://iconion.com/posts/video/social-icons/social-icons.jpg" width = "550" /> 
</div>

                            
 	</div>  
</xmp></p>
</div>
<p>3. Inkludera stylesheet expand.less</p>
			    