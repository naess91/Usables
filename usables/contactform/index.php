<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Kontakt</title>
<LINK href="contactform.css" rel="stylesheet" type="text/css">
<script src="../modernizer.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
<script src="contactform.js"></script>
</head>

<body style = "background-color:#999;">

<div class="form-style" id="contact_form">
   
    <div id="contact_results"></div>
    <div id="contact_body">
<label><span>Namn <span class="required">*</span></span>
<input type="text" name="name" id="name" required="true" class="input-field"/>
</label>
<label><span>Email <span class="required">*</span></span>
<input type="email" name="email" required="true" class="input-field"/>
</label>
<label><span>Telefon<span class="required">*</span></span>
<input type="text" name="phone2" maxlength="15"  required="true" class="tel-number-field long" />
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
</div>
</body>
</html>
