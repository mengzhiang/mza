var Parcel =function(){
	
	var Content= function(){
		var value = 11;
		this.value = function(){
			return value;
		}
	}
	
	this.ship = function(){
		var c = new Content();
		alert(c.value());
	}
	
}
/*访问不到Content,外部不可能访问
var c = new Content();
c.value(); 
 * */


var p = new Parcel();
p.ship();