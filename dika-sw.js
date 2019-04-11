self.addEventListener('install',	function(event)	{
		console.log('Service	worker	installing...');
		//	TODO	3.4:	Skip	waiting
		//STEP 3 : menambahkan skipWaiting pada halaman web
		self.skipWaiting();
});
//	I'm	a	new	service	worker
// STEP 2 : Menambahkan script untuk sebuah event jika sudah terinstall
// dan menuliskan log Service worker activating
self.addEventListener('activate',	function(event)	{
		console.log('Service	worker	activating...');
});
//  Menambahkan script untuk event jika sudah fetch dan menuliskan log Fecthing
self.addEventListener('fetch',	function(event)	{
		console.log('Fetching:',	event.request.url);
});