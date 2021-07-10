// Gender

var genDer = prompt('Type Mele/Female')
   genDer = genDer.toLowerCase();

   document.getElementById('gender').innerHTML = genDer;

   // name

var vC = prompt('Type Name of FB ID :');
   vC = vC.toLowerCase();

   document.getElementById('name').innerHTML = vC;

   // Finished


var  fakeIdList = prompt(' Please type her/his name again')

switch (fakeIdList){
   case 'angel':
   case 'angel sadiya':
   case 'angel mim':
   case 'angel nusrat':
   case 'nusrat jahan':
   case 'হুরাইরা বিনতে ঝিলিক':
   case 'angel nuri':
   case 'এনজেল নুরী':
   case 'sadiya mim':
   case 'angel mithila':
   case 'Nusrat faria':
   case 'Fariha jahan':
   case 'taniya':
   case 'angel taniya':
   case 'Sulatana Shamim':
   case 'Sabiha Afrin Trina':
   case 'Zaya Ahmed':
   case 'Jahanara Jaman':
   case 'Anisha Rahman':
   case 'Umme khair Salma':
   case 'Saphiyana':
   case 'Amena Begum':
   case 'Sharmin Mitu':
   case 'Khadeja Sathi':
   case 'Farzana Akter Orpi':
   case 'Suriya Shimu':
   case 'Afsana Mim':
   case 'Arisha Amin':
   case 'Jannatul Nur':
   case 'Reshmi Akter':
   case 'Maria Islam':
   case 'Nihariaka Nath':
   case 'Nus Rat':
   case 'Angel Angel':
   case 'Shreya Moni':
   case 'Angel Moni':
   case 'Taslima Akter':
   case 'nuri':
   case 'Noorie':
   case 'norie':
   case 'Norie':
   document.getElementById('state').innerHTML = 'Fake ID';
   break;

   default:
   document.getElementById('state').innerHTML = 'Real ID';

}





