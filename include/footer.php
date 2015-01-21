<?php
  $d = explode("/", trim($path, "/"));
  $srcUrl = '../source.php?dir=' . end($d) . '&amp;file=' . basename($_SERVER["PHP_SELF"]) . '#file';
?>
 
<footer id='footer'>


<a href="#" class="back-to-top">Back to Top</a>
</footer>

<script src="../include/js/erik.js"></script>
<script src="../include/js/usables/carousel.js"></script>
<script src="../include/js/usables/lightbox.js"></script>
<script src="../include/js/usables/contactform.js"></script>
<script src="../include/js/usables/gallery.js"></script>
<script src="../include/js/usables/expand.js"></script>


<script src="../include/js/skrollr.js"></script>
<script src="../include/js/imagesloaded.js"></script>
<script src="../include/js/waypoints.min.js"></script>
<script src="../include/js/autoscroll.js"></script>
<script src="main.js"></script>
</body>
</html> 