function testEmailAddress(email) 
{
	if (email == "") 
	{
		return false;
	}
	
	var atPos = email.indexOf("@",1);// make sure that email contains an "@" symbol
	if (atPos == -1) 
	{
		return false;
	}
	
	if (email.indexOf("@",atPos+1) != -1) 
	{	// make sure that the email contains only one "@" symbol
		return false;
	}
	
	var periodPos = email.indexOf(".",atPos);
	if (periodPos == -1) 
	{					// and at least one "." after the "@"
		return false;
	}
	if (periodPos+3 > email.length)	
	{		// must be at least 2 characters after the "."
		return false;
	}
			
	return true;
}

function clearText()  
{
	document.getElementById("error1").innerHTML="";
	document.getElementById("error2").innerHTML="";
	document.getElementById("error3").innerHTML="";
	document.getElementById("error4").innerHTML="";
	document.getElementById("error5").innerHTML="";
}



function validateForm(formData)
{
	//get values from the form
	var firstName = formData.firstName.value;
	var lastName = formData.lastName.value;
	var email = formData.email.value;
	var phone = formData.phone.value;
	var type = formData.type.value;
	
	
	//do validation
	var errorCount = 0;
	if(firstName=="" || firstName==null)
	{
		document.getElementById("error1").innerHTML="You must enter a first name";
		errorCount++;
	}
	else
	{
		document.getElementById("error1").innerHTML="";
	}
	
//------------------------------------------------------------------------------
	if(lastName=="" || lastName==null)
	{
		document.getElementById("error2").innerHTML="You must enter a Last Name";
		errorCount++;
	}
	else
	{
		document.getElementById("error2").innerHTML="";
	}

//------------------------------------------------------------------------------	
	if(email=="" || email==null)
	{
		document.getElementById("error3").innerHTML="You must enter an email";
		errorCount++;
	}
	else if(testEmailAddress(email)==false)
	{
		document.getElementById("error3").innerHTML="Please enter a valid email address";
		errorCount++;
	}
	else
	{
		document.getElementById("error3").innerHTML="";
	}

//------------------------------------------------------------------------------
	if(phone=="" || phone==null)
	{
		document.getElementById("error4").innerHTML="You must enter a phone number";
		errorCount++;
	}
	else if(phoneNumber(inputtxt)==false)
	{
		document.getElementById("error3").innerHTML="Please enter a valid phone number";
		errorCount++;
	}
	else
	{
		document.getElementById("error4").innerHTML="";
	}

//------------------------------------------------------------------------------	
	if(type=="default" || type==null)
		{
			document.getElementById("error5").innerHTML="You must select a type of real estate";
			errorCount++;
		}
		else
		{
			document.getElementById("error5").innerHTML="";
		}
//------------------------------------------------------------------------------
	

//------------------------------------------------------------------------------		
	
	if(errorCount==0)
	{
		return true;
	}
	else
	{
		return false;
	}
	
}