					var textVal = [];
					var fillLoc = [];
					var countIndex = 0;
					var countListMap = 0;
					$( "span" ).each( function( index, element ){
					     textVal[index] = $(this).text();
					     countIndex ++;
					})
					var loc = [];
					 $.each($('.listFieldMap'),function(index, value) {
						 	var idFutsalField, fieldName, latitude, longitude;
							for(var x = 0 ; x < 4 ; x ++){
									if(x == 0) {
										idFutsalField = textVal[countListMap];
									}
									else if(x == 1){
										fieldName = textVal[countListMap];
									}
									else if(x == 2){
										latitude = textVal[countListMap];
									}
									else{
										longitude = textVal[countListMap];
									}
								countListMap++;
							}
							 loc.push({idFutsalField: idFutsalField, fieldName: fieldName, latitude: latitude, longitude : longitude});
						});				 
						function initMap(){
							var map = new google.maps.Map(document.getElementById('map'), {
								zoom : 13,
								center : {lat : -6.197180299999999,lng : 106.84686999999997}
							});
							setMarkers(map);
							var markers = [];
							function setMarkers(map) {
								var image = { url : 'https://image.ibb.co/dznXH5/pointer.png'};
								var shape = {
									coords : [ 1, 1, 1, 50, 48, 50, 48, 1 ],
									type : 'poly'
								};
								var markerLocation = [];
								for (var i = 0; i < loc.length; i++) {
									var locations = loc[i];
									var latLng = new google.maps.LatLng(locations.latitude, locations.longitude);
									var marker = new google.maps.Marker({
										position : latLng,
										map : map, 
										icon : image,
										shape : shape,
										title : locations.fieldName,
										id : locations.idFutsalField,
										location: locations.location
									});
									markerLocation[i] = marker;
									google.maps.event.addListener(marker,'click',function(){
										for(var j=0;j<markerLocation.length;j++){
											markerLocation[j].setIcon("https://image.ibb.co/fDi8ma/pointer_opacity.png");
										}
										this.setIcon("https://image.ibb.co/kzvaWa/Webp_net_resizeimage_1.png");										
										$(".form-box").removeClass("collapse");
										var futsalField = {};
										futsalField.idFutsalField = this.id;
										futsalField.fieldNeme = this.fieldName;
										$.ajax({
										 type: "POST",
										 url: "/detail-field-map",
										 data: futsalField,
										 timeout: 600000,
										 success: function (data) { 									
											var latLng = new google.maps.LatLng(data.latitude, data.longitude);
											map.setCenter(latLng);																						                 	
											$('#surveyer').html(data.fieldName);
											$('#surveyer1').html(data.fieldName);
											$('#photo').html(data.photo);
											$('#location').html(data.detailLocation);
											$('#latestupdate').html(data.latestUpdate); 
											$('#telepon').html(data.phone);
											$('#jumlahlapangan').html(data.numberOfField); 
											$('#jam_buka').html(data.openingHours);
											$('#harga').html(data.price);
											},
											error: function (e) {
											   console.log("ERROR");}
											});
											});
								}
							}
						}			
					