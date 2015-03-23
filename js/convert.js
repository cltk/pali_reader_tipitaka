function convert()
{
	var spell = document.convertor.input.value;

	for (Count = 0; Count < 4; Count++) 
	{
		if (document.convertor.R1[Count].checked)
		break;
	}
	for (Counta = 0; Counta < 4; Counta++) 
	{
		if (document.convertor.R2[Counta].checked)
		break;
	}
	//alert(Count + ' ' + Counta);
	if (Count == 0)
	{
		if (Counta == 1) // CSCD to unicode
		{
			spell = spell.replace(/±/g, '\u0101');
			spell = spell.replace(/²/g, '\u012B');
			spell = spell.replace(/³/g, '\u016B');
			spell = spell.replace(/µ/g, '\u1E6D');
			spell = spell.replace(/¹/g, '\u1E0D');
			spell = spell.replace(/ª/g, '\u1E45');
			spell = spell.replace(/º/g, '\u1E47');
			spell = spell.replace(/½/g, '\u1E43');
			spell = spell.replace(/\ñ/g, '\u00F1');
			spell = spell.replace(/\¼/g, '\u1E37');
			spell = spell.replace(/â/g, '\u0100');
			spell = spell.replace(/ä/g, '\u012A');
			spell = spell.replace(/æ/g, '\u016A');
			spell = spell.replace(/ò/g, '\u1E6C');
			spell = spell.replace(/ô/g, '\u1E0C');
			spell = spell.replace(/ö/g, '\u1E46');
			spell = spell.replace(/ì/g, '\u1E42');
			spell = spell.replace(/¤/g, '\u00D1');
			spell = spell.replace(/ý/g, '\u1E36');
			spell = spell.replace(/\u000D/g, '');
			spell = spell.replace(/\u000A/g, '');
		}
		else if (Counta == 2) // CSCD to velthius
		{
			spell = spell.replace(/±/g, 'aa');
			spell = spell.replace(/²/g, 'ii');
			spell = spell.replace(/³/g, 'uu');
			spell = spell.replace(/µ/g, '.t');
			spell = spell.replace(/¹/g, '.d');
			spell = spell.replace(/ª/g, '"n');
			spell = spell.replace(/º/g, '.n');
			spell = spell.replace(/½/g, '.m');
			spell = spell.replace(/\ñ/g, '~n');
			spell = spell.replace(/\¼/g, '.l');
			spell = spell.replace(/â/g, 'AA');
			spell = spell.replace(/ä/g, 'II');
			spell = spell.replace(/æ/g, 'UU');
			spell = spell.replace(/ò/g, '.T');
			spell = spell.replace(/ô/g, '.D');
			spell = spell.replace(/ö/g, '.N');
			spell = spell.replace(/ì/g, '.M');
			spell = spell.replace(/¤/g, '~N');
			spell = spell.replace(/ý/g, '.L');
			spell = spell.replace(/\u000D/g, '');
			spell = spell.replace(/\u000A/g, '');
			spell = spell.replace(/\u201C/g, '\'');
			spell = spell.replace(/\u201D/g, '\'');
		}
		else if (Counta == 3) { // to Thai
			spell = spell.replace(/±/g, 'aa');
			spell = spell.replace(/²/g, 'ii');
			spell = spell.replace(/³/g, 'uu');
			spell = spell.replace(/µ/g, '.t');
			spell = spell.replace(/¹/g, '.d');
			spell = spell.replace(/ª/g, '"n');
			spell = spell.replace(/º/g, '.n');
			spell = spell.replace(/½/g, '.m');
			spell = spell.replace(/\ñ/g, '~n');
			spell = spell.replace(/\¼/g, '.l');
			spell = spell.replace(/â/g, 'AA');
			spell = spell.replace(/ä/g, 'II');
			spell = spell.replace(/æ/g, 'UU');
			spell = spell.replace(/ò/g, '.T');
			spell = spell.replace(/ô/g, '.D');
			spell = spell.replace(/ö/g, '.N');
			spell = spell.replace(/ì/g, '.M');
			spell = spell.replace(/¤/g, '~N');
			spell = spell.replace(/ý/g, '.L');
			spell = spell.replace(/\u000D/g, '');
			spell = spell.replace(/\u000A/g, '');
			spell = spell.replace(/\u201C/g, '\'');
			spell = spell.replace(/\u201D/g, '\'');	
			spell = thaiconv(spell);
		}	
	}
	else if (Count == 1)
	{
		if (Counta == 0)
		{
			spell = '<Not Available>';
		}
		else if (Counta == 2) // Unicode to velthius
		{
			spell = spell.replace(/\u0101/g, 'aa');
			spell = spell.replace(/\u012B/g, 'ii');
			spell = spell.replace(/\u016B/g, 'uu');
			spell = spell.replace(/\u1E6D/g, '\.t');
			spell = spell.replace(/\u1E0D/g, '\.d');
			spell = spell.replace(/\u1E45/g, '\"n');
			spell = spell.replace(/\u1E47/g, '\.n');
			spell = spell.replace(/\u1E43/g, '\.m');
			spell = spell.replace(/\u00F1/g, '\~n');
			spell = spell.replace(/\u1E37/g, '\.l');
			spell = spell.replace(/\u0100/g, 'AA');
			spell = spell.replace(/\u012A/g, 'II');
			spell = spell.replace(/\u016A/g, 'UU');
			spell = spell.replace(/\u1E6C/g, '\.T');
			spell = spell.replace(/\u1E0C/g, '\.D');
			spell = spell.replace(/\u1E46/g, '\.N');
			spell = spell.replace(/\u1E42/g, '\.M');
			spell = spell.replace(/\u00D1/g, '\~N');
			spell = spell.replace(/\u1E36/g, '\.L');
		}
		else if (Counta == 3) // Unicode to Thai
		{
			spell = spell.replace(/\u0101/g, 'aa');
			spell = spell.replace(/\u012B/g, 'ii');
			spell = spell.replace(/\u016B/g, 'uu');
			spell = spell.replace(/\u1E6D/g, '\.t');
			spell = spell.replace(/\u1E0D/g, '\.d');
			spell = spell.replace(/\u1E45/g, '\"n');
			spell = spell.replace(/\u1E47/g, '\.n');
			spell = spell.replace(/\u1E43/g, '\.m');
			spell = spell.replace(/\u00F1/g, '\~n');
			spell = spell.replace(/\u1E37/g, '\.l');
			spell = spell.replace(/\u0100/g, 'AA');
			spell = spell.replace(/\u012A/g, 'II');
			spell = spell.replace(/\u016A/g, 'UU');
			spell = spell.replace(/\u1E6C/g, '\.T');
			spell = spell.replace(/\u1E0C/g, '\.D');
			spell = spell.replace(/\u1E46/g, '\.N');
			spell = spell.replace(/\u1E42/g, '\.M');
			spell = spell.replace(/\u00D1/g, '\~N');
			spell = spell.replace(/\u1E36/g, '\.L');
			spell = thaiconv(spell);
		}
	}
	else if (Count == 2)
	{
		if (Counta == 0)
		{
			spell = '<Not Available>';
		}
		else if (Counta == 1) // Velthius to unicode
		{
			spell = spell.replace(/aa/g, '\u0101');
			spell = spell.replace(/ii/g, '\u012B');
			spell = spell.replace(/uu/g, '\u016B');
			spell = spell.replace(/\.t/g, '\u1E6D');
			spell = spell.replace(/\.d/g, '\u1E0D');
			spell = spell.replace(/\"n/g, '\u1E45');
			spell = spell.replace(/\.n/g, '\u1E47');
			spell = spell.replace(/\.m/g, '\u1E43');
			spell = spell.replace(/\~n/g, '\u00F1');
			spell = spell.replace(/\.l/g, '\u1E37');
			spell = spell.replace(/AA/g, '\u0100');
			spell = spell.replace(/II/g, '\u012A');
			spell = spell.replace(/UU/g, '\u016A');
			spell = spell.replace(/\.T/g, '\u1E6C');
			spell = spell.replace(/\.D/g, '\u1E0C');
			spell = spell.replace(/\.N/g, '\u1E46');
			spell = spell.replace(/\.M/g, '\u1E42');
			spell = spell.replace(/\~N/g, '\u00D1');
			spell = spell.replace(/\.L/g, '\u1E36');
		}
		else if (Counta == 3) // Velthius to Thai
		{
			spell = thaiconv(spell);
		}			
	}
	document.getElementById('output').value = spell;	
}



function changeit(what,which)
{
	if (what == 'c')
	{
		if (which == 1) document.getElementById('input').setAttribute('style','font-family: VriRomanPali CN');
		else document.getElementById('output').setAttribute('style','font-family: VriRomanPali CN');
	}
	else
	{
		if (what == 'u')
		{
			
			if (which == 1 && document.convertor.R2[1].checked) document.convertor.R2[2].checked = true;
			else if (which == 2 && document.convertor.R1[1].checked) document.convertor.R1[2].checked = true;
		}
		else if (what == 'v')
		{
			
			if (which == 1 && document.convertor.R2[2].checked) document.convertor.R2[1].checked = true;
			else if (which == 2 && document.convertor.R1[2].checked) document.convertor.R1[1].checked = true;
		}
		else if (what == 't')
		{
			
			if (which == 1 && document.convertor.R2[3].checked) document.convertor.R2[1].checked = true;
			else if (which == 2 && document.convertor.R1[3].checked) document.convertor.R1[1].checked = true;
		}
		if (which == 1) document.getElementById('input').setAttribute('style','font-family: Arial Unicode MS');
		else document.getElementById('output').setAttribute('style','font-family: Arial Unicode MS');
	}
	convert();
}
function clearboth()
{
	document.convertor.input.value = '';
	document.convertor.output.value = '';
}

function sendtoconvert(data)
{
	data = data.replace(/\u00B7/g, '\'');
	data = data.replace(/\u00B4/g, '\"');
	data = data.replace(/ M /g, ' ');
	data = data.replace(/ V /g, ' ');
	data = data.replace(/ P /g, ' ');
	data = data.replace(/ T /g, ' ');
	data = data.replace(/ VAR /g, '');

	moveframex('*',defmove[0],defmove[1],0)
	moveframey(1);
	document.convertor.R1[1].checked = true;
	document.convertor.R2[2].checked = true;
	document.getElementById('inputtd').innerHTML = '<textarea id="input" rows="5" cols="50" onkeyup="convert()" style="font-family: Arial Unicode MS"></textarea>';
	document.getElementById('inputtd').innerHTML = '<textarea id="input" rows="5" cols="50" onkeyup="convert()" style="font-family: Arial Unicode MS">' + data + '</textarea>';
	convert();
}
